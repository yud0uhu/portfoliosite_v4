import React from "react";

export default function Header() {
  return (
    <>
      <ul className="grid grid-flow-col text-center border-b border-gray-200 text-gray-500">
        <li>
          <a
            href="/"
            className="flex justify-center border-b-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4"
          >
            Top
          </a>
        </li>
        <li>
          <a
            href="/works"
            className="flex justify-center border-b-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4"
          >
            Works
          </a>
        </li>
        <li>
          <a
            href="/works/slide"
            className="flex justify-center border-b-4 border-transparent hover:text-indigo-600 hover:border-indigo-600 py-4"
          >
            Sliede
          </a>
        </li>
      </ul>
    </>
  );
}
