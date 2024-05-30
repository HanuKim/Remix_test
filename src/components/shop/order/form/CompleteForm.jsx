import { Button } from "@/components/ui/button";
import React, { use, useEffect, useState } from "react";
import Confetti from "./piece/Confetti";
import JSConfetti from "js-confetti";
const CompleteForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const jsConfetti = new JSConfetti();

  useEffect(() => {
    jsConfetti.addConfetti({
      confettiColors: [
        "#ff0a54",
        "#ff477e",
        "#ff7096",
        "#ff85a1",
        "#fbb1bd",
        "#f9bec7",
      ],
      confettiRadius: 5,
      confettiNumber: 500,
    });
  }, []);

  return (
    <div>
      <Confetti />
      <div className="flex flex-col items-center justify-center gap-5 mt-[100px] mb-[100px]">
        <h1 className="text-2xl font-bold">주문이 완료되었습니다!</h1>
        <h2 className="text-lg">주문이 완료되었습니다!</h2>
      </div>
    </div>
  );
};

export default CompleteForm;
