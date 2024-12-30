import Link from 'next/link';
import React from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  link: string;
  type: string;
  color: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Link href={product.link} className="block p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow">
      <div className="nameAndColor mb-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
      </div>

      <div className="mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md"
        />
      </div>

      <div className="title mt-2">
        <div className="new-product-tag">
          <img
            src="https://www.honda.com.vn/images/xe-may/label-new-v1.png?v=1"
            alt="New Product"
            className="logo-new-product w-20 h-auto"
          />
        </div>
        <div className="price mt-2 text-lg">
          Giá từ: <span className="font-bold">{product.price}</span> VNĐ
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
