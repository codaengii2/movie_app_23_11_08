import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";
import { useScrollTop } from "../../lib/useScrollTop";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px 5%;

  @media screen and (max-width: 680px) {
    display: block;
    padding: 80px 5% 0;
  }
`;
const ImgBox = styled.div`
  min-width: 300px;
  width: 600px;
  height: 650px;
  background: url(${IMG_URL}/w1280/${(props) => props.$poster}) no-repeat
    center/cover;
  margin-right: 50px;
  @media screen and (max-width: 680px) {
    width: 500px;
    height: 600px;
    margin-bottom: 50px;
    margin-right: 0;
    background: url(${IMG_URL}/w500/${(props) => props.$poster}) no-repeat;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
    height: 400px;
    background: url(${IMG_URL}/w300/${(props) => props.$poster}) no-repeat;
    margin-bottom: 30px;
  }
`;

const Con = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  p {
    font-size: 24px;
    margin-top: 20px;
  }
  ul li {
    list-style: circle;
    margin: 20px 0;
    font-size: 20px;
  }
`;
const Title = styled.div`
  font-size: 80px;
  font-weight: 700;
  @media screen and (max-width: 680px) {
    font-size: 30px;
  }
`;
const Over = styled.div`
  font-size: 20px;
  line-height: 28px;
  @media screen and (max-width: 680px) {
    width: 80%;
    font-size: 20px;
  }
  @media screen and (max-width: 450px) {
    width: 70%;
    font-size: 18px;
  }
`;

export const Detail = () => {
  const { id } = useParams();
  const [dataDetail, setDataDetail] = useState();
  const [isloading, setIsLoading] = useState(true);
  useScrollTop();


  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(id);
        setDataDetail(data);
        setIsLoading(false);
      } catch (error) {}
    })();
  }, []);

  // console.log(dataDetail);
  // console.log(isloading);

  return (
    <div>
      {isloading ? (
        <Loading />
      ) : (
        <>
          <PageTitle titleName={"Detail"} />
          <Wrap>
            <ImgBox $poster={dataDetail?.poster_path}></ImgBox>
            <Con>
              <Title>{dataDetail?.title}</Title>
              <p>평점 :{Math.round(dataDetail?.vote_average)}</p>
              <ul>
                {/* <li>{dataDetail?.genres[0]?.name}</li>
              <li>{dataDetail?.genres[1]?.name}</li>
              <li>{dataDetail?.genres[2]?.name}</li> */}
                {dataDetail.genres.map((data) => (
                  <li key={data.id}>{data.name}</li>
                ))}
              </ul>
              <Over>{dataDetail?.overview.slice(0, 100) + "..."}</Over>
            </Con>
          </Wrap>
        </>
      )}
    </div>
  );
};

// => poster 이미지, 영화제목, 평점, 영화 장르, 영화 소개
