import { useDeno } from "aleph/react";
import React from "react";
import Logo from "~/components/logo.tsx";
import useCounter from "~/lib/useCounter.ts";

export default function Home() {
  const [count, isSyncing, increase, decrease] = useCounter();
  const version = useDeno(() => Deno.version.deno);

  return (
    <div className="page">
      <head>
        <title>construction site</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <p className="logo">
        <Logo />
      </p>
      <div class="text-black dark:text-white">aaa</div>
      <p className="copyinfo">Built by Aleph.js in Deno {version}</p>
    </div>
  );
}
