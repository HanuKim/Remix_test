import { useMachine } from "@xstate/react";
import React from "react";
import { assign, createMachine } from "xstate";
import { Button } from "@/components/ui/button";
import PaymentForm from "./form/PaymentForm";
import OrderInfoForm from "./form/OrderInfoForm";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import CompleteForm from "./form/CompleteForm";

const stepMachine = createMachine(
  {
    id: "step",
    initial: "order",
    context: {
      step: "order",
    },
    states: {
      order: {
        on: {
          NEXT: {
            target: "delivery",
            actions: assign({ step: "delivery" }),
          },
        },
      },
      delivery: {
        on: {
          NEXT: {
            target: "payment",
            actions: assign({ step: "payment" }),
          },
          PREV: {
            target: "order",
            actions: assign({ step: "order" }),
          },
        },
      },
      payment: {
        on: {
          NEXT: {
            target: "complete",
            actions: assign({ step: "complete" }),
          },
          PREV: {
            target: "delivery",
            actions: assign({ step: "delivery" }),
          },
        },
      },
      complete: {
        on: {
          PREV: {
            target: "payment",
            actions: assign({ step: "payment" }),
          },
        },
      },
    },
  },
  {
    actions: {
      changeStep: (context, event) => {
        context.step = event.target;
      },
    },
  }
);

const Step = () => {
  const process = ["order", "delivery", "payment", "complete"];

  const [state, send] = useMachine(stepMachine);
  const { toast } = useToast();
  const statusText = (step) => {
    if (step === state.value) {
      return "bg-blue-500 text-white";
    } else {
      return "bg-gray-300 text-gray-900";
    }
  };

  const convertStepToKorean = (step) => {
    switch (step) {
      case "order":
        return "주문서 작성";
      case "payment":
        return "결제 정보 입력";
      case "delivery":
        return "배송지 정보 입력";
      case "complete":
        return "주문 완료";
      default:
        return "주문서 작성";
    }
  };
  console.log(state.value);

  const handleNextClick = () => {
    if (state.value === "payment") {
      toast({
        title: "결제가 완료되었습니다.",
        description: "주문해주셔서 감사합니다. 빠르게 배송해 드릴게요!🙂",
        action: <ToastAction altText="주문 확인">주문 확인</ToastAction>,
      });
      send({ type: "NEXT" });
    } else {
      send({ type: "NEXT" });
    }
  };
  return (
    <div className="flex flex-col align-middle">
      <h1>현재 단계: {convertStepToKorean(state.value)}</h1>
      <div className="flex gap-2">
        {process.map((step, index) => (
          <div
            key={index}
            className={`px-4 py-2 rounded-md ${statusText(step)}`}
          >
            {step}
          </div>
        ))}
      </div>

      {state.value === "order" && <OrderInfoForm />}
      {state.value === "payment" && <PaymentForm />}
      {state.value === "complete" && <CompleteForm />}

      <div className="mt-5">
        <Button
          className="bg-white text-zinc-800 border-solid border border-gray-200"
          onClick={() => send({ type: "PREV" })}
          disabled={state.value === "order"}
        >
          Prev
        </Button>
        <Button
          className="ml-2"
          onClick={handleNextClick}
          disabled={state.value === "complete"}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step;
