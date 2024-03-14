import { wsEndpoint } from "constants";
import { useEffect } from "react";
import { useEmote } from "./useEmote";

export const socket = new WebSocket(wsEndpoint);

export const useWebSocket = () => {
  const {pushEmote} = useEmote();

  useEffect(() => {
    socket.addEventListener("open", () => {
      console.log("WebSocket connection established.");
    });
  
    socket.addEventListener("error", () => {
      console.error("WebSocket connection error.");
    });
  
    socket.addEventListener("message", (event) => {
      const emote = JSON.parse(event.data);
      pushEmote(emote);
    });

    return () => socket.close();
  }, []);

  return null;
};