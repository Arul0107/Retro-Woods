import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Productpage.css';

// Correctly import images from your assets folder
import iphoneImage1 from '../../assets/iphone.png';
import iphoneImage2 from '../../assets/iphone2.png';

const productData = {
  id: 1,
  // Use the imported image variables
  images: [iphoneImage1, iphoneImage2],
  isFeatured: true,
  price: '₹ 14,268',
  title: '2 months old only iphone 14 model available for sale',
  location: 'Junglighat, Port Blair, Andaman & Nicobar Islands',
  postedTime: '2 days ago',
  seller: {
    name: 'Subha',
    memberSince: 'Apr 2017',
    itemsListed: 13
  },
  details: {
    brand: 'Other Mobiles'
  },
  description: 'Iphone 14, 128gb storage, battery health is 96%'
};

const Productpage = () => {
  const { id } = useParams();

  const product = productData;

  const { images, price, title, location, postedTime, seller, details, description } = product;

  // Use state to track the main image. Initialize it with the first image.
  const [mainImage, setMainImage] = useState(images[0]);

  // Handle clicking on a thumbnail image
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="product-page">
      <div className="content-wrapper">
        <div className="main-content">
          <div className="image-section">
            {/* Display the mainImage state variable */}
            <img src={mainImage} alt={title} className="main-image" />
            <div className="thumbnail-images">
              {images.map((img, index) => (
                // Add an onClick handler to each thumbnail
                <img 
                  key={index} 
                  src={img} 
                  alt={`${title} thumbnail ${index + 1}`} 
                  className={`thumbnail-image ${mainImage === img ? 'active' : ''}`}
                  onClick={() => handleThumbnailClick(img)}
                />
              ))}
            </div>
          </div>
          <div className="details-section">
            <div className="details-card">
              <h2>Details</h2>
              <ul>
                <li><strong>Brand:</strong> {details.brand}</li>
              </ul>
            </div>
            <div className="description-card">
              <h2>Description</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <div className="price-card">
            <div className="price-header">
              <span className="product-price">{price}</span>
              <div className="share-favorite-icons">
                {/* Add icons here */}
              </div>
            </div>
            <h1 className="product-title">{title}</h1>
            <div className="location-time">
              <span>{location}</span>
              <span>{postedTime}</span>
            </div>
          </div>
          <div className="seller-card">
            <h3>Posted by</h3>
            <div className="seller-info">
              <img src="/path/to/seller-profile.jpg" alt="Seller" className="seller-avatar" />
              <div className="seller-details">
                <span className="seller-name">{seller.name}</span>
                <span className="member-since">Member since {seller.memberSince}</span>
              </div>
            </div>
            <div className="seller-items">
              <span>{seller.itemsListed} items listed</span>
            </div>
            <button className="chat-btn">Chat with seller</button>
            <button className="show-number-btn">Show number</button>
          </div>
          <div className="location-card">
            <h3>Posted in</h3>
            <p>{location}</p>
            <div className="map-placeholder">Map goes here</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productpage;