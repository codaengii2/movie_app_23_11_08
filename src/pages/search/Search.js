import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { search } from "../../api";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { IMG_URL } from "../../constants";
import { PageTitle } from "../../components/PageTitle";
import { Loading } from "../../components/Loading";
const Title = styled.h3`
  font-size: 30px;
  text-align: center;
  margin-bottom: 50px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  all: unset;
  width: 50%;
  height: 30px;
  background-color: white;
  border: 5px solid dimgray;
  border-radius: 10px;
  padding: 0 20px;
  color: #000;
`;

const Button = styled.button`
  all: unset;
  width: 50px;
  height: 40px;
  border-radius: 10px;
  font-size: 12px;
  text-align: center;
  background-color: dimgray;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
const ConWrap = styled.div`
  display: grid;
  //=> grid가 적용될 부모에게 사용 플랙스와 동일
  grid-template-columns: repeat(5, 1fr);
  //=> 그리드 레이아웃을 규칙에 맞게 반복시킴
  // => repeat(가로개수, 크기값)
  // => 1fr 컨텐츠끼리 1배율씩 똑같은 값으로 크기를 나눠가짐
  column-gap: 30px;
  //=> 가로컨텐츠 간격
  row-gap: 50px;
  //=> 세로 컨텐츠 간격

  margin-top: 50px;
  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 50px;
  }
  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

//=> 한줄에 몇개씩, 한컨텐츠당 크기(1fr: 개수를 알아서 나눠가지게 하는 단위)
// column-gap 옆간격 row-gap 아래간격
const Con = styled.div``;

const Bg = styled.div`
  height: 300px;
  background: url(${IMG_URL}/w300/${(props) => props.$bgUrl}) no-repeat
    center/cover;
  margin-bottom: 20px;

  @media screen and (max-width: 1080px) {
    height: 200px;
  }
`;
const MovieTitle = styled.div`
  text-align: center;
`;

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
  });

  // useForm({
  //   defaultValues: async () => fetch(searchQuery),
  // });
  // const { searchQuery } = useParams();
  const [term, setTerm] = useState();
  const [isloading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { results: searchId } = await search(searchQuery);
  //       setSearchData(searchId);
  //     } catch (error) {}
  //   })();
  // }, []);
  // => 마운트될 때 사용하는 것이 아니라 useEffect 가 필요하지않음

  const searchHandler = async (data) => {
    const { search: searchQuery } = data;
    try {
      const { results } = await search(searchQuery);
      setTerm(results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    // console.log("검색결과: ", search);
  };

  console.log(term);

  return (
    <>
      {/* <Form onSubmit={searchData}>
  <Input type="search" placeholder="영화를 검색해보세요"></Input>
  <Button>
    <FontAwesomeIcon icon={faMagnifyingGlass} />
  </Button>
</Form> */}
      <PageTitle titleName={"Search"} />
      <Layout>
        <Title>찾으시는 영화가 있으신가요?</Title>

        <Form onSubmit={handleSubmit(searchHandler)}>
          <Input
            {...register("search", {
              required: "검색내용을 입력해주세요.",
            })}
            type="text"
            placeholder="검색 내용"
          />
          <Button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </Form>
        {term && (
          <ConWrap>
            {term.map((payload) => (
              <Con key={payload.id}>
                <Bg $bgUrl={payload.poster_path} />
                <MovieTitle>{payload.title}</MovieTitle>
              </Con>
            ))}
          </ConWrap>
        )}
      </Layout>
    </>
  );
};

//=> term이 있으면?

//=> submit 했을 때 검색결과가 불러와지면 loading이 멈추게
