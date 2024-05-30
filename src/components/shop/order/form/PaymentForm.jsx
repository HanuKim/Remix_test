import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SimplePayment from "./piece/SimplePayment";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import AccountTransfer from "./piece/AccountTransfer";

const PaymentForm = () => {
  const [selected, setSelected] = React.useState("");

  const convertPaymentMethodToKorean = (method) => {
    switch (method) {
      case "account-transfer":
        return "계좌이체";
      case "card":
        return "카드";
      case "simple-payment":
        return "간편결제";
      default:
        return "";
    }
  };
  return (
    <Card className="w-[350px] h-[auto] mt-5">
      <CardHeader>
        <CardTitle>결제 수단 선택</CardTitle>
        <CardDescription>결제하실 수단을 선택해주세요.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col space-y-1.5 mb-4">
            <Label className="mb-2" htmlFor="payment-method">
              결제 방법 선택
            </Label>
            <Select onValueChange={(value) => setSelected(value)}>
              <SelectTrigger id="payment-method">
                <SelectValue placeholder="선택" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="account-transfer">계좌이체</SelectItem>
                <SelectItem value="card">카드</SelectItem>
                <SelectItem value="simple-payment">간편결제</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {selected === "account-transfer" && <AccountTransfer />}
          {selected === "simple-payment" && <SimplePayment />}
          {/* <div className="grid w-full items-center gap-4 ">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">{selected}</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
          </div> */}
        </form>
      </CardContent>
      <CardFooter className="flex justify-start">
        <Popover>
          <PopoverTrigger className="text-[11px]">
            교환/환불 규정
          </PopoverTrigger>
          <PopoverContent className="overflow-auto h-[300px] text-[12px]">
            <p>
              제품 불량 및 오배송 제품의 불량, 파손 또는 오배송의 경우, 배송
              완료 후 7일 이내에 고객센터로 연락주시면 무료로 교환 및 환불이
              가능합니다.
            </p>
            <p>
              제품의 상태를 확인할 수 있는 사진을 함께 보내주시면 빠른 처리가
              가능합니다.
            </p>

            <p>
              단순 변심 고객님의 단순 변심에 의한 교환 및 환불은 제품 수령 후
              7일 이내에 가능하며, 왕복 배송비는 고객님 부담입니다.
            </p>
            <p>
              제품 및 포장 상태가 처음과 동일한 경우에만 가능합니다. (제품 훼손,
              포장 파손 시 교환 및 환불 불가)
            </p>
            <p>
              다음의 경우 교환 및 환불 불가: 사용 흔적이 있는 경우 제품 및
              포장이 훼손된 경우 세일 제품 및 특가 상품 맞춤 제작 상품 배송 완료
              후 7일이 경과한 경우
            </p>
            <p>
              교환 및 환불 절차 신청 방법: 고객센터(이메일 또는 전화)를 통해
              교환 및 환불 신청을 접수합니다. 제품 불량 및 오배송의 경우, 제품
              상태를 확인할 수 있는 사진을 함께 보내주셔야 합니다. 반품 및 교환
              배송비 제품 불량 및 오배송: 판매자 부담 단순 변심: 고객 부담
            </p>
          </PopoverContent>
        </Popover>
        <span className="text-[11px] ml-2 mr-2">|</span>
        <Popover>
          <PopoverTrigger className="text-[11px]">
            무이자 할부 안내
          </PopoverTrigger>
          <PopoverContent className="overflow-auto h-[300px]">
            <Image src="/images/interest-free.jpg" width={300} height={100} />
          </PopoverContent>
        </Popover>
      </CardFooter>
    </Card>
  );
};

export default PaymentForm;
