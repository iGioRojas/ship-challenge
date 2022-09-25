import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Vehicle from "./pages/Vehicle";
import CreateVehicle from "./pages/CreateVehicle";
import UpdateVehicle from "./pages/UpdateVehicle";

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="vehicle/:id"
              element={<Vehicle/>}
            ></Route>
          <Route path="vehicle/user/:id"
              element={<CreateVehicle/>}
            ></Route>
          <Route path="vehicle/update/:id"
              element={<UpdateVehicle/>}
            ></Route>
          <Route exact path="*" element={<Navigate replace to="/" />}></Route>
        </Routes>
      </Router>
    </>
  );
}
