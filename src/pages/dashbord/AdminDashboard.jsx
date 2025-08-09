import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Space } from 'antd';
import './AdminDashboard.css';

// Import a placeholder image for the product
import placeholderImage from '../../assets/iphone.png'; 

// Placeholder data for products to be moderated
const pendingProducts = [
  {
    id: 101,
    name: 'Vintage Camera',
    description: 'A classic film camera in excellent condition. Comes with a leather case.',
    user: 'John Doe',
    isAccepted: null, // null means pending
  },
  {
    id: 102,
    name: 'Mountain Bike',
    description: 'Used mountain bike, perfect for trail riding. Needs new tires.',
    user: 'Jane Smith',
    isAccepted: null,
  },
  {
    id: 103,
    name: 'Antique Wooden Chair',
    description: 'Hand-carved chair from the 19th century. Some signs of wear and tear.',
    user: 'Peter Jones',
    isAccepted: null,
  },
];

const AdminDashboard = () => {
  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <Space>
          <img src={placeholderImage} alt={text} className="product-table-image" />
          <Link to={`/product/${record.id}`} className="product-link">
            {text}
          </Link>
        </Space>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Posted by',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/admin/moderation/${record.id}`}>
            <Button type="primary">Accept/Reject Details</Button>
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <div className="admin-dashboard-page">
      <h1>Admin Dashboard</h1>
      <p>Manage pending product listings. Click on a product name to view its details.</p>

      <div style={{ marginBottom: '20px' }}>
        {/* New button to navigate to the History Page */}
        <Link to="/admin/history">
          <Button>View History</Button>
        </Link>
      </div>

      <Table
        dataSource={pendingProducts}
        columns={columns}
        rowKey="id"
        className="admin-table"
      />
    </div>
  );
};

export default AdminDashboard;