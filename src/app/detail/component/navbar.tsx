"use client";
import Link from "next/link";
import React, { useState } from "react";

const DropdownWithLinks = () => {
  const [selectedOption, setSelectedOption] = useState("section1");

  console.log(selectedOption);

  return (
    <div className="space-y-4 h-16 flex justify-between">
      {/* Dropdown */}
      <div className="relative items-center p-3 ">
        <select
          className="block w-[230px] bg-white text-start border border-gray-300 rounded h-12 px-2 text-gray-700 cursor-pointer shadow-sm "
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
          }}
        >
          <option value="section1">Phiên bản Thể Thao</option>
          <option value="section2">Phiên bản Đặc Biệt</option>
          <option value="section3">Phiên bản Tiêu Chuẩn</option>
        </select>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap items-center gap-2 p-3 text-base">
        <Link
          href="gia-va-mau-sac"
          className="text-black hover:underline active"
        >
          Giá &amp; Màu sắc
        </Link>
        <Link href="thiet-ke" className="text-black hover:underline">
          Thiết kế
        </Link>
        <Link href="dong-co" className="text-black hover:underline">
          Động cơ
        </Link>
        <Link href="cong-nghe" className="text-black hover:underline">
          Công nghệ
        </Link>
        <Link href="tien-ich-va-an-toan" className="text-black hover:underline">
          Tiện ích &amp; An toàn
        </Link>
        <Link href="thu-vien-anh" className="text-black hover:underline">
          Thư viện ảnh
        </Link>
        <Link href="lich-su-doi-xe" className="text-black hover:underline">
          Lịch sử đời xe
        </Link>
      </div>
    </div>
  );
};

export default DropdownWithLinks;
