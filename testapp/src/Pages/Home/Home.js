import React from 'react'
import CampanyList from './CampanyList';
import HomeSlider from './HomeSlider';
import CampanyCard from  "./CampanyCard"
import BottomNavbar from '../../Components/BottomNavbar/BottomNavbar';
import { Card } from '@mui/material';

function Home() {
  return (
    <div>
      <HomeSlider />
      <CampanyList />
      <CampanyCard />
        <BottomNavbar />
    </div>
  );
}

export default Home