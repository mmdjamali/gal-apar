import React, { useEffect, useRef, useState } from "react";

import { signIn, useSession } from "next-auth/react";

import Input from "./ui/input";
import Button from "./ui/button";
import { useRouter } from "next/navigation";

interface props {
  email: string;
}

function Otp({ email }: props) {
  const router = useRouter();

  const [otp, setOtp] = useState(Array(6).fill(""));

  const [index, setIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    inputRef.current?.focus();
  }, [inputRef, index]);

  return (
    <form
      className="flex flex-col rounded items-center w-[min(100%,400px)] p-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);

        const res = await signIn("credentials", {
          otp: otp.join(""),
          email,
          redirect: false,
        });

        if (!res?.ok) {
          setLoading(false);
          return;
        }

        setSuccess(true);
        setLoading(false);

        setTimeout(() => {
          router.push("/");
        }, 1000);
      }}
    >
      <h1 className="text-foreground text-[24px] font-semibold text-center">
        Just one more step!
      </h1>

      <p className="text-foreground/75 text-[14px] text-center">
        We have sent your email a one time password, enter it to continue.
      </p>

      <div className="flex flex-wrap w-full items-center justify-evenly gap-2 my-4">
        {otp.map((value, idx, list) => (
          <Input
            success={success}
            onFocus={() => {
              setIndex(idx);
            }}
            value={value}
            onChange={(e) => {
              const v = e.target.value.substring(e.target.value.length - 1);

              if (!new RegExp("^[0-9]+$").test(v) && v !== "") return;

              setOtp((prev) => {
                const clone = [...prev];
                clone[idx] = v;
                return clone;
              });

              if (idx !== list.length - 1 && v !== "")
                setIndex((prev) => prev + 1);

              if (idx > 0 && v === "") setIndex((prev) => prev - 1);
            }}
            onKeyDown={(e) => {
              const key = e.key;
              if (key === "Backspace" && !value && idx > 0)
                setIndex((prev) => prev - 1);
            }}
            ref={idx === index ? inputRef : undefined}
            key={idx}
            className="w-[36px] px-0"
            inputClassName="text-center"
          />
        ))}
      </div>

      <Button block loading={loading}>
        Submit
      </Button>
    </form>
  );
}

export default Otp;
