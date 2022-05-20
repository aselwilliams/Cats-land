import axios from 'axios'
import {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([])
  const [localCats, setLocalCats] = useState([]);
  const [favorites, setFavorites] = useState([])

  useEffect(()=>{

  })
  return (
    <div class="main-container">
    <header>
        <div class="row">
            <h1 class="title">CATS-LAND
                <img src="https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="kittens" />
            </h1>
        </div>
        <div>
            <p id="alert-msg">Some Alert</p>
        </div>
    </header>
    <main>
       <section class="bg-color">
            <strong>Cats from API</strong>
            <a href="https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10">(CLICK HERE)</a>
            <div class="api-container">
                 <div id="fetch-data"></div>
            </div>
       </section>
       <section class="bg-color">
            <strong>Local Cats</strong>(add a cat fact <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>)
          <div class="local-container">
                 <div class="local-cat"></div>
          </div>
       </section>
       <div class="third-column">
            <section class="input-container">
                <form action="#">
                    <input type="text" id="input-fact" placeholder="Add Cats Facts" />
                    <button id="add-btn">ADD</button>
                </form>
            </section>
            <section id="favCats" class="bg-color">
                <strong>Favorite Facts</strong>
                <div class="fav-container">
                        <div class="fav-fact"></div>
                </div>
            </section>
    </div>
    </main>
   </div> 
  );
}

export default App;
