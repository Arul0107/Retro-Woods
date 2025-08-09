import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Space, message, Typography, Divider } from 'antd';
import './AdminDashboard.css';

// Import the specific placeholder image as requested
import placeholderImage from '../../assets/iphone.png';

// Placeholder data for products to be moderated, using a format that can be easily searched.
const allProducts = [
  {
    id: 1,
    // Use the imported image here
    images: [placeholderImage, '/path/to/iphone2.png'], 
    isFeatured: true,
    price: '₹ 14,268',
    title: '2 months old only iphone 14 model available for sale',
    location: 'Junglighat, Port Blair, Andaman & Nicobar Islands',
    postedTime: '2 days ago',
    seller: {
      name: 'Subha',
      memberSince: 'Apr 2017',
      itemsListed: 13,
    },
    details: {
      brand: 'Other Mobiles',
    },
    description: 'Iphone 14, 128gb storage, battery health is 96%',
  },
  {
    id: 101,
    images: [placeholderImage], 
    price: '₹ 12,000',
    title: 'Vintage Camera',
    location: 'New Delhi, Delhi',
    postedTime: '1 week ago',
    seller: {
      name: 'John Doe',
      memberSince: 'Jan 2020',
      itemsListed: 5,
    },
    details: {
      brand: 'Vintage',
    },
    description: 'A classic film camera in excellent condition. Comes with a leather case.',
  },
  {
    id: 102,
    images: [placeholderImage],
    price: '₹ 25,000',
    title: 'Mountain Bike',
    location: 'Mumbai, Maharashtra',
    postedTime: '3 days ago',
    seller: {
      name: 'Jane Smith',
      memberSince: 'Feb 2021',
      itemsListed: 8,
    },
    details: {
      brand: 'Generic',
    },
    description: 'Used mountain bike, perfect for trail riding. Needs new tires.',
  }
];

// Function to fetch product details based on ID from the mock data
const fetchProductDetails = (id) => {
  return allProducts.find(product => product.id === parseInt(id));
};

const ModerationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = fetchProductDetails(id);

  const handleAccept = () => {
    // In a real application, you would make an API call to update the product status
    message.success(`Product "${product.title}" has been accepted.`);
    navigate('/admin');
  };

  const handleReject = () => {
    // In a real application, you would make an API call to update the product status
    message.error(`Product "${product.title}" has been rejected.`);
    navigate('/admin');
  };

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="moderation-details-page">
      <Card 
        title={`Moderating: ${product.title}`} 
        style={{ width: '100%', maxWidth: '800px', margin: 'auto' }}
      >
        <div style={{ marginBottom: '20px' }}>
          {/* Display the main product image using the imported variable */}
          <img 
            src={product.images[0]} 
            alt={product.title} 
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
          />
        </div>
        
        {/* Display price and location details */}
        <Typography.Title level={2}>{product.price}</Typography.Title>
        <Typography.Text type="secondary">{product.location} - {product.postedTime}</Typography.Text>
        <Divider />
        
        {/* Display the product details card */}
        <div style={{ marginBottom: '20px' }}>
          <Typography.Title level={4}>Details</Typography.Title>
          <p><strong>Brand:</strong> {product.details.brand}</p>
        </div>
        
        {/* Display the product description card */}
        <div style={{ marginBottom: '20px' }}>
          <Typography.Title level={4}>Description</Typography.Title>
          <p>{product.description}</p>
        </div>
        
        <Divider />

        {/* Display the seller information card */}
        <div style={{ marginBottom: '20px' }}>
          <Typography.Title level={4}>Posted by</Typography.Title>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/path/to/seller-profile.jpg" alt="Seller" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            <div>
              <p style={{ margin: 0, fontWeight: 'bold' }}>{product.seller.name}</p>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'gray' }}>Member since {product.seller.memberSince}</p>
            </div>
          </div>
          <p style={{ marginTop: '10px' }}>{product.seller.itemsListed} items listed</p>
        </div>
        
        {/* Action buttons for moderation */}
        <Space size="middle">
          <Button type="primary" onClick={handleAccept}>Accept</Button>
          <Button type="danger" onClick={handleReject}>Reject</Button>
        </Space>
      </Card>
    </div>
  );
};

export default ModerationDetails;