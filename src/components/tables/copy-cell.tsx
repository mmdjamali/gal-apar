import { TableCell, Tooltip } from "@mui/material";
import React from "react";
import { Icons } from "../icons";

function CopyCell() {
  const [copied, setCopied] = React.useState(false);
  return (
    <TableCell className="w-[20px] border-none">
      <Tooltip title="Copy">
        <button
          onClick={() => {
            setCopied(true);
            // navigator.clipboard.writeText("Hello");
          }}
          className="flex items-center justify-center cursor-pointer bg-lt-primary-main border-none rounded-[8px] h-[34px] aspect-square"
        >
          {(() => {
            const Icon = Icons[copied ? "Map" : "Copy"];

            React.useEffect(() => {
              if (!copied) return;

              const timeOut = setTimeout(() => {
                setCopied(false);
              }, 1000);

              return () => {
                clearTimeout(timeOut);
              };
            }, [copied]);

            return <Icon className="text-white text-[18px]" />;
          })()}
        </button>
      </Tooltip>
    </TableCell>
  );
}

export default CopyCell;
