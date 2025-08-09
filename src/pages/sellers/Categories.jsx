import React, { useState } from 'react';
import {
  ShopOutlined,
  RightOutlined,
} from '@ant-design/icons';
import PostAdForm from './PostAdForm'; // Import the new component

const categoriesData = [
  {
    icon: <ShopOutlined />,
    title: 'Furniture',
    subcategories: ['Sofa & Dining', 'Beds & Wardrobes', 'Home Decor & Garden', 'Kids Furniture', 'Other Household Items'],
  },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(categoriesData[0]); // Changed to a valid index
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleSubcategoryClick = (categoryTitle, subcategoryName) => {
    setSelectedSubcategory({ category: categoryTitle, subcategory: subcategoryName });
  };

  const handleBack = () => {
    setSelectedSubcategory(null); // Go back to the category selection view
  };

  if (selectedSubcategory) {
    return (
      <PostAdForm
        category={selectedSubcategory.category}
        subcategory={selectedSubcategory.subcategory}
        onBack={handleBack}
      />
    );
  }

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
          text-align: center;
        }
        
        .header h1 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }

        .content-body {
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 768px) {
          .content-body {
            flex-direction: row;
          }
        }
        
        .category-column {
          flex-basis: 50%;
          border-right: 1px solid #e5e7eb;
          padding: 0;
        }
        
        .subheader {
          padding: 1rem 1.5rem;
          font-weight: 600;
          font-size: 0.875rem;
          color: #4b5563;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .category-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .category-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
        }
        
        .category-item:hover {
          background-color: #f9fafb;
        }
        
        .category-item.selected {
          background-color: #e5e7eb;
        }
        
        .category-item-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .category-item-content svg {
          width: 1.5rem;
          height: 1.5rem;
          color: #6b7280;
        }
        
        .category-item-content span {
          font-weight: 500;
          color: #1f2937;
        }
        
        .subcategory-column {
          flex-basis: 50%;
        }

        .subcategory-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .subcategory-item {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid #e5e7eb;
          font-size: 0.875rem;
          color: #374151;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
        }

        .subcategory-item:last-child {
          border-bottom: none;
        }

        .subcategory-item:hover {
          background-color: #f9fafb;
        }
      `}</style>
      <div className="card-container">
        <div className="header">
          <h1>Product</h1>
          <div className="subheader">CHOOSE A CATEGORY</div>
        </div>
        <div className="content-body">
          <div className="category-column">
            <ul className="category-list">
              {categoriesData.map((category) => (
                <li
                  key={category.title}
                  className={`category-item ${selectedCategory.title === category.title ? 'selected' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className="category-item-content">
                    {category.icon}
                    <span>{category.title}</span>
                  </div>
                  <RightOutlined style={{ color: '#9ca3af' }} />
                </li>
              ))}
            </ul>
          </div>
          <div className="subcategory-column">
            <ul className="subcategory-list">
              {selectedCategory.subcategories.map((subcategory) => (
                <li
                  key={subcategory}
                  className="subcategory-item"
                  onClick={() => handleSubcategoryClick(selectedCategory.title, subcategory)}
                >
                  {subcategory}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;