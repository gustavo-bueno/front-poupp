import { useContext } from "react";
import { UserContext } from "../contexts/user";

const useUserData = () => {
  const value = useContext(UserContext);

  return value;
};

export default useUserData;
