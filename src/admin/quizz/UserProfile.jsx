import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If using axios
import Header from '../layouts/Header/Header';
import Sidebar from '../layouts/Sidebar/Sidebar';
import userProfile from '../assets/img/profiles/profile/User-Profile-PNG-Image.png';
import { SERVER_URL } from "../../config";
import './userProfile.css';

function toPascalCase(str) {
  return str.replace(/(^\w|_\w)/g, match => match.replace('_', '').toUpperCase());
}

function convertKeysToPascalCase(obj) {
  if (Array.isArray(obj)) {
    return obj.map(v => convertKeysToPascalCase(v));
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce((acc, key) => {
      acc[toPascalCase(key)] = convertKeysToPascalCase(obj[key]);
      return acc;
    }, {});
  }
  return obj;
}

const BASE_URL = SERVER_URL;

function UserProfile() {
  const [profile, setProfile] = useState({
    FullName: '',
    Email: '',
    UserName:'',
    ContactNumber: '',
    Address: '',
    Zipcode: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('User is not authenticated');
      return;
    }

    axios.get(`${BASE_URL}/student-details`, {
      headers: {
        'remember-token': token,
      }
    })
    .then(response => {
    
      if (response.data.status) {
      
        const userData = convertKeysToPascalCase(response.data.data);
        setProfile(userData);
        setError(''); // Clear any previous errors
        console.log(userData)
      }
    })
    .catch(error => {
      console.error('There was an error fetching the data!', error);
      setError('No Data Found.');
    });
  }, []);

  const handleInputChange = (e) => {

    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('User is not authenticated');
        return;
      }
  
      const body = {
        name: profile.FullName,
        email: profile.Email,
        user_name: profile.UserName,
        contact_number: profile.ContactNumber,
        address: profile.Address,
        zipcode: profile.Zipcode,
      };
  
      const response = await axios.post(`${BASE_URL}/profile`, body, {
        headers: {
          'Content-Type': 'application/json',
          'remember-token': token,
        },
      });
      
      console.log(body)
      console.log(response);
      console.log(response.data);
  
      if (response.data.status) {
        alert('Profile updated successfully');
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error('There was an error updating the profile!', error);
      setError('Error updating profile.');
    }
  };
  

  return (
    <>
      <Header />
      <Sidebar />
      <div className="user-profile-main-container">
        <div className="user-profile-container">
          <h1>Profile Details</h1>
          <h3>Dashboard <span>/ Quiz</span></h3>
        </div>
        <div className="user-profile-details-container">
          
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="row">
              <h1 className='user-profile-heading'>Profile Details</h1>
                <div className="d-flex align-items-center col-xl-12">
                  <div className="d-flex flex-column col-xl-5">
                    <label htmlFor="UserName">Username</label>
                    <input
                      type="text"
                      id="UserName"
                      name="UserName"
                      onChange={handleInputChange}
                      value={profile.UserName}
                      placeholder="Enter Username"
                      className="profile-input"
                      disabled
                    />
                  </div>
                  <div className="d-flex flex-column col-xl-5">
                    <label htmlFor="Email">Email</label>
                    <input
                      type="text"
                      id="Email"
                      name="Email"
                      value={profile.Email}
                      onChange={handleInputChange}
                      placeholder="Enter email"
                      className="profile-input"
                      disabled
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center col-xl-12">
                   
                <div className="d-flex flex-column col-xl-5">
                    <label htmlFor="FullName">Full Name</label>
                    <input
                      type="text"
                      id="FullName"
                      name="FullName"
                      value={profile.FullName}
                      onChange={handleInputChange}
                      placeholder="Enter full name"
                      className="profile-input"
                    />
                  </div>

                  <div className="d-flex flex-column col-xl-5">
                    <label htmlFor="ContactNumber">Contact No.</label>
                    <input
                      type="text"
                      id="ContactNumber"
                      name="ContactNumber"
                      value={profile.ContactNumber}
                      onChange={handleInputChange}
                      placeholder="Enter contact number"
                      className="profile-input"
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center col-xl-12">

                <div className="d-flex flex-column col-xl-5">
                    <label htmlFor="Address">Address</label>
                    <input
                      type="text"
                      id="Address"
                      name="Address"
                      value={profile.Address}
                      onChange={handleInputChange}
                      placeholder="Enter address"
                      className="profile-input"
                    />
                  </div>

                  <div className="d-flex flex-column col-xl-5">
                    <label htmlFor="Zipcode">Zipcode</label>
                    <input
                      type="text"
                      id="Zipcode"
                      name="Zipcode"
                      value={profile.Zipcode}
                      onChange={handleInputChange}
                      placeholder="Enter zipcode"
                      className="profile-input"
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center col-xl-12">
                  <button type="submit" className="profile-submit-button">Update Profile</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
