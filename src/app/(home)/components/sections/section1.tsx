import React from 'react';
import ProductCard from '@/app/(home)/components/productCard'; // Đảm bảo import đúng ProductCard

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  link: string;
  type: string;
  color: string;
}

const Section1: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'SH350i',
      price: '151.190.000',
      image: 'https://cdn.honda.com.vn/motorbikes/November2024/sYTCNfgI5E0JUJ8BCTQ3.png',
      link: 'http://localhost:3001/detail/sh',
      type: 'Xe tay ga',
      color: 'Đỏ'
    },
    {
      id: 2,
      name: 'CB500X',
      price: '135.000.000',
      image: 'https://cdn.honda.com.vn/motorbikes/November2024/sYTCNfgI5E0JUJ8BCTQ3.png',
      link: '/xe-may/san-pham/cb500x?category=2',
      type: 'Xe thể thao',
      color: 'Xanh'
    },
    {
      id: 3,
      name: 'Wave Alpha',
      price: '20.000.000',
      image: 'https://cdn.honda.com.vn/motorbikes/November2024/sYTCNfgI5E0JUJ8BCTQ3.png',
      link: '/xe-may/san-pham/wave-alpha?category=2',
      type: 'Xe số',
      color: 'Trắng'
    },
    // Các sản phẩm khác...
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Section1;
