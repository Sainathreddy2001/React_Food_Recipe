import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = ({ data }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {data.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top" src={item.recipe.image} alt="Card cap" />
              <div className="card-body">
                <center>
                  <h5 className="card-title">{item.recipe.label}</h5>
                  <p className="card-text">Total Amount Of Calories: {Math.round(item.recipe.calories)}</p>
                  <button className="btn btn-primary">Order Now</button>
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
