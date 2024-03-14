import { createContext, useState } from "react"
import { EmoteBubbleType } from "types";

interface EmoteContextType {
  emoteQueue: EmoteBubbleType[];
  pushEmote: (emote: EmoteBubbleType) => void;
}

export const EmoteContext = createContext<EmoteContextType | null>(null);

interface EmoteContextProviderProps {
  children: React.ReactNode;
}

export const EmoteContextProvider = ({ children }: EmoteContextProviderProps) => {
  const [emoteQueue, setEmoteQueue] = useState<EmoteBubbleType[]>([]);

  const pushEmote = (emote: EmoteBubbleType) => {
    setEmoteQueue(ps => [...ps, emote]);
  }
  const value: EmoteContextType = { emoteQueue, pushEmote };

  return <EmoteContext.Provider value={value}>{children}</EmoteContext.Provider>
}