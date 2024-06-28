import React, { useState } from 'react';
import Header from '../../src/components/Header';
import ProductsGrid from '../../src/components/ProductGrid';
import Footer from '../../src/components/Footer';
import { products } from '../data'; // Ensure the path matches your data file
import 'bootstrap/dist/css/bootstrap.min.css';

function LandingPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on the search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} />
      <ProductsGrid products={filteredProducts} />
      <Footer />
    </div>
  );
}

export default LandingPage;
