// src/components/Footer.jsx
import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';

const { Footer: AntdFooter } = Layout;
const { Title, Link, Text } = Typography;

const Footer = () => {
  // Dynamic data for footer sections
  const popularCategories = [
    { name: 'Cars', href: '#' },
    { name: 'Flats for rent', href: '#' },
    { name: 'Mobile Phones', href: '#' },
    { name: 'Jobs', href: '#' },
  ];

  const trendingSearches = [
    { name: 'Bikes', href: '#' },
    { name: 'Watches', href: '#' },
    { name: 'Books', href: '#' },
    { name: 'Dogs', href: '#' },
  ];

  const aboutUsLinks = [
    { name: 'About OLX Group', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'OLX for Businesses', href: '#' },
  ];

  const olxLinks = [
    { name: 'Help', href: '#' },
    { name: 'Sitemap', href: '#' },
    { name: 'Legal & Privacy information', href: '#' },
  ];

  const socialMediaLinks = [
    { icon: <FacebookOutlined />, href: '#' },
    { icon: <TwitterOutlined />, href: '#' },
    { icon: <InstagramOutlined />, href: '#' },
    { icon: <YoutubeOutlined />, href: '#' },
  ];

  const otherCountries = [
    'India', 'South Africa', 'Indonesia', 'Pakistan'
  ];

  const copyrightCompany = "Retrowoods";
  const developmentInfo = "Vrism";
  const currentYear = new Date().getFullYear(); // Get the current year dynamically
  const companyName = "RetroWoods"; // Your company name for the copyright line
  const classifiedsInfo = `Free Classifieds in India. © 2006-${currentYear} ${companyName}`;


  return (
    <AntdFooter
      style={{
        backgroundColor: '#f7f8f9',
        color: '#555',
        textAlign: 'left',
      }}
    >
    
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '30px',
          paddingTop: '20px',
          borderTop: '1px solid #ddd',
          textAlign: 'center', // Center text for smaller screens
          flexDirection: 'row', // Stack on smaller screens
        }}
      >
        <Text style={{ marginBottom: '5px' }}>Copyright received by {copyrightCompany}.</Text>
        <Text style={{ marginBottom: '5px' }}>Design and developed by {developmentInfo}.</Text>
       
      
      </div>
    </AntdFooter>
  );
};

export default Footer;
