// src/components/Home.js
import React, { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

const Home = () => {
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("User ID:", user.uid);
            } else {
                console.log("User is logged out");
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            <h1>Welcome to Home</h1>
        </div>
    );
};

export default Home;
