import React from "react";
import Image from "next/image";

import { grpahCMSImageLoader } from "../util";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-sky-400">
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="absolute left-0 right-0 -top-14 align-middle"
      >
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt={author.name}
          height={100}
          width={100}
          className="align-middle rounded-full transition delay-400 ease-in-out hover:scale-110 duration-400"
          src={author.photo.url}
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold hover:text-cyan-900">{author.name}</h3>
      <p className="text-gray-600 text-lg hover:text-white">{author.bio}</p>
    </div>
  );
};

export default Author;
