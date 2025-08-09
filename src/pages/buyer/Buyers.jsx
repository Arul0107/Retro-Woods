import React from 'react';
import { Link } from 'react-router-dom';
import './Buyers.css';
import iphoneImage1 from '../../assets/iphone.png';
const products = [
  {
    id: 1,
    image: iphoneImage1,
    isFeatured: true,
    price: '₹ 14,268',
    description: '2 months old only iphone 14 model available...',
    location: 'JUNGHLIGHAT, PORT BLAIR',
    time: '2 DAYS AGO'
  },
  {
    id: 2,
    image: iphoneImage1,// Replace with actual image path
    isFeatured: true,
    price: '₹ 9,000',
    description: 'Jeep spare parts...',
    location: 'MAHAVIRNAGAR, ANDAMAN & NICOBAR...',
    time: '4 DAYS AGO'
  },
  {
    id: 3,
    image: iphoneImage1,// Replace with actual image path
    isFeatured: false,
    price: '₹ 90,000',
    description: 'Samsung s24ultra 512gb purple variant...',
    location: 'ADREGIRAN BAZAR, PORT BLAIR',
    time: 'TODAY'
  },
  {
    id: 4,
    image: iphoneImage1,
    isFeatured: false,
    price: '₹ 30,000',
    description: 'Vivo v 30 5g 12gb Ram 256gb ram...',
    location: 'COAST GUARD ENCLAVE PORT BLAIR',
    time: 'TODAY'
  },
  {
    id: 5,
    image: iphoneImage1,
    isFeatured: false,
    price: '₹ 70,000',
    description: '2021 - 20,000 km Urgent sell. Scooty...',
    location: 'HIRA BAZAR, PORT BLAIR',
    time: 'TODAY'
  },
  {
    id: 6,
    image: iphoneImage1,
    isFeatured: false,
    price: '₹ 40,000',
    description: '2011 - 40 km...',
    location: 'OBC, ESTEEM...',
    time: 'YESTERDAY'
  },
  {
    id: 7,
    image: iphoneImage1,
    isFeatured: false,
    price: '₹ 18,000',
    description: '2 BHK - 2 Bathroom - 1200 sqft...',
    location: 'AAJ COLONY, PORT BLAIR',
    time: 'YESTERDAY'
  }
];

const Buyers = () => {
  return (
    <div className="buyers-page">
      <h1>Fresh recommendations</h1>
      <div className="product-grid">
        {products.map(product => (
          // The Link component makes the entire card clickable
          <Link to={`/product/${product.id}`} className="product-card-link" key={product.id}>
            <div className="product-card">
              <div className="image-container">
                <img src={product.image} alt={product.description} />
                {product.isFeatured && <span className="featured-badge">FEATURED</span>}
                <div className="heart-icon">&#x2665;</div>
              </div>
              <div className="product-info">
                <div className="price-info">
                  <span className="price">{product.price}</span>
                </div>
                <p className="description">{product.description}</p>
                <div className="location-info">
                  <span className="location">{product.location}</span>
                  <span className="time">{product.time}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export default Buyers;