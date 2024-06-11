"use client";
import Reserve from "@/components/reserve/reserve";
import React, { useEffect } from "react";
import User from "@/components/user/user";
import { useServerInsertedHTML } from "next/navigation";
import { useSyncState } from "../hooks/utils/useSyncState";

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const Shop = () => {
  const isServer = typeof window === "undefined";
  const initialText = generateRandomString(10);

  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `window.initialText = "${initialText}";`,
        }}
      />
    );
  });

  const [text, setText] = useSyncState(generateRandomString(10), "initialText");

  return (
    <>
      <Reserve />
      <User />
      <p>{text}</p>
      <button onClick={() => setText(generateRandomString(10))}>
        Generate Random String
      </button>
    </>
  );
};

export default Shop;
