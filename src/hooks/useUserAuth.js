import { useContext } from "react";
import { UserAuthContext } from "../contexts/UserAuthContext";

export const useUserAuth = () => {
  return useContext(UserAuthContext);
};
