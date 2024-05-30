import { Button } from "@/components/ui/button";
import React from "react";

const SimplePayment = () => {
  return (
    <div>
      <Button className="bg-green-600 w-full">NAVER</Button>
      <Button className="bg-yellow-400 w-full mt-2">KAKAO</Button>
      <Button className="bg-blue-500 w-full mt-2">TOSS</Button>
    </div>
  );
};

export default SimplePayment;
