import React from "react";
import GentlemanCard from "./GentlemanCard/GentlemanCard";
import gentlemen from "./gentlemen/gentlemen";

function App() {
  return (
    <div className="container">
      <ul className="gentleman">
        {gentlemen.map(
          ({
            name,
            status,
            profession,
            alternativeText,
            twitter,
            picture,
            id,
          }) => {
            return (
              <GentlemanCard
                name={name}
                status={status}
                profession={profession}
                alternativeText={alternativeText}
                twitter={twitter}
                picture={picture}
                key={id}
              />
            );
          }
        )}
      </ul>
    </div>
  );
}

export default App;
