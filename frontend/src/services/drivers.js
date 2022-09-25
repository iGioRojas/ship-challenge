const API_URL = "http://localhost:3000";

export async function getAllDrivers() {
  try {
    const response = await fetch(`${API_URL}/drivers`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getVehicles(id) {
  try {
    const response = await fetch(`${API_URL}/drivers/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getOneVehicle(id) {
  try {
    const response = await fetch(`${API_URL}/vehicle/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function createVehicle(body) {
  try {
    const response = await fetch(`${API_URL}/vehicle/create`, {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: body
    });
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function updateVehicle(body) {
  try {
    const response = await fetch(`${API_URL}/vehicle/update`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:body
    });
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteVehicle(id) {
  try {
    const response = await fetch(`${API_URL}/vehicle/delete/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
