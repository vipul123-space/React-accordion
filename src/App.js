import React from "react";
import data from "./data";
import Accordion from "./Accordion";

function App() {
  return (
    <>
      <div className="container">
        <h1>question and answer about login</h1>
        <section className="main-section">
          {data.map((information) => {
            return (
              <Accordion key={information.id} {...information}></Accordion>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default App;
