import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AccountTransfer = () => {
  const [selected, setSelected] = React.useState("");
  return (
    <div>
      <div className="flex flex-col space-y-1.5 mb-4">
        <Label className="mb-2" htmlFor="payment-method">
          은행사 선택
        </Label>
        <Select onValueChange={(value) => setSelected(value)}>
          <SelectTrigger id="payment-method">
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="account-transfer">국민은행</SelectItem>
            <SelectItem value="card">신한은행</SelectItem>
            <SelectItem value="simple-payment">하나은행</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default AccountTransfer;
