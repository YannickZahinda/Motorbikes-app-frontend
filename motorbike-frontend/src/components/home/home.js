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
              <div>
                <h3>
                  <img src={motorbike[i].image} className="img-card" />
                </h3>
                <p>
                    <strong>{motorbike[i].name}</strong> <br/>
                    <span><strong>Price: {motorbike[i].price}</strong></span>
                </p>

              </div>
            </div>
          </div>
        ))}
      </main>
      <aside>
            <ul className='side-list-ul'>
                <div className='side-list-div'>
                <li className='side-list'>prices </li>
                <li className='side-list'>$20</li>
                </div>
                <div className='side-list-div'>
                <li className='side-list'>prices </li>
                <li className='side-list'>$20</li>
                </div>
                <div className='side-list-div'>
                <li className='side-list'>prices </li>
                <li className='side-list'>$20</li>
                </div>
            </ul>
        </aside>
    </div>
  );
};
