"use client";

import { INavigateItem } from "@/constants/naviagte-menus";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

function MobileNavButton({ data }: { data: INavigateItem }) {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <button
      onClick={() => {
        setOpen(!isOpen);
      }}
      className="w-full"
    >
      <div>
      <div className="flex w-full justify-between p-2">
        <p>{data.label}</p>
        <FaChevronDown className={isOpen ? "rotate-90" : ""} />
        
        </div>
        {isOpen && (
          <ul className="text-left text-black text-lg p-2 divide-y-[1px] divide-black">
            {data?.children?.map((child) => (
              <li key={child.id}>
                <Link href={child.path ?? "/"}>{child.label}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </button>
  );
}

export default MobileNavButton;
