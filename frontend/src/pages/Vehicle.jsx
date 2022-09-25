import React from "react";
import * as API from "../services/drivers";
import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import Loader from "./loader";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'


function Vehicle({...props}){
    const [vehicles,setVehicles] = useState([]);
    const [driver,setDriver] = useState('');
    const [loading, setLoading] = useState(true);
    let { id } = useParams()

    useEffect(()=>{
        API.getVehicles(id).then(response =>{
          setVehicles(response);
          setDriver(response[0].driver.first_name + " " +response[0].driver.last_name );
          setLoading(false);
        });
      },[]);
    
      const navigation = useNavigate();
      
      function createVehicle(iduser) {
        navigation(`/vehicle/user/${iduser}`);
      }

      function updateVehicle(id) {
        navigation(`/vehicle/update/${id}`);
      }
      
      function deleteVehicle(id) {
        API.deleteVehicle(id);
        const updateVehicles = vehicles.filter(v => v.id !== id);
        setVehicles(updateVehicles);
      }

    return (
        <>
        <div className="d-flex p-3">
            <button className="btn btn-secondary" onClick={() => navigation("/")}>Back</button>
            <div className="w-100">
              <h1 className="text-center">Ship Drivers</h1>
            </div>
        </div>
        <div className="container">
        <h2>{driver}</h2>
        <button className="btn btn-warning" onClick={() => createVehicle(vehicles[0].driver_id)}>Create Vehicle</button>
        <div className="table-responsive w-75 mx-auto mt-4">
        <table className="table table-striped table-borderless table-warning">
          <thead>
            <tr>
              <th scope="col">Plate</th>
              <th scope="col">Model</th>
              <th scope="col">Type</th>
              <th scope="col">Capacity</th>
              <th scope="col">Actions</th>
            </tr>
         </thead>
          <Loader loading={loading}/>
         <tbody>
          {vehicles.map((vehicle)=>(
              <tr key={vehicle.id}>
                <th scope="row">{vehicle.plate}</th>
                <td>{vehicle.model} {driver.last_name}</td>
                <td>{vehicle.type}</td>
                <td>{vehicle.capacity}</td>
                <td><button className="btn btn-outline-info" onClick={() => updateVehicle(vehicle.id)}>Update Vehicle</button>
                <button className="ms-4 btn btn-outline-danger" onClick={() => deleteVehicle(vehicle.id)}>Delete Vehicle</button></td>
              </tr>
          ))}
         </tbody>
        </table>
        </div>
        </div>
        </>
    )
}

export default Vehicle;