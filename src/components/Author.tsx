import React from "react";
import Image from "next/image";

export default function Author() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
      <div className="flex items-center animation-fadeIn">
        <Image
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-orange-800"
          src={require("../../public/images/auther.jpg")}
          alt="auther"
        />

        <div>
          <h3 className="text-xl font-bold ">Kiran Ahmed </h3>
          <p className="text-slate-500">UI/UX Developer</p>
          <div className="mt-4 flex space-x-3">
            <a
              href="https://www.linkedin.com/in/kiran-ahmedraza-1a952127b/"
              className="px-4 py-2 text-white bg-orange-800 rounded-md hover:bg-orange-500"
            >
              Linkdin
            </a>
            <a
              href="https://github.com/coading-git-hub"
              className="px-4 py-2 text-white bg-orange-800 rounded-md hover:bg-orange-500"
            >
              Github
            </a>
          </div>
        </div>
      </div>

      <p></p>
    </div>
  );
}
