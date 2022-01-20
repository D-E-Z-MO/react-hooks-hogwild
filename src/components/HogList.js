import React, { useState } from "react";
import HogCard from "./HogCard";

function HogList({ hogs }) {
  const [filter, setFilter] = useState(false);
  const [sortSelector, setSortSelector] = useState("");
  const filteredList = filter ? hogs.filter((h) => h.greased) : hogs;

  const sortedHogs = sortSelector
    ? hogs.sort((a, b) => {
        return a[sortSelector] < b[sortSelector] ? -1 : 0;
      })
    : filteredList;
  console.log(sortSelector);

  return (
    <>
      <div>
        <label for="sort">Sort by:</label>
        <select onChange={(e) => setSortSelector(e.target.value)}>
          <option value="name">name</option>
          <option value="weight">weight</option>
        </select>
      </div>
      <label for="filter">Show Only Greased</label>
      <input
        onChange={() => {
          setFilter((filter) => !filter);
        }}
        name="filter"
        type="checkbox"
        checked={filter}
      />
      <ul>
        {sortedHogs.map((hog) => (
          <HogCard
            hogs={hog}
            key={hog.name}
            weight={hog.weight}
            name={hog.name}
            image={hog.image}
            specialty={hog.specialty}
            greased={hog.greased}
            medal={hog["highest medal achieved"]}
          />
        ))}
      </ul>
    </>
  );
}
export default HogList;

// onClick={() => sortedName()}
