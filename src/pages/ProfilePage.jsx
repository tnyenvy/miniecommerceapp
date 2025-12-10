import React, { useState } from 'react';
import { useNavigate } from 'zmp-ui';
import Footer from '../components/Footer/Footer.jsx';
import favouriteItems from './FavouritesPage.jsx';
import '../css/profile.scss';

const ProfilePage = ({ cartCount, favouriteItems = [] }) => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: 'Michael',
    phone: '+84 123 456 789',
    email: 'michael.design@gmail.com',
    address: '123 Hoang Dieu 2, Thu Duc, HCMC',
    avatar: 'https://i.pinimg.com/736x/51/27/c8/5127c87d49c5075a462ea50fe55fb710.jpg'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleAvatarChange = () => {
    alert('Open Camera/Gallery');
  };

  const handleSave = () => {
    console.log("Saving info:", userInfo);
    alert('Saved successfully!');
  };

  const handleLogout = () => {
    // Đăng xuất 
    alert('Logging out...');
    // Điều hướng về trang chủ
    navigate('/');
  };

  return (
    <div className="profile-page">
      <div className="profile-page__header">
        <h2 className="header-title">My Profile</h2>
      </div>

      <div className="profile-page__content">
        
        {/* AVATAR */}
        <div className="avatar-section">
          <img src={userInfo.avatar} alt="Avatar" className="avatar-section__image" />
          <button className="avatar-section__camera-btn" onClick={handleAvatarChange}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
                </svg>
          </button>
        </div> 

        {/* FORM */}
        <div className="profile-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" value={userInfo.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" value={userInfo.phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email (Cannot be changed)</label>
            <input type="email" value={userInfo.email} disabled={true} />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" value={userInfo.address} onChange={handleChange} />
          </div>
        </div>

        {/* ACTIONS */}
        <div className="action-buttons">
          <button className="btn-action btn-action--primary" onClick={handleSave}>
            Save Changes
          </button>

          <button className="btn-action btn-action--secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            Reset Password
          </button>
          
          <button className="btn-action btn-action--logout" onClick={handleLogout}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            Log out
          </button>
        </div>

      </div>

      <Footer cartCount={cartCount} favouriteCount={favouriteItems.length} />
    </div>
  );
};

export default ProfilePage;