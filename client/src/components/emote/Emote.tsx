import { EmoteType } from "types";

interface EmoteProps {
  emote: EmoteType;
  style?: React.CSSProperties;
  handleClick?: (emote: any) => void;
}

export const Emote = ({ emote, handleClick, style }: EmoteProps) => {

  const handleEmoteClick = () => {
    if(handleClick) {
      handleClick(emote);
    }
  }

  return <div style={style} onClick={handleEmoteClick}>{emote}</div>;
};