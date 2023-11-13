import MemeCard from "../Components/Card";
import { useEffect, useState } from "react";
import { getAllMemes } from "../api/memes";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllMemes().then((meme) => setData(meme.data.memes));

  }, []);
  console.log(data);
  return (
    <div className="row">
      {data.map((el) => <MemeCard key={el.id} img={el.url} title={el.name} />)}
    </div>
  );
};

export default Home;
