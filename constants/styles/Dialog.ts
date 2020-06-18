import { StyleSheet, PixelRatio } from "react-native";
import Colors from "../Colors";
import Layout from "../Layout";

const borderColor = Colors.tintColor;

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: PixelRatio.getPixelSizeForLayoutSize(11)
      },
    modalView: {
        margin: PixelRatio.getPixelSizeForLayoutSize(10),
        backgroundColor: "white",
        borderRadius: Layout.borderRadius,
        borderWidth: Layout.borderWidth,
        borderColor: borderColor,
        padding: PixelRatio.getPixelSizeForLayoutSize(5),
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
          },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
    modalTextInput: {
        borderWidth: Layout.borderWidth,
        borderColor: borderColor,
        borderRadius: Layout.borderRadius,
        flex: 0.75,
        textAlign: "center",
        marginBottom: PixelRatio.getPixelSizeForLayoutSize(5),
        aspectRatio: 1.75
    },
    modalTextInputWrapper: {
      flexDirection: "row"
    }
  });
