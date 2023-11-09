import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";

const SHeader = styled.div`
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
  }
`;
const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  li {
    margin-left: 60px;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={routes.home}>MOVIE</Link>
      </Logo>
      <Menu>
        <li>
          <Link to={routes.detail}>Home</Link>
        </li>
        <li>
          <Link to={routes.search}>Search</Link>
        </li>
      </Menu>
    </SHeader>
  );
};
