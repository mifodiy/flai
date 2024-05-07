import { FluidContainer } from "../Container/Container.styled";
import {
  ButtonSoundToText,
  MusicCardCharacteristic,
  MusicCardDailyWidget,
  MusicCardInfo,
  MusicCardKeywords,
  MusicCardRating,
  MusicCardVideoWidget,
  StyledMusicCard,
} from "./MusicCard.styled";
import cover from "../../assets/cover.jpg";
import infoIcon from "../../assets/info-icon.svg";
import spotifyIcon from "../../assets/spotify-icon.svg";
import appleMusicIcon from "../../assets/apple-music-icon.svg";
import tiktokIcon from "../../assets/tiktok-icon.svg";
import { useMusicCardStore } from "../../store/store";

const MusicCard = () => {
  const {
    artist,
    songName,
    type,
    duration,
    bitrate,
    country,
    countryFlag,
    placeInCountry,
    placeInWorld,
    view,
    dailyGrowth,
    keywords,
  } = useMusicCardStore((state) => state.musicCard);
  return (
    <FluidContainer>
      <StyledMusicCard>
        <div>
          <div className="wrapper">
            <MusicCardInfo>
              <div className="cover">
                <img src={cover} alt="Khabane Lame" />
                <a className="play-btn" href="#">
                  <div className="sr-only">play</div>
                </a>
              </div>
              <div>
                <div className="artist_info">
                  <span>Official Artist</span>
                  <img src={infoIcon} alt="information" />
                </div>
                <h1 className="song_title">{artist}</h1>
                <p className="song_name">{songName}</p>
                <div className="song_type">
                  <p>Type:</p>
                  <span>{type}</span>
                </div>
                <ul className="platform_list">
                  <li>
                    <a href="#">
                      <img src={spotifyIcon} alt="spotify" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={appleMusicIcon} alt="apple music" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={tiktokIcon} alt="tiktok" />
                    </a>
                  </li>
                </ul>
              </div>
            </MusicCardInfo>
            <MusicCardCharacteristic>
              <p className="trending">🔥🔥🔥 Trending</p>
              <p className="duration">
                Duration: <span>{duration}</span>
              </p>
              <p className="bitrate">
                Bitrate: <span>{bitrate} kbps</span>
              </p>
            </MusicCardCharacteristic>
            <MusicCardRating>
              <ul className="rating_list">
                <li>
                  Country:
                  <span className="country">
                    {country}
                    <img src={countryFlag} alt={country} />
                  </span>
                </li>
                <li>
                  Place in the country:
                  <span>{placeInCountry}</span>
                </li>
                <li>
                  Place in the world:
                  <span>{placeInWorld}</span>
                </li>
              </ul>
              <ButtonSoundToText>Sound to text</ButtonSoundToText>
            </MusicCardRating>
          </div>
          <MusicCardKeywords>
            <h2 className="title">Keywords:</h2>
            <ul className="keywords_list">
              {keywords.map((word, idx) => (
                <li key={idx}>
                  <a className="keywords_link" href="#">
                    {word}
                  </a>
                </li>
              ))}
            </ul>
          </MusicCardKeywords>
        </div>
        <div className="widget_wrapper">
          <MusicCardVideoWidget>
            <h2 className="title">🙋‍♂️ Videos</h2>
            <span className="count">{view}M</span>
            <a href="#">Watch Videos</a>
          </MusicCardVideoWidget>
          <MusicCardDailyWidget>
            <h2 className="title">Daily Growth</h2>
            <span className="count">+{dailyGrowth}k</span>
          </MusicCardDailyWidget>
        </div>
      </StyledMusicCard>
    </FluidContainer>
  );
};

export default MusicCard;
