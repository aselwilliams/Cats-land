import React from 'react';
import {FaRegTrashAlt} from 'react-icons/fa'

function FavoriteCats({favorites,handleDeleteFav}) {
  return (
    <section id="favCats" className="bg-color">
    <strong>Favorite Facts</strong>
    <div className="fav-container">
           {favorites.map((favorite,k)=>{
             return  <div class="local-cat" key={k}>
             {k+1}. {favorite}
                 <div class="btn-wrappper">
                     <button id="remove-btn" className="btn btn-danger" onClick={()=>handleDeleteFav(k)}>
                         <FaRegTrashAlt />
                     </button>
                 </div>
             </div>
           })} 
    </div>
</section>
  )
}

export default FavoriteCats