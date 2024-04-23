"use client"
import Link from 'next/link';
import Header from './containers/Header';
import Slideshow from './containers/Slideshow';
import ProfileBooking from './containers/ProfileBooking';
import PopularDestination from './containers/PopularDestination';
import SpecialOffers from './containers/SpecialOffers';
import Footer from './containers/Footer';

export default function Home() {
  return (
    <div id="wrapper">
    <Header/>
    <Slideshow/>
    <ProfileBooking/>
    <PopularDestination/>
    <SpecialOffers/>
    <Footer/>
  </div>
  );
}
