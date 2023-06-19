import { Checkbox, Switch, TableCell, Tooltip } from "@mui/material";
import React from "react";
import { Icons } from "../icons";

function BooleanCell() {
  const [copied, setCopied] = React.useState(false);
  return (
    <TableCell className="w-[20px] border-none">
      <Switch readOnly checked={true} color="success" />
    </TableCell>
  );
}

export default BooleanCell;
