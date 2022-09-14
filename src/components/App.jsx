import { BrowserRouter, Route, Routes } from "react-router-dom";
import Film from "../films/components/film";

import Films from "../films/components/films";
import People from "../people/components/people";
import Peoples from "../people/components/peoples";
import Starship from "../starships/components/starship";
import Starships from "../starships/components/starships";
import Vehicle from "../vehicles/components/vehicle";
import Vehicles from "../vehicles/components/vehicles";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Films />} />
        <Route path="/film" element={<Films />} />
        <Route path="/film/:id" element={<Film />} />
        <Route path="/vehicle" element={<Vehicles />} />
        <Route path="/vehicle/:id" element={<Vehicle />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/starships/:id" element={<Starship />} />
        <Route path="people" element={<Peoples />} />
        <Route path="/people/:id" element={<People />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
