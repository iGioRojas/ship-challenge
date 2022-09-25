import React from "react";
import * as API from "../services/drivers";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateVehicle() {
  let { id } = useParams();
  const navigation = useNavigate();

  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    API.getOneVehicle(id).then(setVehicle);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = JSON.stringify(vehicle);
    API.updateVehicle(values).then((data) => console.log(data));
    navigation(`/vehicle/${vehicle.driver_id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-75 mx-auto">
      <h1 className="m-3 text-center">Update Vehicle</h1>
      <div className="mb-3">
        <label htmlFor="plate" className="form-label">
          Plate
        </label>
        <input
          name="plate"
          type="text"
          className="form-control"
          onChange={handleChange}
          defaultValue={vehicle.plate}
          id="plate"
          aria-describedby="plate"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="model" className="form-label">
          Model
        </label>
        <input
        name="model"
          type="text"
          className="form-control"
          onChange={handleChange}
          defaultValue={vehicle.model}
          id="model"
        ></input>
      </div>
      <label htmlFor="type" className="form-label">
          Type
        </label>
      <select
        className=" mb-3 form-select"
        name="type"
        id="type"
        onChange={handleChange}
      >
        <option value={vehicle.type} selected >{vehicle.type}</option>
        <option value="bicycle">Bicycle</option>
        <option value="motorcycle">Motorcycle</option>
        <option value="car">Car</option>
        <option value="van">Van</option>
        <option value="truck">Truck</option>
      </select>
      <label htmlFor="capacity" className="form-label">
          Capacity
        </label>
      <select
        className="form-select"
        name="capacity"
        id="capacity"
        onChange={handleChange}
      >
        <option value={vehicle.capacity} selected>{vehicle.capacity}</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <button className="mt-4 btn btn-warning" type="submit">
        Update Vehicle
      </button>
    </form>
  );
}

export default UpdateVehicle;
