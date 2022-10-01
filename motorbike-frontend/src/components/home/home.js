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
                    <span><strong>Price: {motorbike[i].price}</strong></span><br/>
                    <button className="add-btn">See details</button>
                </p>

              </div>
            </div>
          </div>
        ))}
      </main>
      <aside>
            {AllMotorbikes.map((motorbike, i) => <ul className='side-list-ul'>
                <div className='side-list-div'>
                <li className='side-list'>Promotion prices </li>
                <li className='side-list'>{motorbike[i].price} $</li>
                </div>
                <div className='side-list-div'>
                </div>
            </ul>)}
        </aside>
    </div>
  );
};
