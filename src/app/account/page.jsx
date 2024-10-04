'use client'
import ParticiCard from '@/components/ParticiCard';

import Sidebar from '@/components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from '../signup/page';
 

export default function AccountPage() {
  return (
    <>
    
    <Sidebar/>
     <div className='text-center justify-center'>
      <a href='/signup'>Sign Up</a>
       <ParticiCard/>
     </div>
    
    </>


  )
}

