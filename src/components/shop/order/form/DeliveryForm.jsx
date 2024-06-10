import React, { useState } from "react";
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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DaumPostcodeEmbed, {
  DaumPostcode as DaumPostcodeEm,
} from "react-daum-postcode";
const cart = [
  {
    productName: "buriburi vinyl sticker",
    quantity: 2,
    price: 100,
  },
  {
    productName: "cat's meow village poster",
    quantity: 1,
    price: 50,
  },
  {
    productName: "sea breeze scented candle",
    quantity: 1,
    price: 250,
  },
];

const DeliveryForm = () => {
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };

  const [isAddress, setIsAddress] = useState("");
  const [isZoneCode, setIsZoneCode] = useState();
  const [toggle, setToggle] = useState(false);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setIsZoneCode(data.zonecode);
    setIsAddress(fullAddress);
    setToggle(false);
  };
  const handleClose = () => {
    setToggle(false);
  };

  const postCodeStyle = {
    display: toggle ? "block" : "none",
    position: "absolute",
    zIndex: "1",
    backgroundColor: "#fff",
    top: "20%",
    right: "10%",
    width: "400px",
    height: "500px",
    padding: "7px",
    border: "1px solid #ececec",
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Card className="w-[350px] h-[350px] mt-5 overflow-auto">
      <CardHeader>
        <CardTitle>배송 정보 입력</CardTitle>
        <CardDescription>배송지 정보를 입력해주세요.</CardDescription>
        <DaumPostcodeEmbed
          style={postCodeStyle}
          onComplete={handleComplete}
          autoClose={false}
          onClose={handleClose}
        />
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 ">
            <div className="flex flex-col space-y-1.5">
              <div className="flex flex-col w-full max-w-sm">
                <div className="flex gap-2 ">
                  <Input
                    type="text"
                    id="sample6_postcode"
                    placeholder="우편번호"
                    value={isZoneCode}
                  />
                  <Button type="button" onClick={handleToggle}>
                    주소 검색
                  </Button>
                </div>

                <Input
                  className="mt-2"
                  type="text"
                  id="sample6_address"
                  placeholder="주소"
                  value={isAddress}
                />

                <Input
                  className="mt-2"
                  type="text"
                  id="sample6_detailAddress"
                  placeholder="상세주소"
                />
                <Input
                  className="mt-2"
                  type="text"
                  id="sample6_extraAddress"
                  placeholder="참고항목"
                />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};

export default DeliveryForm;
