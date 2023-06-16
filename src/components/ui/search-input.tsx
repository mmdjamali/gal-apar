import React from "react";
import { Icons } from "../icons";
import { cn } from "@/lib/utils";
import { OutlinedInput } from "@mui/material";

interface Props extends React.ComponentPropsWithoutRef<typeof OutlinedInput> {}

function SearchInput({ ...props }: Props) {
  return (
    <OutlinedInput
      startAdornment={
        <Icons.Search className="text-[21px] text-lt-secondary-dark flex-shrink-0" />
      }
      className={cn(
        "text-[14px] text-lt-accent-main py-2.5 px-4 w-[min(300px,50%)] bg-transparent"
      )}
      {...props}
    />
  );
}

export default SearchInput;
