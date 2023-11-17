import styled from "styled-components";
import { ClimbingBoxLoader } from "react-spinners";

const SLoading = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <SLoading>
      <ClimbingBoxLoader color="rgba(214, 54, 126, 1)" size={30} />
    </SLoading>
  );
};
