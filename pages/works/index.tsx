import { useDeno } from "aleph/react";
import React from "react";
import { microcmsClient } from "../../lib/microcmsClient.ts";

export type Post = {
  contents: [
    {
      productTitle: string;
      productData: Date;
      githubUrl: string;
      productDatail: string;
      productComposition: string;
      productImage: string;
      productUrl: string;
    }
  ];
};

export default function Works() {
  const version = useDeno(() => Deno.version.deno);
  const articles = useDeno(async () => {
    return await microcmsClient.get<Post>({
      endpoint: "works",
      queries: { limit: 99 },
    });
  });
  return (
    <>
      <div className="grid gap-x-8 gap-y-4 grid-cols-3">
        {articles.contents.map((content) => {
          return (
            <React.Fragment key={content.id}>
              <div className="py-8 px-8 max-w-md mx-auto bg-white shadow-md space-y-6 sm:(py-4 space-y-0 space-x-6)">
                <img
                  src={content.productImage.url}
                  className="box-border p-4 rounded-xl brightness-75"
                />
                <div className="text-center space-y-2 sm:text-left">
                  <div className="space-y-0.1">
                    <p className="text-lg text-black font-semibold">
                      {content.productTitle}
                    </p>
                    <p className="text-gray-500 font-medium">
                      {content.productData}
                    </p>
                    <p className="text-gray-500 font-medium">
                      {content.productComposition}
                    </p>
                    <p>{content.productDatail}</p>
                  </div>
                  <a
                    href={content.productUrl}
                    className="inline-block px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent"
                  >
                    URL
                  </a>
                  <a
                    href={content.githubUrl}
                    className="inline-block px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
