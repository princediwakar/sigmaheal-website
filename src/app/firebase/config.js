// src/firebase/config.js

import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBHcGO3gAoazEE0U2Lu4Z1NFUEQIgzU1qM",
	authDomain: "getsigmaheal.firebaseapp.com",
	projectId: "getsigmaheal",
	storageBucket: "getsigmaheal.firebasestorage.app",
	messagingSenderId: "832082608120",
	appId: "1:832082608120:web:932e5328e77017a4ed200d",
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
