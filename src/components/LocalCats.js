import React from 'react';
import {FaLongArrowAltRight,FaRegHeart,FaTrashAlt,FaRegTrashAlt} from 'react-icons/fa'

function LocalCats({localCats,handleFavorite,handleDelete}) {
  return (
    <section className="bg-color">
    <strong>Local Cats</strong>(add a cat fact <FaLongArrowAltRight />)
  <div className="local-container">
         {localCats.map((localCat,j)=>{
           return <div className="local-cat">
           {j+1}. {localCat}
           <div className="btn-wrapper">
               <button id="fav-btn" className="btn btn-success" onClick={()=>handleFavorite(j)}>
                  <FaRegHeart />
             </button>
             <button id="del-btn" className="btn btn-warning" onClick={()=>handleDelete(j)}>
                 <FaTrashAlt />  
             </button>
           </div>
       </div>
         })
         }
  </div>
</section>
  )
}

export default LocalCats