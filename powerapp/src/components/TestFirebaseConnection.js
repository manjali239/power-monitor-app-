// src/components/TestFirebaseConnection.js
import React, { useEffect } from 'react';
import { auth } from '../firebase'; // Adjust the path to your firebase.js

const TestFirebaseConnection = () => {
  useEffect(() => {
    // Check current user (it will be null if no user is logged in)
    const user = auth.currentUser;
    if (user) {
      console.log('Firebase is connected. Current user:', user);
    } else {
      console.log('Firebase is connected, but no user is signed in.');
    }
  }, []);

  return (
    <div>
      <h1>Firebase Connection Test</h1>
    </div>
  );
};

export default TestFirebaseConnection;
