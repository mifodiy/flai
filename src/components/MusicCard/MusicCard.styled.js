import styled from "styled-components";
import playIcon from "../../assets/play-icon.svg";
import lockIcon from "../../assets/lock-icon.svg";
import aIcon from "../../assets/a-icon.svg";
import playIconSmall from "../../assets/play-icon2.svg";

export const StyledMusicCard = styled.div`
  padding-left: 40px;
  display: flex;
  gap: 40px;
  background-color: #131314;
  margin-bottom: 53px;

  .wrapper {
    display: flex;
    margin-top: 27px;
  }
`;

export const MusicCardInfo = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 138px;

  .cover {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    overflow: hidden;
    position: relative;

    &:hover .play-btn {
      transform: translate(-50%, -50%) scale(1.2);
    }

    img {
      object-fit: cover;
      height: 100%;
    }
  }

  .play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 36px;
    height: 36px;
    border-radius: 100%;
    background: rgba(58, 58, 58, 0.5);
    backdrop-filter: blur(10px);
    transform-origin: center center;
    transition: transform ease-in-out 0.5s;

    &::after {
      content: "";
      position: absolute;
      width: 24px;
      height: 24px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-image: url(${playIcon});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  .artist_info {
    display: flex;
    gap: 5px;
    align-items: center;
    color: #8e8f92;
    margin-bottom: 6px;
  }

  .song_title {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.1;
    margin-bottom: 6px;
  }

  .song_name {
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 8px;
  }

  .song_type {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #8e8f92;
    margin-bottom: 9px;

    span {
      padding: 3px 15px;
      background: rgba(39, 69, 145, 0.25);
      border-radius: 20px;
      color: #6993ff;
      font-weight: 700;
      font-size: 10px;
      line-height: 1.8;
      text-transform: uppercase;
    }
  }

  .platform_list {
    display: flex;
    gap: 5px;

    img {
      transition: scale ease-in-out 0.5s;
    }

    img:hover {
      scale: 1.2;
    }
  }
`;

export const MusicCardCharacteristic = styled.div`
  margin-right: 74px;

  .trending {
    margin-bottom: 13px;
  }

  .duration {
    margin-bottom: 7px;
  }

  .duration,
  .bitrate {
    color: #8e8f92;

    span {
      color: #fff;
    }
  }

  .bitrate {
    span {
      position: relative;
      padding: 4px 5px;
    }

    span::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(217, 217, 217, 0.1);
      backdrop-filter: blur(2px);
    }

    span::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 16px;
      height: 16px;
      transform: translate(-50%, -50%);
      background-image: url(${lockIcon});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      z-index: 2;
    }
  }
`;

export const MusicCardRating = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  align-items: flex-start;

  .rating_list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: #8e8f92;

    li {
      display: flex;
      gap: 6px;
    }

    span {
      color: #fff;
      font-weight: 700;
    }

    .country {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;

export const ButtonSoundToText = styled.a`
  padding: 5px 15px 5px 35px;
  background-color: #3f3f41;
  position: relative;
  border-radius: 30px;
  transition: background-color ease-in-out 0.5s;

  &:hover {
    background-color: #79799b;
  }

  &::before {
    content: "";
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    background-image: url(${aIcon});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const MusicCardKeywords = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 40px;

  .title {
    color: #8e8f92;
  }

  .keywords_list {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
  }

  .keywords_link {
    padding: 8px 10px;
    background: #212122;
    border-radius: 20px;
  }
`;

export const MusicCardVideoWidget = styled.div`
  width: 150px;
  padding: 31px 23px 27px 21px;
  background: #212122;
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 13px;
    color: #9e9fa4;
  }

  .count {
    font-size: 40px;
    font-weight: 700;
    display: block;
    line-height: 1.15;
  }

  a {
    font-weight: 700;
    font-size: 12px;
    line-height: 1.25;
    color: #d1fd0a;
    padding-left: 18px;
    position: relative;
    transition: scale ease-in-out 0.5s;

    &:hover {
      scale: 1.2;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 14px;
      height: 14px;
      background-image: url(${playIconSmall});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
`;

export const MusicCardDailyWidget = styled.div`
  width: 150px;
  padding: 17px 27px;
  background-color: #00be6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  .title {
    font-size: 13px;
    line-height: 1.5;
    color: #aaffdb;
  }

  .count {
    font-weight: 700;
    font-size: 32px;
    line-height: 0.9;
    color: #ffffff;
  }
`;
