import { cn } from "@/lib/utils";
import { TableCell } from "@mui/material";
import React from "react";

function ImagesCell() {
  const [images, setImages] = React.useState<[] | string[]>([]);
  const [hovered, setHovered] = React.useState<number | null>(null);

  React.useEffect(() => {
    setImages(
      [
        "bg-rose-500",
        "bg-emerald-500",
        "bg-yellow-500",
        "bg-cyan-500",
        "bg-violet-500",
      ].slice(0, Math.ceil(Math.random() * 5))
    );
  }, []);

  return (
    <TableCell className="border-none w-[0px]">
      <div className={cn("flex items-center")}>
        {images.map((item, idx) => (
          <div
            onClick={() => {
              setHovered((prev) => (prev === idx ? null : idx));
            }}
            key={idx}
            className={cn(
              "flex h-[34px] aspect-square rounded-[8px] transition-all",
              item,
              idx > 0 && !(hovered === idx || hovered === idx - 1)
                ? "ml-[-15px]"
                : ""
            )}
          />
        ))}
      </div>
    </TableCell>
  );
}

export default ImagesCell;
