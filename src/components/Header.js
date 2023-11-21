import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";
import { useEffect, useRef } from "react";

const SHeader = styled.div`
  width: 100%;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
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

  const headerRef = useRef();

  //=> Ref = reference 참조
  useEffect(()=>{

    const scrollHandler = () => {
      const pageY = window.scrollY;
      // console.log(pageY);
      // console.log(headerRef);
      const {current} = headerRef;
      

      if(pageY > 300){
        current.style.position = "fixed"
        current.style.background = "rgba(0,0,0,0.7)"
        current.style.backdropFilter = "blur(2px)"
      }else{
        current.style.position = "absolute"
        current.style.background = "transparent"
        current.style.backdropFilter = "blur(0px)"

      }
      


    }

    return window.addEventListener('scroll', scrollHandler);
  },[])

  return (
    <SHeader /* className="header" */ ref={headerRef}>
      <Logo>
        <Link to={routes.home}>MOVIE</Link>
      </Logo>
      <Menu>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.search}>Search</Link>
        </li>
      </Menu>
    </SHeader>
  );
};
