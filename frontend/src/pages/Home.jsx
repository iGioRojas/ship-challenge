import React from "react";
import { useNavigate } from "react-router-dom";
import * as API from "../services/drivers";
import { useState, useEffect } from "react";
import Loader from "./loader";

function Home() {
  const [drivers, setDrivers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.getAllDrivers().then((response) => {
      setDrivers(response);
      setLoading(false);
    });
  }, []);

  const navigation = useNavigate();
  function viewVehicles(id) {
    navigation(`/vehicle/${id}`);
  }

  const handleChange = (text)=>{
    setSearch(text.target.value);
  }

  const results = !search ? drivers : drivers.filter((dato)=> {
    let name = dato.first_name + dato.last_name;
    return name.toLowerCase().includes(search.replace(" ","").toLocaleLowerCase());
  })

  return (
    <>
    <div className="container-fluid">
      <h1 className="text-center">Ship Drivers</h1>
      <div className="w-100 m-3 d-flex justify-content-center">
        <input className="form-control w-50" type="text" placeholder="Search" value={search} onChange={handleChange}></input>
      </div>
      <div className="table-responsive w-75 mx-auto mt-4">
        <table className="table table-striped table-borderless table-warning">
          <thead>
            <tr>
              <th scope="col">Company</th>
              <th scope="col">Name</th>
              <th scope="col">Contact</th>
              <th scope="col">Status</th>
              <th scope="col">Vehicles</th>
            </tr>
         </thead>
          <Loader loading={loading}/>
         <tbody>
          {results.map((driver)=>(
              <tr key={driver.id}>
                <th scope="row">{driver.company.name}</th>
                <td>{driver.first_name} {driver.last_name}</td>
                <td>{driver.email}</td>
                <td>{driver.status === "active"?<span className="text-success">Active</span>:<span className="text-danger">Inactive</span>}</td>
                <td><button className="btn btn-warning" onClick={() => viewVehicles(driver.id)}>View Vehicles</button></td>
              </tr>
          ))}
         </tbody>
        </table>
      </div>
      </div>
    </>
  );
}

export default Home;
