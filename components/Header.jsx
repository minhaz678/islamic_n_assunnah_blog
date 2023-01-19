import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import Dark from "../components/Dark";

import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8 w-full">
      <div className="border-b w-full inline-block border-purple-500 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl hover:text-blue-600">
              AsSunnah Blog
            </span>
          </Link>
        </div>
        <div className="float-right ml-4">
          <Dark />
        </div>
        <div className="md:float-left md:contents">
          {/* <Link href={`/contact`}>
          <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
          Contact Us
          </span>
          </Link> */}
          <Link href={`/about`}>
          <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer hover:text-purple-600">
            About
          </span>
          </Link>
          <div className="hidden md:float-left md:contents">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/category/${cat.slug}`}>
              <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer hover:text-purple-600">
                {cat.name}
              </span>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
