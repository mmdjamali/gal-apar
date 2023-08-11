"use client";

import { useQueryClient } from "react-query";
import { Icons } from "./icons";
import Button from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import axios from "axios";
import { useToast } from "./ui/use-toast";

interface ProductOptionsProps {
  _id: string;
}

const ProductOptions = ({ _id }: ProductOptionsProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const refresh = () =>
    queryClient.refetchQueries({
      queryKey: "my-products",
    });

  const options = [
    {
      title: "edit",
      Icon: Icons.Edit,
      className: "",
      onClick: () => {},
    },
    {
      title: "delete",
      Icon: Icons.DeleteBin,
      className: "hover:bg-error/10 hover:text-error",
      onClick: async () => {
        try {
          const res = await axios.delete(`/api/product/${_id}`);
          toast({
            title: "Removed successfuly",
            variant: "success",
          });

          refresh();
        } catch (err) {
          toast({
            title: "Something went wrong",
            variant: "error",
          });
        }
      },
    },
    {
      title: "view",
      Icon: Icons.Eye,
      className: "",
      onClick: () => {},
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="text" color="foreground" className="p-2">
          <Icons.More className="text-[16px]" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent align="end">
          {options.map(({ Icon, title, className, onClick }) => (
            <DropdownMenuItem
              onClick={() => onClick()}
              className={className}
              key={title}
            >
              <Icon className="text-[16px]" />
              {title}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

export default ProductOptions;
