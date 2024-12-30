"use client";
import React, { useState } from "react";
import VersionDetail from "../detail/component/version-detail";
import shA1 from "../../assets/image/sh-a1.png";
import shB1 from "../../assets/image/sh-b1.png";
import shC1 from "../../assets/image/sh-c1.png";

const motorDatas = [
  {
    id: "thethao",
    label: "Phiên bản thể thao",
    colors: [
      {
        label: "Xanh xám",
        buttonStyles: '"bg-gradient-to-l from-black to-green-500"',
        images: [shA1],
      },
      {
        label: "Xanh",
        buttonStyles: '"bg-gradient-to-r from-slate-400 to-slate-700"',
        images: [shB1],
      },
      {
        label: "Xanha",
        buttonStyles: '"bg-gradient-to-r from-slate-400 to-slate-700"',
        images: [shC1],
      },
    ],
  },
  {
    id: "thethaao",
    label: "Phiên bản thể thao",
    colors: [
      {
        label: "Xanh xám",
        buttonStyles: '"bg-gradient-to-l from-black to-green-500"',
        images: [shA1],
      },
      {
        label: "Xanh",
        buttonStyles: '"bg-gradient-to-r from-slate-400 to-slate-700"',
        images: [shB1],
      },
      {
        label: "Xanha",
        buttonStyles: '"bg-gradient-to-r from-slate-400 to-slate-700"',
        images: [shC1],
      },
    ],
  },
];

const MotorDetail: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(motorDatas[0]);

  return (
    <div>
      <div>
        <select
          className="block w-[230px] bg-white text-start border border-gray-300 rounded h-12 px-2 text-gray-700 cursor-pointer shadow-sm "
          value={selectedOption.label}
          onChange={(e) => {
            setSelectedOption(motorDatas[e.target.value.toString()]);
          }}
        >
          {motorDatas.map((version) => (
            <option value={version.id} key={version.id}>
              {version.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        {selectedOption && <VersionDetail data={selectedOption} />}
      </div>
    </div>
  );
};

export default MotorDetail;
