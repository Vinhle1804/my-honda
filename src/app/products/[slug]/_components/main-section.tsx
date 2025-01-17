"use client";

import React, { useState } from "react";
import { IProductVersion, PRODUCTS } from "../../../../data/products";
import Image from "next/image";
import Detail1 from "./detail1";

import Detail3 from "./detail3";
import Detail4 from "./detail4";
import Detail5 from "./detail5";
import Detail6 from "./detail6";
import Detail7 from "./detail7";
import Detail8 from "./detail8";

function MainDetailPage({ slug }: { slug: string }) {
  const product = PRODUCTS.filter((product) => product.slug === slug)[0];
  const [selectedVersion, setSelectedVersion] = useState<{
    title: string;
    data: IProductVersion;
  }>({
    title: product.versions[0].title,
    data: product.versions[0],
  });

  const [versionOfColor, setVersionOfColor] = useState<{
    id: string | number;
    color: string;
    images: string[];
    buttonStyle?: string;
    price: number | string;
  }>(selectedVersion.data.variants[0]);

  // State save color data

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
	<div>
	<div id="menun" className="space-y-4 h-16 w-full flex bg-white fixed items-center ">
  <div className="flex justify-start w-[230px]">
    <select
      className="w-[230px] bg-white text-start border border-gray-300 rounded h-12 px-2 text-gray-700 cursor-pointer shadow-sm"
      value={selectedVersion.title}
      onChange={(event) => {
        const getVerisonData = product.versions.filter(
          (version) => version.title === event.target.value
        )[0];
        setSelectedVersion({
          title: event.target.value,
          data: getVerisonData,
        });
        setVersionOfColor(getVerisonData.variants[0]);
      }}
    >
      {product.versions.map((version) => (
        <option value={version.title} key={version.title}>
          {version.title}
        </option>
      ))}
    </select>
  </div>
  
  <div className="flex space-x-4 w-full justify-end">
    <a onClick={() => scrollToElement("gia")} className="text-black hover:underline active">Giá &amp; Màu sắc</a>
    <a onClick={() => scrollToElement("thiet-ke")} className="text-black hover:underline">Thiết kế</a>
    <a onClick={() => scrollToElement("dong-co")} className="text-black hover:underline">Động cơ</a>
    <a onClick={() => scrollToElement("cong-nghe")} className="text-black hover:underline">Công nghệ</a>
    <a onClick={() => scrollToElement("tien-ich")} className="text-black hover:underline">Tiện ích &amp; An toàn</a>
    <a onClick={() => scrollToElement("thu-vien-anh")} className="text-black hover:underline">Thư viện ảnh</a>
    <a onClick={() => scrollToElement("lich-su-doi-xe")} className="text-black hover:underline">Lịch sử đời xe</a>
  </div>
    </div>


<div className="h-[700px] w-full bg-slate-500" id="page-1"><Detail1/></div>
      
	  <div id="gia" className="flex justify-between p-5 w-full bg-gradient-to-r from-slate-300 to-slate-500">
        <div className="w-1/3 p-10 items-center">
          <p className="uppercase font-bold">Giá & Màu sắc</p>
          <div className="flex items-center justify-start gap-3">
            {selectedVersion.data.variants.map((variant) => {
              return (
				<div className="flex flex-col" key={variant.id}>
				<button
				  onClick={() => setVersionOfColor(variant)}
				  className={`h-10 w-20 px-3 py-1.5 rounded-lg border ${variant.buttonStyle}`}
				></button>
				<span
				  className={`mt-2 text-sm text-center text-gray-700 ${
					versionOfColor === variant ? "underline underline-offset-4 decoration-red-500" : ""
				  }`}
				>
				  {variant.color}
				</span>
			  </div>
			  
              );
            })}
          </div>

          <div className="text-gray-700">
            <p className="text-lg font-medium">Giá bán lẻ đề xuất</p>
            <h2 className="text-2xl font-bold text-black">
              {versionOfColor.price.toLocaleString()}{" "}
              <span className="text-gray-500">VNĐ</span>
            </h2>
          </div>
        </div>
        <div className="w-2/3 flex flex-col items-center justify-center p-4">
          <Image
            width={600}
            height={350}
            src={versionOfColor.images[0]}
            alt="test"
          ></Image>
        </div>
      </div>

	  <div className="h-[700px] w-full bg-slate-500" id="thiet-ke"><Detail3/></div>
	  <div className="h-[700px] w-full bg-slate-500" id="dong-co"><Detail4/></div>
	  <div className="h-[700px] w-full bg-slate-500" id="cong-nghe"><Detail5/></div>
	  <div className="h-[700px] w-full bg-slate-500" id="tien-ich"><Detail6/></div>
	  <div className="h-[700px] w-full bg-slate-500" id="thu-vien-anh"><Detail7/></div>
	  <div className="h-[700px] w-full bg-slate-500" id="lich-su-doi-xe"><Detail8/></div>

	
	 
	  </div>
    </>
  );
}

export default MainDetailPage;
