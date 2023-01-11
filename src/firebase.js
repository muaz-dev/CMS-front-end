import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyDlRVejVieFyzm2nyoeDRJrExRwHT1uXLM",
//   authDomain: "bowon-4bd77.firebaseapp.com",
//   projectId: "bowon-4bd77",
//   storageBucket: "bowon-4bd77.appspot.com",
//   messagingSenderId: "484797915063",
//   appId: "1:484797915063:web:90b059f0362028f7b21232",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAuhb38yffR25t_JNAYiYLYGowrpNFx-LA",
  authDomain: "editor-183ed.firebaseapp.com",
  projectId: "editor-183ed",
  storageBucket: "editor-183ed.appspot.com",
  messagingSenderId: "93397789125",
  appId: "1:93397789125:web:9ab035eb87597b329e43ac",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
