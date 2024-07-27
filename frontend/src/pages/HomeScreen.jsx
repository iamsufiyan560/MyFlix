import React from "react";
import { useAuthStore } from "../store/authUser";

const HomeScreen = () => {
  const { logout } = useAuthStore();

  return (
    <div>
      HomeScreen
      <button
        className="m-16 border bg-red-400 p-1 rounded-xl"
        onClick={logout}
      >
        LogOut
      </button>
    </div>
  );
};

export default HomeScreen;
