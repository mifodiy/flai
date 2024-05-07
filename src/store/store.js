import { create } from 'zustand'
import canadaIcon from "../assets/canada-icon.svg";


export const useMusicCardStore = create((set) => ({
	musicCard: {
		artist: "Khabane Lame",
		songName: "Melodic sound",
		type: "original",
		duration: "00:45",
		bitrate: 320,
		country: "Canada",
		countryFlag: canadaIcon,
		placeInCountry: 5,
		placeInWorld: 43,
		view: 1.8,
		dailyGrowth: 100,
		keywords: [
			"Whispering breeze",
			"Wandering soul",
			"Crimson dawn",
			"Echoes of silence"
		]
	}
}))