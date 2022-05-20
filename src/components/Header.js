import React from 'react'

function Header() {
  return (
    <header>
    <div className="row">
        <h1 className="title">CATS-LAND
            <img src="https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="kittens" />
        </h1>
    </div>
    <div>
        <p id="alert-msg">Some Alert</p>
    </div>
</header>
  )
}

export default Header