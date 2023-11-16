import styled from "styled-components";

const Container = styled.div`
  padding: 150px 5%;
`;

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

// => children 을 넣으면 안에 어떤 형식으로 자리잡든 상관없음
// => 기본틀은 그대로 유지하되 자식들은 마음대로 바꿀 수 있다
