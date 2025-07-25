import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b form-black z-10 flex items-center justify-between">
      <img
        className="w-44"
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt="Logo"
      />
      {user && (
        <div className="flex p-2 items-center gap-4">
          <img
            className="w-12 h-12 rounded-full cursor-pointer"
            alt="usericon"
            src={user.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white bg-red-500"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
