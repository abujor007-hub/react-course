import React from "react";
import Product from "./components/Product";

import Items from "./components/Items";
import Events from "./components/Events";
import UseState from "./components/UseState";
import Map  from "./components/Map";
import Filter from "./components/Filter";
import UseEffectComponent from "./components/UseEffect";
import FetchData from "./components/FetchData";
import Form_handling from "./components/Form_handling";

const App = () => {
  const obj = {
    ram: "16gb",
    rom: "256gb",
  };

  return (
    <>
      {/* <Product name="Rayzen 5 5600G" price={15000} color="silver" data={obj} />
      <Product name="Rayzen 7 7800x 3D" price={40000} color="silver" /> */}

      {/* <Items/> */}
      {/* <Events/> */}
      {/* <UseState/> */}
      {/* <Map/> */}
      {/* <Filter/> */}
      {/* <UseEffectComponent/> */}
      {/* <FetchData /> */}
      <Form_handling />

    </>
  );
};

export default App;