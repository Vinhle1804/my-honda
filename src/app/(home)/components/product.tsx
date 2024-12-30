"use client";
import React, { useState } from "react";
import All from "./sections/all";
import Section1 from "./sections/section1";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section5 from "./sections/section5";
import Section4 from "./sections/section4";
import BasicTextFields from "@/components/textField";
import { FaFilter } from "react-icons/fa";

const Product: React.FC = () => {
  const [section, setSection] = useState("All");

  return (
    <div className="p-10">
      {/* Danh mục sản phẩm */}

      <div className="divide-y-2 divide-red-500">
        <ul className="flex justify-start gap-5 p-2 cursor-pointer">
          {/* Sử dụng flex để hiển thị ngang */}
          {/* <li className="block py-2" onClick={() => setSection("All")}>
            Tất cả
          </li> */}
          <li
            className={`block py-2 ${section === "All" ? "text-red-500 border-b-2 border-red-500" : ""}`}
            onClick={() => setSection("All")}
          >
            Tất cả
          </li>
          <li className={`block py-2 ${section === "section1" ? "text-red-500 border-b-2 border-red-500" : ""}`}
          onClick={() => setSection("section1")}>
            Xe tay ga
          </li>
          <li className={`block py-2 ${section === "section2" ? "text-red-500 border-b-2 border-red-500" : ""}`}
          onClick={() => setSection("section2")}>
            Xe số
          </li>
          <li className={`block py-2 ${section === "section3" ? "text-red-500 border-b-2 border-red-500" : ""}`}
          onClick={() => setSection("section3")}>
            Xe côn tay
          </li>
          <li className={`block py-2 ${section === "section4" ? "text-red-500 border-b-2 border-red-500" : ""}`}
           onClick={() => setSection("section4")}>
            Xe phân khối lớn
          </li>
          <li className={`block py-2 ${section === "section5" ? "text-red-500 border-b-2 border-red-500" : ""}`} 
          onClick={() => setSection("section5")}>
            Xe điện
          </li>
        </ul>
      </div>

      {/* Filter */}
      <div className="my-5 flex justify-between items-center space-x-4">
  {/* Filter Section */}
  <div className="flex items-center space-x-3">
    <BasicTextFields
      label="Nhập tên loại xe:"
      value=""
      onChange={() => {
        console.log("Change");
      }}
      name="TEXT"
      sx={{
        "& > :not(style)": { m: 0, width: "300px" },
      }}
    />
    <FaFilter className="text-gray-500 border-2 border-red-500 rounded-full p-0 text-5xl" />


    <span className="text-xl text-gray-600">
      Kết quả: <br /> <p className="font-bold text-xl">... sản phẩm</p>
    </span>
  </div>

  {/* Button Section */}
  <div className="flex space-x-4">
    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
      Bảng giá sp
    </button>
    <button className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition-colors">
      So sánh sp
    </button>
  </div>
</div>


      {/* Products */}
      <div>
        <h2 className="text-xl font-medium ">Products</h2>
        {section === "All" && <All />}
        {section === "section1" && <Section1 />}
        {section === "section2" && <Section2 />}
        {section === "section3" && <Section3 />}
        {section === "section4" && <Section4 />}
        {section === "section5" && <Section5 />}
      </div>
    </div>
  );
};

export default Product;
