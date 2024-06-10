import { Button } from "@/components/ui/button";
import React from "react";

const SimplePayment = () => {
  const [selectedSimplePayment, setSelectedSimplePayment] = React.useState("");
  return (
    <div>
      <Button
        className="bg-green-600 w-full"
        onClick={() => setSelectedSimplePayment("naver")}
        type="button"
      >
        NAVER
      </Button>
      <Button
        className="bg-yellow-400 w-full mt-2"
        onClick={() => setSelectedSimplePayment("kakao")}
        type="button"
      >
        KAKAO
      </Button>
      <Button
        className="bg-blue-500 w-full mt-2"
        onClick={() => setSelectedSimplePayment("")}
        type="button"
      >
        TOSS
      </Button>
    </div>
  );
};

export default SimplePayment;
