// src/routes/router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Buyers from '../pages/buyer/Buyers';
import Sellers from '../pages/sellers/Sellers';
import Productpage from '../pages/buyer/Productpage';
import AdminDashboard from '../pages/dashbord/AdminDashboard';
import ModerationDetails from '../pages/dashbord/ModerationDetails'; // Import the new component
import HistoryPage from '../pages/dashbord/HistoryPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/buy" element={<Buyers />} />
      <Route path="/sell" element={<Sellers />} />
      <Route path="/product/:id" element={<Productpage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/moderation/:id" element={<ModerationDetails />} /> {/* New route */}
      <Route path="/admin/history" element={<HistoryPage  />} /> {/* New route */}
      {/* Add more routes here as your application grows */}
    </Routes>
  );
};

export default AppRouter;