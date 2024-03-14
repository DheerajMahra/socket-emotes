export type EmoteType = "😂" | "😘" | "😭" | "😡" | "🥶";

export interface EmoteBubbleType {
  id: string;
  emote: EmoteType;
  size: number;
  left: number;
};