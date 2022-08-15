import React from 'react'

import Header from "../../section/Header";
import Footer from "../../section/Footer";
import ProductHero from "../../section/ProductHero";
import ProductSearch from '../../section/ProductSearch';
import Loader from '../../section/Loader';
import JobSearch from '../../section/JobSearch';

function HomeComponent() {
  return (
    <div>
      {/* <Loader /> */}
      <Header />
      <ProductHero />
      <ProductSearch />
      <JobSearch/>
      {/* <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />  */}
      <Footer />
    </div>
  )
}

export default HomeComponent;
