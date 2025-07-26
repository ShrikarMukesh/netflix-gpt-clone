//createBrowserRouter : This function is used to create a router instance for the application.
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
// Import Firebase auth functions
import { auth } from "../utils/firebase"; // Import the Firebase auth instance
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice"; // Import the action to add user data
// Body component: This component serves as the main content area of the application.
const Body = () => {
  const dispatch = useDispatch(); //

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
