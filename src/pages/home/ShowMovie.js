import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const Layout = styled.div`
  padding: 150px 5%;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 50px;
  @media screen and (max-width: 450px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;
const CoverBg = styled.div`
  height: 250px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgURL}) no-repeat
    center/cover;
  border-radius: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 450px) {
    height: 150px;
    margin-bottom: 15px;
  }
`;
const MovieTitle = styled.div`
  font-size: 18px;
  @media screen and (max-width: 450px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const params = {
  spaceBetween: 20,
  slidesPerView: 5.5,
  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 5.5,
    },
    640: {
      spaceBetween: 15,
      slidesPerView: 4.3,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 3.2,
    },
  },
};

export const ShowMovie = ({ movieData }) => {
  return (
    <Layout>
      <Title>현재 상영 영화</Title>
      <Swiper {...params}>
        {movieData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <CoverBg $bgURL={data.poster_path} />
              <MovieTitle>{data.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Layout>
  );
};
