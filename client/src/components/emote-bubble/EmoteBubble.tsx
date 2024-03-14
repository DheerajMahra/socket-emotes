import { Emote } from 'components/emote';
import { useUnmountNode } from 'hooks';
import { EmoteBubbleType } from 'types';

interface EmoteBubbleProps extends EmoteBubbleType {};

export const EmoteBubble = ({ emote, size, left }: EmoteBubbleProps) => {
  const canUnmount = useUnmountNode();

  const style: React.CSSProperties = {
    position: "absolute",
    fontSize: `${size}rem`,
    left: `${left}%`,
    animation: "bubble 6s ease-out",
  }
  
  if(canUnmount) return null;

  return <Emote emote={emote} style={style} />;
};
