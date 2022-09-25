import React from "react";
import * as API from "../services/drivers";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CreateVehicle() {
  let { id } = useParams();
  const navigation = useNavigate();

  const [data, setData] = useState({
    plate: "",
    model: "",
    type: "",
    capacity: "",
    driver_id: id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = JSON.stringify(data);
    API.createVehicle(values).then((data) => console.log(data));
    navigation(`/vehicle/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-75 mx-auto">
      <h1 className="m-3 text-center">Create Vehicle</h1>
      <div className="mb-3">
        <label for="plate" className="form-label">
          Plate
        </label>
        <input
          className="form-control"
          type="text"
          name="plate"
          onChange={handleChange}
        ></input>
      </div>
      <div className="mb-3">
        <label for="plate" className="form-label">
          Model
        </label>
        <input
          type="text"
          className="form-control"
          name="model"
          onChange={handleChange}
        ></input>
      </div>
      <label for="type" className="form-label">
        Type
      </label>
      <select
        className="mb-3 form-select"
        name="type"
        id="type"
        onChange={handleChange}
      >
        <option value="bicycle">Bicycle</option>
        <option value="motorcycle">Motorcycle</option>
        <option value="car">Car</option>
        <option value="van">Van</option>
        <option value="truck">Truck</option>
      </select>
      <label for="capacity" className="form-label">
        Capacity
      </label>
      <select
        className="form-select"
        name="capacity"
        id="capacity"
        onChange={handleChange}
      >
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <button className="mt-4 btn btn-warning" type="submit">
        Send Vehicle
      </button>
    </form>
  );
}

export default CreateVehicle;
