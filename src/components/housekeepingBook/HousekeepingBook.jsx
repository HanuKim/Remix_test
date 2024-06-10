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
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import dayjs from "dayjs";

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

const HousekeepingBook = () => {
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };

  const period =
    dayjs().startOf("month").format("YYYY-MM-DD") +
    " ~ " +
    dayjs().endOf("month").format("YYYY-MM-DD");

  return (
    <Card className="w-[650px] h-[350px] mt-20 mb-20 overflow-auto">
      <CardHeader>
        <CardTitle>Housekeeping Book</CardTitle>
        <CardDescription>{period}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-2">
            <div className="flex items-end gap-5">
              <div>
                <Label htmlFor="budget">예산</Label>
                <div className="flex items-end gap-1">
                  <Input
                    id="budget"
                    readOnly
                    className="w-20"
                    onClick={() => alert("Dd")}
                  />
                  <span className="text-sm">원</span>
                </div>
              </div>

              <div>
                <Label htmlFor="spending">지출</Label>
                <div className="flex items-end gap-1">
                  <Input id="spending" readOnly className="w-20" />
                  <span className="text-sm">원</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="tel" placeholder="전화번호" />
                <Button type="button">인증</Button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Table>
          <TableCaption className="text-[11px]">
            선택 상품 리스트를 확인한 후 다음 단계로 넘어가세요.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[140px]">상품명</TableHead>
              <TableHead className="text-center">개수</TableHead>
              <TableHead className="text-right w-[50px]">총액</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.productName}</TableCell>
                <TableCell className="text-center">{item.quantity}</TableCell>
                <TableCell className="text-right">${item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell className="text-right">${calculateTotal()}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardFooter>
    </Card>
  );
};

export default HousekeepingBook;
