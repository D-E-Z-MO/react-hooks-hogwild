import React, { useState } from "react";

function HogCard({ name, image, weight, greased, specialty, medal }) {
  const [shown, setShown] = useState(false);

  return (
    <div>
      <li>
        <div className="u">
          <h1>{name}</h1>
          <img
            src={image}
            alt={name}
            onClick={() => setShown((shown) => !shown)}
          />
        </div>
        {shown ? (
          <div>
            <h4>Specialty: {specialty}</h4>
            <h4>Weight: {weight}</h4>
            <h4>Greased: {greased.toString()}</h4>
            <h4>Highest Medal Achieved: {medal}</h4>
          </div>
        ) : (
          "Click Image to show more info"
        )}
      </li>
    </div>
  );
}
export default HogCard;
