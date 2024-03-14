import { useContext } from "react";
import { EmoteContext } from "context/EmoteContext";

export const useEmote = () => {
  const context = useContext(EmoteContext);

  if(!context) {
    throw new Error("useEmote must be used inside EmoteContextProvider");
  }
  return context;
};