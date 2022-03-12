import { useDeno } from "aleph/react";
import React from "react";
import { useRouter } from "https://deno.land/x/aleph/framework/react/mod.ts";
import Header from "~/components/Header.tsx";
import Top from "~/components/Top.tsx";
export default function Home() {
  const version = useDeno(() => Deno.version.deno);
  const {
    basePath, // string, should be '/'
    locale, // string, should be 'en'
    defaultLocale, // string, should be 'en'
    locales, // string[], should be ['en']
    pathname, // string, should be '/post/hello-world'
    routePath, // string, should be '/post/[slug]'
    params, // object, should be {slug: 'hello-world'}
    query, // URLSearchParams, `query.get('theme')` should be 'dark'
  } = useRouter();
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <Header />
        <head>
          <title>建設予定地</title>
        </head>
        <Top />
        
      </div>
    </div>
  );
}
