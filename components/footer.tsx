import ThemeChanger from "./theme-changer";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Footer = () => {
  return (
    <footer className="container flex flex-col md:flex-row items-center justify-between gap-4 max-w-[1300px] mx-auto py-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://avatars.githubusercontent.com/u/97102957?v=4" />
        <AvatarFallback />
      </Avatar>

      <p className="font-medium md:mr-auto text-center">
        This project is made by{" "}
        <a className="underline" href="https://github.com/1stMmD">
          1stMmD
        </a>{" "}
        and deployed with{" "}
        <a className="underline" href="https://vercel.com">
          Vercel
        </a>
      </p>

      <ThemeChanger />
    </footer>
  );
};

export default Footer;
