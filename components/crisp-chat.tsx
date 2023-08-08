import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e8e86b9a-6b43-4d14-8356-07918a8c786d");
  }, []);

  return null;
};
