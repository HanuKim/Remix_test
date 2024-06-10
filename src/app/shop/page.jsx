"use client";
import Reserve from "@/components/reserve/reserve";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import User from "@/components/user/user";

const Shop = () => {
  return (
    <>
      <Reserve />
      <User />
    </>
  );
};

export default Shop;
