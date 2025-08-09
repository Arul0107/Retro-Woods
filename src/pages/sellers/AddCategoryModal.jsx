import React, { useState } from 'react';

const AddCategoryModal = ({ isOpen, onClose, onSave }) => {
    const [newCategory, setNewCategory] = useState({
        title: '',
        icon: '',
        color: '#3B82F6',
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (newCategory.title && newCategory.icon) {
            onSave(newCategory);
            setNewCategory({ title: '', icon: '', color: '#3B82F6' });
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
          <style>
            {`
            .modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.5);
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 1000;
            }

            .modal-content {
              background: white;
              padding: 2rem;
              border-radius: 0.75rem;
              width: 100%;
              max-width: 28rem;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            }
            .modal-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 1.5rem;
            }
            .modal-title {
              font-size: 1.25rem;
              font-weight: 600;
            }
            .modal-close-button {
              background: none;
              border: none;
              font-size: 1.5rem;
              cursor: pointer;
              color: #6B7280;
            }
            .form-group {
              margin-bottom: 1rem;
            }
            .form-label {
              display: block;
              font-weight: 500;
              margin-bottom: 0.5rem;
            }
            .form-input {
              width: 100%;
              padding: 0.5rem 0.75rem;
              border: 1px solid #D1D5DB;
              border-radius: 0.375rem;
            }
            .form-actions {
              display: flex;
              justify-content: flex-end;
              gap: 0.5rem;
              margin-top: 2rem;
            }
            .form-button {
              padding: 0.5rem 1rem;
              border-radius: 0.375rem;
              font-weight: 500;
              cursor: pointer;
              transition: all 0.2s;
            }
            .cancel-button {
              background: #F3F4F6;
              color: #4B5563;
            }
            .cancel-button:hover {
              background-color: #E5E7EB;
            }
            .save-button {
              background: #2563EB;
              color: white;
            }
            .save-button:hover {
              background-color: #1D4ED8;
            }
            `}
          </style>
          
          <div className="modal-content">
              <div className="modal-header">
                  <h2 className="modal-title">Add New Category</h2>
                  <button onClick={onClose} className="modal-close-button">&times;</button>
              </div>
              <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                      <label htmlFor="title" className="form-label">Category Title</label>
                      <input
                          type="text"
                          id="title"
                          className="form-input"
                          value={newCategory.title}
                          onChange={(e) => setNewCategory({ ...newCategory, title: e.target.value })}
                          required
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="icon" className="form-label">Icon (Emoji)</label>
                      <input
                          type="text"
                          id="icon"
                          className="form-input"
                          value={newCategory.icon}
                          onChange={(e) => setNewCategory({ ...newCategory, icon: e.target.value })}
                          required
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="color" className="form-label">Accent Color</label>
                      <input
                          type="color"
                          id="color"
                          className="form-input p-1 h-10 cursor-pointer"
                          value={newCategory.color}
                          onChange={(e) => setNewCategory({ ...newCategory, color: e.target.value })}
                      />
                  </div>
                  <div className="form-actions">
                      <button type="button" onClick={onClose} className="form-button cancel-button">
                          Cancel
                      </button>
                      <button type="submit" className="form-button save-button">
                          Save Category
                      </button>
                  </div>
              </form>
          </div>
        </div>
    );
};

export default AddCategoryModal;