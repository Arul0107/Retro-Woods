import React from 'react';
import { Card, Col, Row, Statistic, Button, Tabs, Table } from 'antd';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const { TabPane } = Tabs;

// Placeholder data for the history statistics
const historyData = {
  totalListings: 150,
  soldItems: 95,
};

// Mock data for the tables
const postedItemsData = [
  {
    key: '1',
    name: 'Vintage Camera',
    status: 'Pending Review',
    date: '2024-05-10',
  },
  {
    key: '2',
    name: 'Antique Wooden Chair',
    status: 'Pending Review',
    date: '2024-05-09',
  },
];

const inStockItemsData = [
  {
    key: '1',
    name: 'Gaming Laptop',
    price: '₹ 80,000',
    date: '2024-04-25',
  },
  {
    key: '2',
    name: 'Leather Jacket',
    price: '₹ 5,000',
    date: '2024-04-20',
  },
];

const soldItemsData = [
  {
    key: '1',
    name: 'Mountain Bike',
    price: '₹ 25,000',
    soldDate: '2024-05-05',
  },
  {
    key: '2',
    name: 'Designer Watch',
    price: '₹ 15,000',
    soldDate: '2024-05-01',
  },
];

// Table columns for each data type
const postedColumns = [
  { title: 'Item Name', dataIndex: 'name', key: 'name' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  { title: 'Posted Date', dataIndex: 'date', key: 'date' },
];

const inStockColumns = [
  { title: 'Item Name', dataIndex: 'name', key: 'name' },
  { title: 'Price', dataIndex: 'price', key: 'price' },
  { title: 'Listed Date', dataIndex: 'date', key: 'date' },
];

const soldColumns = [
  { title: 'Item Name', dataIndex: 'name', key: 'name' },
  { title: 'Price', dataIndex: 'price', key: 'price' },
  { title: 'Sold Date', dataIndex: 'soldDate', key: 'soldDate' },
];

const HistoryPage = () => {
  return (
    <div className="admin-dashboard-page">
      <h1>Admin History</h1>
      <p>Overview of all product listings and sales.</p>
      
      <Row gutter={16} style={{ marginBottom: '24px' }}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Total Listings"
              value={historyData.totalListings}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Items Sold"
              value={historyData.soldItems}
            />
          </Card>
        </Col>
      </Row>
      
      <Tabs defaultActiveKey="1">
        <TabPane tab="Posted" key="1">
          <Table dataSource={postedItemsData} columns={postedColumns} />
        </TabPane>
        <TabPane tab="In-Stock" key="2">
          <Table dataSource={inStockItemsData} columns={inStockColumns} />
        </TabPane>
        <TabPane tab="Sold" key="3">
          <Table dataSource={soldItemsData} columns={soldColumns} />
        </TabPane>
      </Tabs>
      
      <div style={{ marginTop: '24px' }}>
        <Link to="/admin">
          <Button>Back to Admin Dashboard</Button>
        </Link>
      </div>
    </div>
  );
};

export default HistoryPage;