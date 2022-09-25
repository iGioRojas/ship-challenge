
# Shippify Challenge

Pequeño proyecto usando React en frontend y NodeJs con Express en el backend.


## Instalación
El presente repositorio es un monorepo, es decir el frontend y el backend se encuentran en el mismo directorio.
Clone el repositorio y escriba el comando `npm install` en la carpeta backend y en la carpeta frontend.

### Iniciar backend
`npm run devstart` nodemon

### Iniciar frontend
`npm run dev` creado con 
[Vite](https://vitejs.dev/)
## Acknowledgements

* [API](#api)
* [Frontend](#frontend)


## API

#### Get conductores

```http
  GET /drivers
```

#### Get vehiculos por conductor

```http
  GET /drivers/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Requerido**. Id del conductor |

#### Get vehículo por id
```http
  GET /vehicle/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Requerido**. Id del vehículo |


#### POST crear un nuevo vehículo 

```http
  POST /vehicle/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `plate`      | `string` | Placa del vehículo |
| `model` | `string`| Modelo del vehículo
| `type` | `string`| Tipo de vehículo
| `capacity` |`string` | Capacidad del vehículo
| `driver_id` |`string`| Id del conductor

#### PUT actualizar la información de un vehículo

```http
  PUT /vehicle/update
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Id del vehículo |
| `plate`      | `string` | Placa del vehículo |
| `model` | `string`| Modelo del vehículo
| `type` | `string`| Tipo de vehículo
| `capacity` |`string` | Capacidad del vehículo
| `driver_id` |`string`| id del conductor

#### PUT actualizar la información de un vehículo

```http
  DELETE /vehicle/delete/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Id del vehículo a eliminar |


## Frontend

### Pages
* Home
* Vehicle
* CreateVehicle
* UpdateVehicle

### Services
* driver.js

### Utils
* loader.js dentro de pages

    