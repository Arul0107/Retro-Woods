// src/App.jsx
import React from 'react';
import { Layout } from 'antd';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import AppRouter from './routes/router'; // Import the new router component

import './App.css'; // For general styling

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <NavBar />
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-content">
          <AppRouter /> {/* Use the router component here */}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;