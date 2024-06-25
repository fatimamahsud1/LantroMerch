import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import ProductsGrid from '../components/ProductGrid';

// Dummy products data
const products = [
  { id: 1, name: 'Vintage Leather Bag', price: 'Rs. 5000', image: '/path/to/image.jpg' },
  { id: 2, name: 'Blue Leather Bag', price: 'Rs. 3000', image: '/path/to/image.jpg' },
  { id: 3, name: 'Beige Leather Bag', price: 'Rs. 4500', image: '/path/to/image.jpg' }
];

function LandingPage() {
  return (
    <div>
      <Header />
      <ProductsGrid products={products} />
      <Footer />
    </div>
  );
}

export default LandingPage;
