import React from "react";
export default function Top() {
  return (
    <div className="py-8 px-8 max-w-md mx-auto space-y-6">
      <div className="text-center space-y-2 sm:text-center">
        <div className="space-y-0.1">
          <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-black">
            建設予定地
          </h1>
          <p
            className="block mx-auto h-24 "
            className="text-gray-500 font-medium"
          >
            About Me
          </p>
          <img src="/icon.svg" className="block mx-auto h-24 " />
        </div>
        <a
          href="https://github.com/yud0uhu"
          className="inline-block px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/denham95173179"
          className="inline-block px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent"
        >
          Twitter
        </a>
        <a
          href="https://hackteck.hatenablog.com"
          className="inline-block px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent"
        >
          はてなブログ
        </a>
        <a
          href="https://zenn.dev/denham/scraps"
          className="inline-block px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent"
        >
          Zenn
        </a>
      </div>
    </div>
  );
}
