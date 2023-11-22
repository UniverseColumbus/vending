import React from 'react';

const ProductSection = ({ title, image, description }) => (
  <section className="product-section">
    <h2>{title}</h2>
    <div>
      <img src={image} alt={`${title} Vending Machine`} 
      style={{width: "20%", height: "auto"}}/>
      <p>{description}</p>
      {/* Add more details as needed */}
    </div>
  </section>
);

export default ProductSection;