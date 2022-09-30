import React, { useEffect } from "react";
import { Nav } from "../navigation/Nav";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import { motorbikesAsync } from "../../redux/motorbikeSlice";

export const Home = () => {
  const dispach = useDispatch();
  useEffect(() => {
    dispach(motorbikesAsync());
  }, [dispach]);

  const AllMotorbikes = useSelector((state) => state.motorbikes.motorbikes);
  console.log(AllMotorbikes);
  return (
    <div className="main">
        <header className="nav">
          <Nav />
        </header>
        <main>
          <h2>LATEST MODELS</h2>
          {AllMotorbikes.map((motorbike, i) => (
            <div key={motorbike[i].id} className="cards">
              <div className="card">
                <h3><img src ={motorbike[i].image} /></h3>
                <p>{motorbike[i].name}</p>
              </div>
            </div>
          ))}
        </main>
        <aside>
          <ul>
            <li>My aside list</li>
            <li>My aside list</li>
            <li>My aside list</li>
          </ul>
        </aside>
    </div>
  );
};
