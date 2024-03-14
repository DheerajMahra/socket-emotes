import './style.css';
import { EmotePalette } from "components/emote-palette";
import { useEmote } from 'hooks';
import { EmoteBubble } from 'components/emote-bubble';
import { useWebSocket } from 'hooks';

export const App = () => {
  useWebSocket();
  const {emoteQueue} = useEmote();

  return (
    <div id="app">
      <EmotePalette />
      {emoteQueue.map(({ id, emote, size, left }) => {
        return <EmoteBubble key={id} emote={emote} size={size} left={left} />
      })}
    </div>
  );
};
