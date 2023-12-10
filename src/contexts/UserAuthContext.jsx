import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GithubAuthProvider,
  FacebookAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // create user using email and password
  const createUserUserUsingEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login using email and password
  const loginUsingEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // authentication using google
  const authenticationUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // authentication using github
  const authenticationUsingGithub = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };

  // authentication using facebook
  const authenticationUsingFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookProvider);
  };

  // update user profile
  const updateUserProfile = (
    name = "unknown",
    photo = "https://i.ibb.co/nCCcPC7/demo-user.jpg",
  ) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // sign out
  const logOut = () => {
    return signOut(auth);
  };

  // setup reCaptcha
  /*parameter order are important but in document wrong, 1.recaptcha container 2.option object 3. auth */
  const setUpRecaptcha = (phoneNumber) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth,
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
  };

  // email verification
  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // password reset email
  const passwordResetEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // user state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    // stop observing while unmounting
    return () => {
      return unsubscribe();
    };
  }, []);

  return (
    <UserAuthContext.Provider
      value={{
        authenticationUsingGoogle,
        user,
        setUser,
        logOut,
        createUserUserUsingEmailAndPassword,
        loginUsingEmailAndPassword,
        updateUserProfile,
        authenticationUsingGithub,
        authenticationUsingFacebook,
        setUpRecaptcha,
        emailVerification,
        passwordResetEmail,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContextProvider;
