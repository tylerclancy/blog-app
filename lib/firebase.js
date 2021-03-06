import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyB3dfE-7IK4TFZ_Nyd3166AIAnAXTRDpBA",
  authDomain: "blog-app-7ddc8.firebaseapp.com",
  projectId: "blog-app-7ddc8",
  storageBucket: "blog-app-7ddc8.appspot.com",
  messagingSenderId: "36791096612",
  appId: "1:36791096612:web:e7b2bda610010da9368fb1"
};

// Prevent error with multiple initializations
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

// Helper functions.

/**`
  * Gets a user/{uid} document with username
  * @param {string} username
*/

export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);

  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**
  * Converts a firestore document to JSON
  * @param {DocumentSnapshot} doc
*/

export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis()
  };
}
