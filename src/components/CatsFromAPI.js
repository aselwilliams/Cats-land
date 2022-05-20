import React from "react";

function CatsFromAPI({ cats }) {
  return (
    <section className="bg-color">
      <strong>Cats from API</strong>
      <a href="https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10">
        (CLICK HERE)
      </a>
      <div className="api-container">
        {cats.map((cat, i) => {
          return (
            <div id="fetch-data" key={i}>
              {i + 1}. {cat.text}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CatsFromAPI;
