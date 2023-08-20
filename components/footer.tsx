import { WithLanguageType } from "@/types/language";
import ThemeChanger from "./theme-changer";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Footer = ({ language }: WithLanguageType) => {
  return (
    <footer className="container flex flex-col md:flex-row items-center justify-between gap-4 max-w-[1300px] mx-auto py-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/mmdjamali.png" />
        <AvatarFallback />
      </Avatar>

      {language === "fa" ? (
        <p className="font-medium md:ml-auto text-center">
          ساخته شده توسط{" "}
          <a className="underline" href="https://github.com/mmdjamali">
            mmdjamali
          </a>{" "}
          و دپلوی شده در{" "}
          <a className="underline" href="https://vercel.com">
            Vercel
          </a>
        </p>
      ) : (
        <p className="font-medium md:mr-auto text-center">
          Built by{" "}
          <a className="underline" href="https://github.com/mmdjamali">
            mmdjamali
          </a>{" "}
          and deployed on{" "}
          <a className="underline" href="https://vercel.com">
            Vercel
          </a>
        </p>
      )}

      <ThemeChanger />
    </footer>
  );
};

export default Footer;
