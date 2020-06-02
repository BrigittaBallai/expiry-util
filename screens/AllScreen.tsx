import React from "react";
import {
  FlatList,
  Text,
  View,
  PixelRatio
} from "react-native";
import { NavigationEvents } from "react-navigation";
import DbHelper from "../DbHelper";
import { i18n } from "../constants/Dictionary";
import HttpClient from "../services/HttpClient";
import { SizeRequest } from "../constants/Dtos";
import CachedImage from "../components/CachedImage";

export default class AllScreen extends React.Component {
  static navigationOptions = {
    title: i18n.all
  };
  height = PixelRatio.getPixelSizeForLayoutSize(75);

  constructor() {
    super();
    this.state = {
      dataSource: [
        {
          expiry: new Date("1970-01-01T00:00:00.000Z"),
          id: 1,
          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAAVFBMVEX09PSYmJj////w8PCfn5/T09PDw8Ps7Ozo6OjAwMC9vb3Nzc2np6fQ0NDHx8f7+/vKysqlpaXe3t75+fmcnJytra329vaoqKjj4+O6urqzs7PX19dwzFsyAAACIklEQVR42u3dy3LiMBBA0W7hF4REE794/f9/jizigUmRhVbunrln40LFQheMS71CwkPs99fTqKpvsvrQzM7aeLru+xgengLOo7HN/rjWDS8Couwq/fJLVo0aXDuKSPweMC/vMLjZV2uNJPNfAVEW3anpu52Ytuv6ppMsPgKiuBT/BIhT8z1gNn7X/KipJAccqlocaifVwxLQqurV4ZfwrkmbAi7pOolDk6pegsQxXXtxqFfVMebLSVw65Y9+r6of4lKjqnu5er2D7vfQNX8PrbjU5cfPqKoOH6JZ18osAID/2/H4+SlO7RLRRJzShIACBBBgDQGFCHgZ0LZdJ05ViQAA4BozcRkOcwRYQkAhAgiwhpkYAIDNMROX4TBHgCUEFCKAAGuYiQEA2BwzcRkOcwRYQkAhAgiwhpkYAIDNMROX4TBHgCUEFCKAAGuYiQEA2BwzcRkOcwRYQkAhAgiwhpkYAIDNMROX4TBHgCUEFCKAAGuYiQEA2BwzcRkOcwRYQkAhAgiwZp2Jnf49scg0nY4yiGuD/4AorkUJ4lr4BwJc/wiGFBDStavFnZ0kYQmIUo/qruBW1SIxB4SLJjdxpVbVRsI94KzJ+CaOvOmiywFJrYupFyf6SRd1yAGPgnEnLjS67j8HZOdKVS/y5V1XBzG4dtOkOoc1IJOD6tngZl+uVcuLsAas2kZWta72JteaSxtWEp7FYZiNbfbb2jwMMTz7Db9pGCvtnV2wAAAAAElFTkSuQmCC',
          name: "dummy"
        }
      ]
    };
  }

  remoteURI(localURI, goodId) {
    // Update cache: add new query parameter based on current date!
    return /*HttpClient.findImageURL(goodId, SizeRequest.small)*/ localURI;
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationEvents
          onWillFocus={payload => {
            DbHelper.selectGoods().then(result => {
              this.setState({
                dataSource:
                  result._array
                    .map(a => {
                      return { ...a, expiry: new Date(a.expiry), image: this.remoteURI(a.image, 0) }; // TODO: fixme
                    })
                    .sort((a, b) => a.expiry.getTime() - b.expiry.getTime())
              });
            });
            this.refs._scrollView.scrollToOffset({ offset: 0 }); // Should be in the callback.
          }}
        />
          <FlatList ref="_scrollView"
            data={this.state.dataSource}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={{ flexDirection: "row", height: this.height }}>
                <View style={{ flex: 2, alignItems: "center" }}>
                  <CachedImage
                    source={{ uri: item.image }}
                    style={{ height: "90%", width: "90%", aspectRatio: 1 }}
                  />
                </View>
                <View
                  style={{
                    flex: 2,
                    flexDirection: "column",
                    justifyContent: "center"
                  }}
                >
                  <Text style={{ textAlign: "center" }}>
                    {item.name.toUpperCase()}
                  </Text>
                  <Text style={{ textAlign: "center" }}>
                    {item.expiry.toLocaleDateString()}
                  </Text>
                </View>
              </View>
            )}
          />
      </View>
    );
  }
}
