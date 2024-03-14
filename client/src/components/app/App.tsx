import './style.css';
import { EmotePalette } from "components/emote-palette";
import { useEmote } from 'hooks';
import { EmoteBubble } from 'components/emote-bubble';

export const App = () => {
  const {emoteQueue} = useEmote();

  return (
    <div id="app">
      <EmotePalette />
      {emoteQueue.map(({ emote, size, left }, i) => {
        return <EmoteBubble key={i} emote={emote} size={size} left={left} />
      })}
    </div>
  );
};
