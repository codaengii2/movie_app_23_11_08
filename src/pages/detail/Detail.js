import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";

export const Detail = () => {
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(id);
        console.log(data);
      } catch (error) {}
    })();
  }, []);

  return <div>detail</div>;
};
