import { useDeno } from "aleph/react";
import React from "react";
import Logo from "~/components/logo.tsx";
import useCounter from "~/lib/useCounter.ts";
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
  const [count, isSyncing, increase, decrease] = useCounter();
  const version = useDeno(() => Deno.version.deno);
  const articles = useDeno(async () => {
    return await microcmsClient.get<Post>({
      endpoint: "works",
      queries: { limit: 99 },
    });
  });
  return (
    <div className="page">
      <section>
        {articles.contents.map((content) => {
          return (
            <React.Fragment key={content.id}>
              <p>{content.productTitle}</p>
              <p>{content.productData}</p>
              <img src={content.productImage} height="300px"></img>
              <p>{content.productUrl}</p>
            </React.Fragment>
          );
        })}
      </section>
    </div>
  );
}
