import React, { useCallback } from "react";
import { auth, db } from "../../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import User from "utils/models/User";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

const EmailPasswordAuthSignUp = () => {

  const signupHandler = useCallback(async (event) => {
    console.log("signupHandler called");
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      console.log(email.value, password.value);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      const defaultUsername = user.email.substring(
        0,
        user.email.lastIndexOf("@")
      );
      const username = user.displayName ? user.displayName : defaultUsername;
      const newUser = { ...new User(user.uid, user.email, username) };
      const docRef = await addDoc(collection(db, "users"), newUser);
      const update = await updateDoc(doc(db, "users", docRef.id), { id: docRef.id})
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <form
        onSubmit={signupHandler}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="signUpEmail"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            id="signUpEmail"
            type="email"
            placeholder="email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="signUpPassword"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            id="signUpPassword"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="transition-all duration-500 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailPasswordAuthSignUp;
