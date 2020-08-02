import * as Localization from 'expo-localization';
import { I18nResolver } from 'i18n-ts';

type TYPE = {
    add: string;
    perishableGoods: string;
    setLocation: string;
    bestBefore: string;
    successfullyAdded: string;
    letsContinueWithOtherPerishableGood: string;
    cancel: string;
    okay: string;
    new: string;
    chooseAPhoto: string;
    expirationDate: string;
    pickedLocation: string;
    all: string;
    signUp: string;
    name: string;
    emailAddress: string;
    password: string;
    confirmPassword: string;
    submit: string;
    youHaveSuccessfullysignedUp: string;
    aProblemOccurredWhileCommunicatingWithTheServer: string;
    inOrderToMarkAsAvailableYouNeedToSignIn: string;
    signIn: string;
    or: string;
    pleaseEnterAName: string;
    pleaseEnterAPassword: string;
    passwordMustBeAtLeast6Characters: string;
    confirmPasswordMustBeEqualToPassword: string;
    pleaseEnterAnEmailAddress: string;
    pleaseEnterAValidEmailAddress: string;
    nearby: string;
    meter: string;
    showMyNeed: string;
    statusOfMyRequest: string;
    loading: string;
    inOrderToShowYourNeedYouHaveToSignIn: string;
    lookWhoRequestedThis: string;
    approve: string;
    goToSignIn: string;
    goToSignUp: string;
    leaveAMessage: string;
    egBreadMilkOrEggs: string;
    yourRequestHasNotYetBeenApproved: string;
    yourRequestHasAlreadyBeenApproved: string;
    username: string;
    address: string;
    reply: string;
    approved: string;
    pickADate: string;
    confirm: string;
    unsupportedStatus: string;
    unsupportedContent: string;
    yourGoodsAreNotFound: string;
    noGoodsAreAvailable: string;
    resultSetIsEmpty: string;
    pleaseEnterAnItem: string;
    expiryMustNotBeAPastDate: string;
};

const en = {
    add: 'add',
    perishableGoods: 'perishable goods',
    setLocation: 'set location',
    bestBefore: 'best before',
    successfullyAdded: 'successfully added',
    letsContinueWithOtherPerishableGood:
        "let's continue with other perishable good",
    cancel: 'cancel',
    okay: 'Okay',
    new: 'New',
    chooseAPhoto: 'choose a photo',
    expirationDate: 'expiration date',
    pickedLocation: 'picked location',
    all: 'Mine',
    signUp: 'sign up',
    name: 'name',
    emailAddress: 'email address',
    password: 'password',
    confirmPassword: 'confirm password',
    submit: 'submit',
    youHaveSuccessfullysignedUp: 'you have successfully signed up',
    aProblemOccurredWhileCommunicatingWithTheServer:
        'a problem occurred while communicating with the server',
    inOrderToMarkAsAvailableYouNeedToSignIn:
        'in order to mark as available you need to sign in',
    signIn: 'sign in',
    or: 'or',
    pleaseEnterAName: 'please enter a name',
    pleaseEnterAPassword: 'please enter a password',
    passwordMustBeAtLeast6Characters: 'password must be at least 6 characters',
    confirmPasswordMustBeEqualToPassword:
        'confirm password must be equal to password',
    pleaseEnterAnEmailAddress: 'please enter an email address',
    pleaseEnterAValidEmailAddress: 'please enter a valid email address',
    nearby: 'Nearby',
    meter: 'meter',
    showMyNeed: 'show my interest',
    statusOfMyRequest: 'status of my request',
    loading: 'loading',
    inOrderToShowYourNeedYouHaveToSignIn:
        'in order to show your interest you have to sign in',
    lookWhoRequestedThis: 'someone requested this',
    approve: 'approve',
    goToSignIn: 'go to sign in',
    goToSignUp: 'go to sign up',
    leaveAMessage: 'leave a message',
    egBreadMilkOrEggs: 'e.g., bread, milk or eggs',
    yourRequestHasNotYetBeenApproved: 'your request has not yet been approved',
    yourRequestHasAlreadyBeenApproved: 'your request has already been approved',
    username: 'username',
    address: 'address',
    reply: 'reply',
    approved: 'approved',
    pickADate: 'pick a date',
    confirm: 'confirm',
    unsupportedStatus: 'unsupported status',
    unsupportedContent: 'unsupported content',
    yourGoodsAreNotFound: 'your goods are not found',
    noGoodsAreAvailable: 'no goods are available',
    resultSetIsEmpty: 'result set is empty',
    pleaseEnterAnItem: 'please enter an item',
    expiryMustNotBeAPastDate: 'expiry must not be a past date',
};

