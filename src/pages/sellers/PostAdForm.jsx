import React, { useState } from 'react';
import { Breadcrumb, Button, Input, Form, InputNumber, Upload, Avatar, notification } from 'antd';
import { UploadOutlined, UserOutlined, PlusOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const PostAdForm = ({ category, subcategory, onBack }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const onFinish = (values) => {
    console.log('Form values:', { ...values, photos: fileList });
    notification.success({
      message: 'Ad Posted Successfully!',
      description: `Your ad for "${values.title}" has been submitted.`,
      placement: 'topRight',
    });
  };

  const handleFileChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const uploadProps = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture-card',
    fileList: fileList,
    onChange: handleFileChange,
    maxCount: 12,
    multiple: true, // This is the prop for multiple file selection
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Add Photo</div>
    </div>
  );

  return (
    <div className="post-ad-container">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .post-ad-container {
          min-height: 100vh;
          background-color: #f3f4f6;
          font-family: 'Inter', sans-serif;
          padding: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card-container {
          background-color: #ffffff;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          width: 100%;
          max-width: 800px;
        }

        .header {
          padding: 1.5rem;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .header h1 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
          margin-top: 0.5rem;
        }

        .breadcrumb {
          font-size: 0.875rem;
        }

        .form-section {
          padding: 1.5rem;
          border-bottom: 1px solid #e5e7eb;
        }

        .form-section:last-child {
          border-bottom: none;
        }

        .form-section h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 1.5rem;
        }

        .profile-section {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .profile-text {
          font-size: 0.875rem;
          color: #6b7280;
        }

        .post-now-button {
          width: 100%;
          background-color: #10b981;
          border-color: #10b981;
          height: 2.75rem;
          font-size: 1rem;
          font-weight: 600;
        }
        
        .post-now-button:hover {
          background-color: #059669;
          border-color: #059669;
        }
      `}</style>
      
      <div className="card-container">
        <div className="header">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item onClick={onBack} style={{ cursor: 'pointer' }}>
              Choose a Category
            </Breadcrumb.Item>
            <Breadcrumb.Item>{category}</Breadcrumb.Item>
            <Breadcrumb.Item>{subcategory}</Breadcrumb.Item>
          </Breadcrumb>
          <h1>Post Ad</h1>
        </div>

        <Form
          form={form}
          name="post-ad-form"
          onFinish={onFinish}
          layout="vertical"
          style={{ width: '100%' }}
        >
          {/* Ad Details Section */}
          <div className="form-section">
            <h3>Ad details</h3>
            <Form.Item
              name="title"
              label="Ad title *"
              rules={[{ required: true, message: 'Please enter a title for your ad!' }]}
            >
              <Input placeholder="Enter a descriptive title" />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description *"
              rules={[{ required: true, message: 'Please provide a description!' }]}
            >
              <TextArea rows={4} placeholder="Describe your product in detail" />
            </Form.Item>
          </div>

          {/* Set a price Section */}
          <div className="form-section">
            <h3>Set a price</h3>
            <Form.Item
              name="price"
              label="Price *"
              rules={[{ required: true, message: 'Please set a price!' }]}
            >
              <InputNumber 
                style={{ width: '100%' }} 
                min={0} 
                prefix="$" 
                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              />
            </Form.Item>
          </div>

          {/* Upload photos Section */}
          <div className="form-section">
            <h3>UPLOAD UP TO 12 PHOTOS</h3>
            <Form.Item
              name="photos"
              valuePropName="fileList"
              getValueFromEvent={(e) => e.fileList}
              rules={[{ required: true, message: 'This field is mandatory' }]}
            >
              <Upload {...uploadProps}>
                {fileList.length < 12 && uploadButton}
              </Upload>
            </Form.Item>
          </div>

          {/* Confirm your location Section */}
          <div className="form-section">
            <h3>Confirm your location</h3>
            <Form.Item
              name="currentLocation"
              label="Current location"
              rules={[{ required: true, message: 'Please enter your location!' }]}
            >
              <Input placeholder="Enter your current location" />
            </Form.Item>
          </div>

          {/* Review your details Section */}
          <div className="form-section">
            <h3>Review your details</h3>
            <div className="profile-section">
              <Avatar size={64} icon={<UserOutlined />} />
              <p className="profile-text">
                We will send you a confirmation code by SMS on the next step.
              </p>
            </div>
            <Form.Item
              name="mobile"
              label="Mobile Phone Number *"
              rules={[{ required: true, message: 'Please enter your mobile number!' }]}
            >
              <Input placeholder="e.g., +91 9876543210" />
            </Form.Item>
            <Form.Item
              name="name"
              label="Name *"
              rules={[{ required: true, message: 'Please enter your name!' }]}
            >
              <Input placeholder="Your full name" />
            </Form.Item>
          </div>

          {/* Post Now Button */}
          <div className="form-section" style={{ borderBottom: 'none' }}>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="post-now-button">
                Post Now
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PostAdForm;