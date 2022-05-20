import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import CatsFromAPI from "./components/CatsFromAPI";
import Loading from "./components/Loading";
import LocalCats from "./components/LocalCats";
import FavoriteCats from "./components/FavoriteCats";
const animal = "cat"; //dog, horse
const catsURL = `https://cat-fact.herokuapp.com/facts/random?animal_type=${animal}&amount=`;
const amount = 15;

function App() {
  const [cats, setCats] = useState([]);
  const [localCats, setLocalCats] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${catsURL}${amount}`).then((data) => setCats(data.data));

    setIsLoading(false);
  }, []);

  const handleSubmit = () => {
    console.log("clicked");
    if (inputValue === "") {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    } else {
      setLocalCats([...localCats, inputValue]);
      setInputValue("");
    }
  };

  const handleFavorite = (index) => {
    console.log("favorite", favorites);
    setFavorites([...favorites, localCats[index]]);
  };

  const handleDelete = (index) => {
    console.log("delete");
    let newList = localCats.filter((item, ind) => ind !== index);
    setLocalCats(newList);
  };

  const handleDeleteFav = (index) => {
    let newFav = favorites.filter((item, ind) => ind !== index);
    setFavorites(newFav);
  };
  return (
    <div className="main-container">
      <Header alert={alert} />
      <main>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {" "}
            <CatsFromAPI cats={cats} />
          </>
        )}
        <LocalCats
          localCats={localCats}
          handleDelete={handleDelete}
          handleFavorite={handleFavorite}
        />
        <div className="third-column">
          <section className="input-container">
            <div>
              <input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                id="input-fact"
                placeholder="Add Cats Facts"
              />
              <button onClick={handleSubmit} id="add-btn">
                ADD
              </button>
            </div>
          </section>
          <FavoriteCats
            favorites={favorites}
            handleDeleteFav={handleDeleteFav}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
