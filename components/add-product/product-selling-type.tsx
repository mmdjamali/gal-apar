import React from "react";
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from "../ui/radio-group";

function ProductSellingType() {
  return (
    <RadioGroup className="flex flex-col gap-2">
      {sellingTypes.map((value, idx) => (
        <div className="flex items-center justify-start gap-2" key={value}>
          <RadioGroupItem value={value}>
            <RadioGroupIndicator value={value} />
          </RadioGroupItem>
          {value}
        </div>
      ))}
    </RadioGroup>
  );
}

export default ProductSellingType;

const sellingTypes = [
  "remote-order-only",
  "on-site-only",
  "remote-and-on-site",
];
