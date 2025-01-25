'use client'
import { useState } from 'react';

export default function CarShowcase() {
  const [selectedCar, setSelectedCar] = useState('mercedes'); // Mặc định hiển thị Mercedes

  // Data các dòng xe
  const cars = {
    mercedes: {
      design: {
        height: "400px",
        title: "MERCEDES-BENZ S450 LUXURY",
        image: "/images/s450.jpg",
        content: "Thiết kế sang trọng đẳng cấp với lưới tản nhiệt Digital Light, mâm xe 20-inch đa chấu, nội thất da Nappa cao cấp"
      },
      specs: {
        height: "300px",
        details: [
          { label: "Động cơ", value: "3.0L I6 Turbo" },
          { label: "Công suất", value: "367 hp" },
          { label: "Mô-men xoắn", value: "500 Nm" },
          { label: "Tăng tốc 0-100 km/h", value: "5.1 giây" }
        ]
      },
      price: {
        height: "200px",
        content: "5.199.000.000đ",
        installment: "Trả góp từ 75.000.000đ/tháng"
      },
      promotion: {
        height: "250px",
        offers: [
          "Tặng gói bảo dưỡng 3 năm",
          "Tặng bảo hiểm thân vỏ 2 năm",
          "Hỗ trợ 50% phí trước bạ",
          "Tặng phụ kiện chính hãng"
        ]
      }
    },
    camry: {
      design: {
        height: "400px",
        title: "TOYOTA CAMRY 2.5Q",
        image: "/images/camry.jpg",
        content: "Thiết kế thể thao hiện đại với lưới tản nhiệt hình thang mạ chrome, đèn LED ma trận, mâm xe 18-inch, nội thất da cao cấp"
      },
      specs: {
        height: "300px",
        details: [
          { label: "Động cơ", value: "2.5L Dynamic Force" },
          { label: "Công suất", value: "209 hp" },
          { label: "Mô-men xoắn", value: "253 Nm" },
          { label: "Tăng tốc 0-100 km/h", value: "8.3 giây" }
        ]
      },
      price: {
        height: "200px",
        content: "1.405.000.000đ",
        installment: "Trả góp từ 25.000.000đ/tháng"
      },
      promotion: {
        height: "250px",
        offers: [
          "Tặng gói bảo dưỡng 2 năm",
          "Tặng bảo hiểm thân vỏ 1 năm",
          "Hỗ trợ 30% phí trước bạ",
          "Tặng phim cách nhiệt cao cấp"
        ]
      }
    }
  };

  const car = cars[selectedCar];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Car Selector */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setSelectedCar('mercedes')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              selectedCar === 'mercedes'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            Mercedes S450
          </button>
          <button
            onClick={() => setSelectedCar('camry')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              selectedCar === 'camry'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            Toyota Camry
          </button>
        </div>

        {/* Header */}
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            {car.design.title}
          </span>
        </h1>

        {/* Thiết kế và Hình ảnh */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="relative h-[500px]">
            <img 
              src={car.design.image} 
              alt={car.design.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Thiết kế đẳng cấp</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{car.design.content}</p>
          </div>
        </div>

        {/* Grid Layout cho Thông số và Giá */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Thông số kỹ thuật */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Thông số kỹ thuật</h2>
            <div className="space-y-4">
              {car.specs.details.map((spec, index) => (
                <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="font-medium text-gray-700">{spec.label}</span>
                  <span className="text-blue-600 font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Giá bán */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Giá bán</h2>
            <div className="text-4xl font-bold text-red-600 mb-4">
              {car.price.content}
            </div>
            <p className="text-lg text-gray-600 bg-gray-50 p-4 rounded-lg">
              {car.price.installment}
            </p>
          </div>
        </div>

        {/* Khuyến mãi */}
        {car.promotion.offers && (
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Ưu đãi đặc biệt</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {car.promotion.offers.map((offer, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 bg-blue-50 p-4 rounded-xl"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium">{offer}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Đăng ký lái thử
          </button>
        </div>
      </div>
    </div>
  );
}