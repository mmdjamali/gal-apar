import { Icons } from "./icons";
import Button from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const ProductOptions = () => {
  const options = [
    {
      title: "edit",
      Icon: Icons.Edit,
      className: "",
    },
    {
      title: "delete",
      Icon: Icons.DeleteBin,
      className: "hover:bg-error/10 hover:text-error",
    },
    {
      title: "view",
      Icon: Icons.Eye,
      className: "",
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
          {options.map(({ Icon, title, className }) => (
            <DropdownMenuItem className={className} key={title}>
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
