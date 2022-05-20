import axios from 'axios'
import {useState, useEffect} from 'react';
import Header from './components/Header';
import CatsFromAPI from './components/CatsFromAPI';
import Loading from './components/Loading';
import {FaLongArrowAltRight,FaRegHeart,FaTrashAlt} from 'react-icons/fa'
const animal = 'cat'; //dog, horse
const catsURL =`https://cat-fact.herokuapp.com/facts/random?animal_type=${animal}&amount=`;
const amount = 15

function App() {
  const [cats, setCats] = useState([])
  const [localCats, setLocalCats] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [alert,setAlert] = useState(false)
 const data=[]

  useEffect(()=>{
    setIsLoading(true)
axios
  .get(`${catsURL}${amount}`)
  .then((data)=>setCats(data.data))
  
  setIsLoading(false)
  },[])

const handleSubmit=()=>{
  console.log('clicked')
if(localCats===''){
  setAlert(true)
  setTimeout(()=>{
    setAlert(false)
  },3000)
} else {
  setLocalCats([...localCats,inputValue])
  setInputValue('')
}
} 
  return (
    <div className="main-container">
    <Header />
    <main>
      {isLoading ?
     (<Loading />) : (<> <CatsFromAPI cats={cats} /></>)}
       <section className="bg-color">
            <strong>Local Cats</strong>(add a cat fact <FaLongArrowAltRight />)
          <div className="local-container">
                 {localCats.map((localCat,j)=>{
                   return <div class="local-cat">
                   {j+1}. {localCat}
                   <div class="btn-wrapper">
                       <button id="fav-btn" class="btn btn-success" onclick="favoriteFn(${j})">
                          <FaRegHeart />
                     </button>
                     <button id="del-btn" class="btn btn-warning" onclick="deleteFn(${j})">
                         <FaTrashAlt />  
                     </button>
                   </div>
               </div>
                 })
                 }
          </div>
       </section>
       <div className="third-column">
            <section className="input-container">
                <div>
                    <input type="text" onChange={(e)=>setInputValue(e.target.value)} value={inputValue}id="input-fact" placeholder="Add Cats Facts" />
                    <button onClick={handleSubmit} id="add-btn">ADD</button>
                </div>
            </section>
            <section id="favCats" className="bg-color">
                <strong>Favorite Facts</strong>
                <div className="fav-container">
                        <div className="fav-fact"></div>
                </div>
            </section>
    </div>
    </main>
   </div> 
  );
}

export default App;
