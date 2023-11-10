import styled from "styled-components";
import { nowPlaying } from "../../api";

const MainBanner = styled.div`
  height: 80vh;
  background-color: lightgray;
  position: relative;
  padding: 400px 5%;
  h3,
  p {
    position: relative;
  }

  h3 {
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
    line-height: 100px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: teal;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
`;

export const Home = () => {
  nowPlaying();

  return (
    <div>
      <MainBanner>
        <BlackBg />
        <h3>타이틀</h3>
        <p>타이틀 영화 설명</p>
      </MainBanner>
    </div>
  );
};
