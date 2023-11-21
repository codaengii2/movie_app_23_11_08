import { useEffect } from "react";
import { useLocation } from "react-router-dom"

export const useScrollTop = () => {
    // const lo = useLocation();
    const {pathname} = useLocation();
    // => 현재 페이지의 경로내용을 객체로 반환하는 훅
    // console.log(lo);

    useEffect(()=>{

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });

    }, [pathname]) //페이지가 변경될 때마다 작동

    return;
}