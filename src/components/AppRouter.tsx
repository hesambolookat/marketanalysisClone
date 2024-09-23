import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from "./Login";
import SignUp from "./SignUp";
import ForgetPassword from "./ForgetPassword";
import Main from './Main';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* روت برای صفحه اصلی */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />
        {/* روت برای صفحه لاگین بدون هدر و فوتر */}
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;