const MESSAGES: any = {
    en: en,
    hu: {
        add: 'hozzáad',
        perishableGoods: 'romlandó áru',
        setLocation: 'hely meghatározása',
        bestBefore: 'jó mielőtt',
        successfullyAdded: 'sikeresen hozzáadva',
        letsContinueWithOtherPerishableGood:
            'gyerünk folytassa más romlandó áruval',
        cancel: 'mégsem',
        okay: 'Oké',
        new: 'Új',
        chooseAPhoto: 'válasszon egy fényképet',
        expirationDate: 'lejárat',
        pickedLocation: 'kiválasztott helyzet',
        all: 'Saját',
        signUp: 'regisztráció',
        name: 'név',
        emailAddress: 'email cím',
        password: 'jelszó',
        confirmPassword: 'jelszó megerősítése',
        submit: 'beküld',
        youHaveSuccessfullysignedUp: 'sikeresen regisztrált',
        aProblemOccurredWhileCommunicatingWithTheServer:
            'probléma merült fel a szerverrel való kommunikáció során',
        inOrderToMarkAsAvailableYouNeedToSignIn:
            'be kell jelentkeznie, hogy megjelölje elérhetőként',
        signIn: 'bejelentkezés',
        or: 'vagy',
        pleaseEnterAName: 'kérjük, adjon meg egy nevet',
        pleaseEnterAPassword: 'kérjük, adjon meg egy jelszót',
        passwordMustBeAtLeast6Characters:
            'a jelszó legalább 6 karakter kell hogy legyen',
        confirmPasswordMustBeEqualToPassword:
            'a két jelszó meg kell hogy egyezzen',
        pleaseEnterAnEmailAddress: 'kérjük, adjon meg egy email címet',
        pleaseEnterAValidEmailAddress:
            'kérjük, adjon meg egy érvényes email címet',
        nearby: 'Közeli',
        meter: 'méter',
        showMyNeed: 'jelzem az igényemet',
        statusOfMyRequest: 'igénylésem állapota',
        loading: 'töltés',
        inOrderToShowYourNeedYouHaveToSignIn:
            'be kell jelentkeznie, hogy jelezze az igényét',
        lookWhoRequestedThis: 'valaki igényelte ezt',
        approve: 'elfogad',
        goToSignIn: 'ugrás a bejelentkezésre',
        goToSignUp: 'ugrás a regisztrációra',
        leaveAMessage: 'hagyjon egy üzenetet',
        egBreadMilkOrEggs: 'pl. kenyér, tej vagy tojás',
        yourRequestHasNotYetBeenApproved: 'kérését még nem fogadták el',
        yourRequestHasAlreadyBeenApproved: 'kérését már elfogadták',
        username: 'felhasználónév',
        address: 'cím',
        reply: 'válasz',
        approved: 'elfogadva',
        pickADate: 'válasszon egy dátumot',
        confirm: 'jóváhagy',
        unsupportedStatus: 'nem támogatott státusz',
        unsupportedContent: 'nem támogatott tartalom',
        yourGoodsAreNotFound: 'az árui nem találhatóak',
        noGoodsAreAvailable: 'nem érhetőek el áruk',
        resultSetIsEmpty: 'üres eredményhalmaz',
        pleaseEnterAnItem: 'kérjük, adjon meg egy árut',
        expiryMustNotBeAPastDate: 'a lejárat nem lehet múltbeli',
    },
    fr: {
        add: 'ajouter',
        perishableGoods: 'denrées périssables',
        setLocation: "définir l'emplacement",
        bestBefore: 'à consommer de préférence avant',
        successfullyAdded: 'ajouté avec succès',
        letsContinueWithOtherPerishableGood:
            "continuons avec d'autres biens périssables",
        cancel: 'annuler',
        okay: "D'accord",
        new: 'Nouveau',
        chooseAPhoto: 'choisissez une photo',
        expirationDate: "date d'expiration",
        pickedLocation: 'emplacement choisi',
        all: 'Mien',
        signUp: "s'inscrire",
        name: 'nom',
        emailAddress: 'adresse email',
        password: 'mot de passe',
        confirmPassword: 'confirmez le mot de passe',
        submit: 'soumettre',
        youHaveSuccessfullysignedUp: 'vous vous êtes inscrit avec succès',
        aProblemOccurredWhileCommunicatingWithTheServer:
            'un problème est survenu lors de la communication avec le serveur',
        inOrderToMarkAsAvailableYouNeedToSignIn:
            'pour marquer comme disponible, vous devez vous connecter',
        signIn: 'se connecter',
        or: 'ou',
        pleaseEnterAName: 'veuillez entrer un nom',
        pleaseEnterAPassword: 'veuillez entrer un mot de passe',
        passwordMustBeAtLeast6Characters:
            'le mot de passe doit contenir au moins 6 caractères',
        confirmPasswordMustBeEqualToPassword:
            'confirmer que le mot de passe doit être égal au mot de passe',
        pleaseEnterAnEmailAddress: 'veuillez entrer une adresse e-mail',
        pleaseEnterAValidEmailAddress:
            'veuillez entrer une adresse e-mail valide',
        nearby: 'Proche',
        meter: 'mètre',
        showMyNeed: 'montrer mon besoin',
        statusOfMyRequest: 'état de mon besoin',
        loading: 'chargement',
        inOrderToShowYourNeedYouHaveToSignIn:
            'afin de montrer votre besoin, vous devez vous connecter',
        lookWhoRequestedThis: "quelqu'un l'a demandé",
        approve: 'approuver',
        goToSignIn: 'aller se connecter',
        goToSignUp: "aller s'inscrire",
        leaveAMessage: 'laisser un message',
        egBreadMilkOrEggs: 'par exemple, pain, lait ou œufs',
        yourRequestHasNotYetBeenApproved:
            "votre demande n'a pas encore été approuvée",
        yourRequestHasAlreadyBeenApproved: 'votre demande a déjà été approuvée',
        username: "nom d'utilisateur",
        address: 'adresse',
        reply: 'réponse',
        approved: 'approuvée',
        pickADate: 'choisis une date',
        confirm: 'confirmer',
        unsupportedStatus: 'statut non pris en charge',
        unsupportedContent: 'contenu non pris en charge',
        yourGoodsAreNotFound: 'vos biens sont pas trouvés',
        noGoodsAreAvailable: "aucune marchandise n'est disponible",
        resultSetIsEmpty: 'le résultat est vide',
        pleaseEnterAnItem: 'veuillez entrer une item',
        expiryMustNotBeAPastDate: "l'expiration ne doit pas être passé",
    },
    es: {
        add: 'agregar',
        perishableGoods: 'productos perecederos',
        setLocation: 'escoger ubicación',
        bestBefore: 'consúmase antes de',
        successfullyAdded: 'agregado con éxito',
        letsContinueWithOtherPerishableGood:
            'continuemos con otro bien perecedero',
        cancel: 'cancelar',
        okay: 'Bien',
        new: 'Nuevo',
        chooseAPhoto: 'elige una foto',
        expirationDate: 'fecha de expiración',
        pickedLocation: 'ubicación elegida',
        all: 'Mío',
        signUp: 'regístrate',
        name: 'nombre',
        emailAddress: 'dirección de correo electrónico',
        password: 'contraseña',
        confirmPassword: 'confirmar contraseña',
        submit: 'enviar',
        youHaveSuccessfullysignedUp: 'te has registrado correctamente',
        aProblemOccurredWhileCommunicatingWithTheServer:
            'se produjo un problema al comunicarse con el servidor',
        inOrderToMarkAsAvailableYouNeedToSignIn:
            'para marcar como disponible, debe iniciar sesión',
        signIn: 'iniciar sesión',
        or: 'o',
        pleaseEnterAName: 'por favor ingrese un nombre',
        pleaseEnterAPassword: 'por favor ingrese una contraseña',
        passwordMustBeAtLeast6Characters:
            'la contraseña debe tener al menos 6 caracteres',
        confirmPasswordMustBeEqualToPassword:
            'confirmar la contraseña debe ser igual a la contraseña',
        pleaseEnterAnEmailAddress:
            'por favor ingrese una dirección de correo electrónico',
        pleaseEnterAValidEmailAddress:
            'por favor ingrese una dirección de correo electrónico válida',
        nearby: 'Cercano',
        meter: 'metro',
        showMyNeed: 'mostrar mi interés',
        statusOfMyRequest: 'estado de mi solicitud',
        loading: 'cargando',
        inOrderToShowYourNeedYouHaveToSignIn:
            'para mostrar su interés, debe iniciar sesión',
        lookWhoRequestedThis: 'alguien solicitó esto',
        approve: 'aprobar',
        goToSignIn: 'ir a iniciar sesión',
        goToSignUp: 'ir a registrarse',
        leaveAMessage: 'deja un mensaje',
        egBreadMilkOrEggs: 'por ejemplo, pan, leche o huevos',
        yourRequestHasNotYetBeenApproved:
            'su solicitud aún no ha sido aprobada',
        yourRequestHasAlreadyBeenApproved: 'su solicitud ya ha sido aprobada',
        username: 'nombre de usuario',
        address: 'dirección',
        reply: 'respuesta',
        approved: 'aprobada',
        pickADate: 'selecciona una fecha',
        confirm: 'confirmar',
        unsupportedStatus: 'estado no soportado',
        unsupportedContent: 'contenido no soportado',
        yourGoodsAreNotFound: 'sus bienes no se encuentran',
        noGoodsAreAvailable: 'no hay bienes disponibles',
        resultSetIsEmpty: 'el conjunto de resultados está vacío',
        pleaseEnterAnItem: 'por favor ingrese un item',
        expiryMustNotBeAPastDate: 'la expiración no debe ser una fecha pasada',
    },
    hi: {
        add: 'डालें',
        perishableGoods: 'खराब होने वाला सामन',
        setLocation: 'अवस्थिति डालें',
        bestBefore: 'श्रेष्ठ उपयोग की आखरी तिथि',
        successfullyAdded: 'सफलता पूर्वक पूरा',
        letsContinueWithOtherPerishableGood: 'अगले खराब होने वाले खाने पर जाएं',
        cancel: 'रद्द करें',
        okay: 'ठीक है',
        new: 'नया',
        chooseAPhoto: 'तस्वीर चुनें',
        expirationDate: 'खराब होने की तिथि',
        pickedLocation: 'चुनी हुई अवस्थिति',
        all: 'मेरे',
        signUp: 'सिग्न उप करें',
        name: 'नाम',
        emailAddress: 'ईमेल',
        password: 'पासवर्ड',
        confirmPassword: 'पासवर्ड(पुष्टि)',
        submit: 'आगे बढ़ें',
        youHaveSuccessfullysignedUp: 'आपका अकाउंट बन गया है',
        aProblemOccurredWhileCommunicatingWithTheServer:
            'सर्वर के साथ दिक्कत है। कृपया बाद में प्रयास करें। ',
        inOrderToMarkAsAvailableYouNeedToSignIn:
            'इसके लिए आपको सिग्न इन करने की आवश्यकता ह। ',
        signIn: 'सिग्न इन',
        or: 'या',
        pleaseEnterAName: 'कृपया नाम डाले। ',
        pleaseEnterAPassword: 'कृपया पासवर्ड डाले। ',
        passwordMustBeAtLeast6Characters:
            'पससवर्ड काम से काम 6 अक्षरों का होना चाहिए। ',
        confirmPasswordMustBeEqualToPassword:
            'साधारण एवं पुष्टि वाला पासवर्ड सामान होने चाहियें।',
        pleaseEnterAnEmailAddress: 'कृपया ईमेल डालें।',
        pleaseEnterAValidEmailAddress: 'कृपया ईमेल सही से डालें। ',
        nearby: 'आस पास के',
        meter: 'मीटर',
        showMyNeed: 'दिलचस्पी दिखाएं',
        statusOfMyRequest: 'निवेदन की स्थिति ',
        loading: 'करपिया प्रतीक्षा करें',
        inOrderToShowYourNeedYouHaveToSignIn:
            'इसके लिए आपको सिग्न इन करने की आवश्यकता ह।',
        lookWhoRequestedThis: 'किसी ने इसका निवेदन करा है ',
        approve: 'हाँ बोलेन',
        goToSignIn: 'सिग्न इन करें',
        goToSignUp: 'सिग्न उप करें',
        leaveAMessage: 'संदेश छोड़ें ',
        egBreadMilkOrEggs: 'उदहारण : अंडा, दूध',
        yourRequestHasNotYetBeenApproved:
            'आपके निवेदन को अभी हाँ नहीं बोलै गया है ',
        yourRequestHasAlreadyBeenApproved:
            'आपके निवेदन को हाँ बोलै जा चूका है ',
        username: 'उपयोगकर्ता नाम',
        address: 'पता',
        reply: 'जवाब दें',
        approved: 'मंज़ूर',
        pickADate: 'तिथि चुनें ',
        confirm: 'कन्फर्म करें',
        unsupportedStatus: 'असमर्थित स्थिति',
        unsupportedContent: 'असमर्थित सामग्री',
        yourGoodsAreNotFound: 'आपका सामन नहीं मिला',
        noGoodsAreAvailable: 'कोई सामन उपलब्ध नहीं है',
        resultSetIsEmpty: 'परिणाम सेट खाली है',
        pleaseEnterAnItem: 'कृपया वास्तु डालें ',
        expiryMustNotBeAPastDate:
            'खराब होने की तिथि भूतकाल की नहीं होनी चाहिए। ',
    },
    default: en,
};

export const i18n = new I18nResolver<TYPE>(MESSAGES, Localization.locale)
    .translation;
