import React from 'react'

import Header from "../../section/Header";
import Footer from "../../section/Footer";
import ProductHero from "../../section/ProductHero";
import ProductSearch from '../../section/ProductSearch';

function HomeComponent() {
  return (
    <div>
      <Header />
      <ProductHero />
      <ProductSearch />
      {/* <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero /> */}
      <Footer />
    </div>
  )
}

export default HomeComponent;
