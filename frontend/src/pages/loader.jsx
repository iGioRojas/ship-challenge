import React from "react";

function Loader(props){

    return (
    <>
    {props.loading && <div className="position-absolute top-50 start-50 translate-middle">
          <div className="spinner-grow text-warning m-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger m-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-dark m-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
    </div>}
    
    </>)
}

export default Loader;
