import { nowPlaying } from "../../api";
import { useEffect, useState } from "react";
import { MainBanners } from "./MainBanners";

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
        <div>{nowPlayingData && <MainBanners data={nowPlayingData[0]} />}</div>
      )}
    </>
  );
};

//=> movie api 에서 img 불러오는 경로 url 찾아보기
// => $bgUrl을 props로 받아와서 사진 지정
