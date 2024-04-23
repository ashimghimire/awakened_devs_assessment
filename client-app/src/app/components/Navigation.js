/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";

function Navigation({ menuItems }) {
    const router=useRouter();
  return (
    <nav className="flex flex-row">
      <div className="brand flex-auto basis-1/3 flex flex-row leading-10 gap-2 mt-3">
        <img
          src="/assets/images/icons-map1.png"
          className="leading-4 h-8 w-8"
          alt="site-icon"
        />
        <p className="text-white leading-8 text-lg/[24px] font-[600]">
          Travellian
        </p>
      </div>
      <div className="menu flex-auto basis-2/3 w-12 align-middle justify-center">
        <ul className="list-none main-nav">
          {menuItems &&
            menuItems.map((menu) => {
              return (
                <li key={menu} className="inline-block m-5">
                  <Link className={menu == "Home" ? "active" : ""} href={"#"}>
                    {menu}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="far-end-actions mt-3">
        <button className="bg-orange-600 text-white px-3 py-2 rounded" onClick={()=>{router.push("/ssr")}}>
          SSR
        </button>
        <button className="bg-black text-white px-3 py-2 rounded hidden">
          =
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
