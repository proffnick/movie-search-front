// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const useFirebase = () => {
  const app = initializeApp({
    apiKey: process.env.REACT_APP_FB_APIKEY,
    authDomain: process.env.REACT_APP_FB_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FB_PROJECTID,
    storageBucket: process.env.REACT_APP_FB_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FB_SENDERID,
    appId: process.env.REACT_APP_FB_APPID
  });

  return {
    Fapp: app
  }
}