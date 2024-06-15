import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If using axios
import Header from '../layouts/Header/Header';
import Sidebar from '../layouts/Sidebar/Sidebar';
import userProfile from '../assets/img/profiles/profile/User-Profile-PNG-Image.png';

import './userProfile.css';

function UserProfile() {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    contactNo: '',
    category: '',
    class: '',
  });

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://digitaledupark.pleximus.co.in/api/edu/profile');
        const data = response.data;
        setProfileData({
          name: data.name,
          email: data.email,
          contactNo: data.contactNo,
          category: data.category,
          class: data.class,
        });
      } catch (error) {
        console.error('Error fetching the profile data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <div className="user-profile-main-container">
        <div className="user-profile-container">
          <h1>User Profile</h1>
          <img src={userProfile} alt="User Profile" className="user-profile-img" />
        </div>
        <div className="user-profile-details-container">
          <p><strong>Name</strong>: {profileData.name}</p>
          <p><strong>Email</strong>: {profileData.email}</p>
          <p><strong>Contact No</strong>: {profileData.contactNo}</p>
          <p><strong>Category</strong>: {profileData.category}</p>
          <p><strong>Class</strong>: {profileData.class}</p>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
