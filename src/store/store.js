import { create } from 'zustand'
import canadaIcon from "../assets/canada-icon.svg";
import beautyIcon from "../assets/chair-icon.svg";
import musicIcon from "../assets/boombox-icon.svg";
import travelIcon from "../assets/beach-icon.svg";
import showIcon from "../assets/performance-icon.svg";
import sportIcon from "../assets/soccer-icon.svg";
import healthIcon from "../assets/health-icon.svg";
import otherIcon from "../assets/other-icon.svg";


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

export const useAudienceStore = create((set) => ({
	benchmark: [
		{
			id: 1,
			iconUrl: beautyIcon,
			title: "Beauty",
			value: 40
		},
		{
			id: 2,
			iconUrl: musicIcon,
			title: "Music",
			value: 31
		},
		{
			id: 3,
			iconUrl: travelIcon,
			title: "Travel",
			value: 22
		},
		{
			id: 4,
			iconUrl: showIcon,
			title: "Show",
			value: 14
		},
		{
			id: 5,
			iconUrl: sportIcon,
			title: "Sport",
			value: 12
		},
		{
			id: 6,
			iconUrl: healthIcon,
			title: "Health",
			value: 9
		},
		{
			id: 7,
			iconUrl: otherIcon,
			title: "Other",
			value: 6
		}
	]
}))

export const useCheckboxStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}))
