import { Upcoming, nowPlaying, popular, topRated, upcoming } from "../../api";
import { useEffect, useState } from "react";
import { MainBanners } from "./MainBanners";
import styled from "styled-components";
import "swiper/css";
import { ShowMovie } from "./ShowMovie";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import { Loading } from "../../components/Loading";

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
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying();
        setNowPlayingData(nowResults);

        // console.log(data);
        // console.log(data.results);
        // console.log(results[5]?.title);
        const { results: popResults } = await popular(); //=> results 이름을 popResults로 바꿔줄 수 있음
        setPopData(popResults);

        const { results: topResults } = await topRated();
        setTopData(topResults);

        const { results: upResults } = await upcoming();
        setUpData(upResults);

        setIsLoading(false);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, []);

  // console.log(isloading);
  // console.log(nowPlayingData);
  // console.log(popData);

  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <div>
          {nowPlayingData && (
            <>
              <PageTitle titleName={"Home"} />

              <MainBanners data={nowPlayingData[0]} />
              <Layout>
                <ShowMovie
                  titleName={"현재 상영 영화"}
                  movieData={nowPlayingData}
                />
                <ShowMovie titleName={"인기 있는 영화"} movieData={popData} />
                <ShowMovie titleName={"인기 순위 영화"} movieData={topData} />
                <ShowMovie titleName={"개봉 예정 영화"} movieData={upData} />
              </Layout>
            </>
          )}
        </div>
      )}
    </>
  );
};

//=> movie api 에서 img 불러오는 경로 url 찾아보기
// => $bgUrl을 props로 받아와서 사진 지정

// => ... spread 연산자 겉에 있는 괄호를 벗겨내서 사용
