import './index.css';
import ReactDOM from 'react-dom/client';
import { App } from 'components/app';
import { EmoteContextProvider } from 'context/EmoteContext';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  // <React.StrictMode>
    <EmoteContextProvider>
      <App />
    </EmoteContextProvider>
  // </React.StrictMode>,
);

/**
 * Disabling StrictMode as it is running
 * Socket `message` event callback inside useWebSocket.tsx twice,
 * which triggers `pushEmote(emote)` twice and React renders nodes
 * with same ids two times and throws unexpected errors and behaviours
 */
