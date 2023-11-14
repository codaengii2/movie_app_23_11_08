import styled from "styled-components";
import { nowPlaying } from "../../api";
import { useEffect, useState } from "react";
import { IMG_URL } from "../../constants";

const MainBanner = styled.div`
  height: 80vh;
  background-color: lightgray;
  position: relative;
  padding: 400px 5%;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center/cover;
  h3,
  p {
    position: relative;
  }

  h3 {
    max-width: 650px;
    width: 100%;
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
    line-height: 100px;
  }
  p {
    max-width: 650px;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
  }

  @media screen and (max-width: 450px) {
    h3 {
      font-size: 50px;
      line-height: 65px;
    }
    p {
      font-size: 16px;
    }
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
  // 1. 마운트시 api에 요청
  // 2. 비동기 통신(기다려줘야함 async ~ await)
  // 3. 예외 처리

  // const getMovie = async() => {
  //   await nowPlaying();
  // }

  // (async () => {
  //   //=> 기다려야될 함수
  //   await nowPlaying(); //=> 기다릴 함수
  // })();

  const [nowPlayingData, setNowPlayingData] = useState();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying();
        // console.log(data);
        // console.log(data.results);
        // console.log(results[5]?.title);
        setNowPlayingData(results);
        setIsLoading(false);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, []);

  console.log(isloading);
  console.log(nowPlayingData);

  return (
    <>
      {isloading ? (
        "loading..."
      ) : (
        <div>
          {nowPlayingData && (
            <MainBanner $bgUrl={nowPlayingData[0].backdrop_path}>
              <BlackBg />
              <h3>{nowPlayingData[0].title}</h3>
              <p>{nowPlayingData[0].overview.slice(0, 100) + "..."}</p>
            </MainBanner>
          )}
        </div>
      )}
    </>
  );
};

//=> movie api 에서 img 불러오는 경로 url 찾아보기
// => $bgUrl을 props로 받아와서 사진 지정
