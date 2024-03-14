import './style.css';
import { Emote } from "components/emote";
import { useEmote } from "hooks";
import { getRandomLeftPos, getRandomFontSize } from "utils";
import { EMOTE_PALETTE } from "constants";
import { EmoteBubbleType } from 'types';


export const EmotePalette = () => {
	const {pushEmote} = useEmote();

	const handleClick = (emote: any) => {
		const newEmote: EmoteBubbleType = {
			emote,
			size: getRandomFontSize(),
			left: getRandomLeftPos()
		};

		pushEmote(newEmote);
	};

	const emotePaletteMarkup = EMOTE_PALETTE.map((emote, i) => (
		<Emote key={i} emote={emote} handleClick={handleClick}/>
	));

  return <div id="emote-palette">{emotePaletteMarkup}</div>;
};