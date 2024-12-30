import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          {/* <img src="logo.png" alt="Honda Logo" className="h-10" /> */}
        </div>
        {/* Links */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-400">Giới thiệu</a>
          <a href="#" className="hover:text-gray-400">Sản phẩm</a>
          <a href="#" className="hover:text-gray-400">Dịch vụ</a>
          <a href="#" className="hover:text-gray-400">Liên hệ</a>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="bg-gray-700 text-center py-4 mt-6">
        <p className="text-sm">&copy; 2024 Honda Vietnam. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  );
};

export default Footer;
