import Image from "next/image";
import React, { useState } from "react";

interface VersionDetailProps {
  id: string;
  label: string;
  colors: {
    label: string;
    buttonStyles: string;
    images: ImageData[];
  }[];
}

const VersionDetail: React.FC<VersionDetailProps> = (data) => {
  const [selectedColor, setSelectedColor] = useState(data?.colors[0]);

  return (
    <div className="flex justify-between p-5 w-full bg-gradient-to-r from-slate-300 to-slate-500">
      <div className="w-1/3 p-10 items-center">
        <h1 className="text-red-500 font-bold text-2xl mb-4">Giá & màu sắc</h1>

        <div className="flex gap-4 mb-5">
          {data.colors.map((colorVersionn, index) => (
            <div key={index}>
              <div
                className={`flex flex-col items-center ${
                  selectedColor.label === colorVersionn.label
                    ? "text-red-500 border-b-2 border-red-500"
                    : ""
                }`}
              >
                <button
                  className={`h-10 w-20 ${
                    colorVersionn.buttonStyles && colorVersionn.buttonStyles
                      ? colorVersionn.buttonStyles
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedColor(colorVersionn)}
                ></button>

                <span className="mt-2 text-sm text-gray-700">
                  {colorVersionn.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-gray-700">
          <p className="text-sm font-medium">Giá bán lẻ đề xuất</p>
          <h2 className="text-2xl font-bold text-black">
            152.690.000 <span className="text-gray-500">VNĐ</span>
          </h2>
        </div>
      </div>

      <div className="w-2/3 flex flex-col items-center justify-center p-4">
        <Image src={selectedColor.images[0] ?? ''} alt="ok" width={600} height={350} />
        <p className="mt-4 text-lg text-gray-800">Xoay 360</p>
      </div>
    </div>
  );
};

export default VersionDetail;
