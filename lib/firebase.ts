// import the functions needed from the SDKs needed
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyC756HYSB1d7XZr2MX3G4gHtprODrQcEmA",
	authDomain: "manage-web-project-664bc.firebaseapp.com",
	projectId: "manage-web-project-664bc",
	storageBucket: "manage-web-project-664bc.firebasestorage.app",
	messagingSenderId: "815000021450",
	appId: "1:815000021450:web:a66cc138b6081bf9fc4733",
	measurementId: "G-W0DEKY799L",
};

// initialize firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
