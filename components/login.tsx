"use client";

import React, { useEffect, useState } from "react";
import Button from "./ui/button";
import { Icons } from "./icons";
import Input from "./ui/input";
import Otp from "./otp";
import axios from "axios";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [sent, setSent] = useState<boolean>(false);

  const [loading, setLoading] = useState(false);

  if (sent) return <Otp email={email} />;

  return (
    <form
      className="flex flex-col rounded items-center w-[min(100%,400px)] p-4"
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          setLoading(true);

          const res = await fetch("/api/otp/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          });

          if (res.ok) setSent(true);

          setLoading(false);
        } catch (err) {
          setLoading(false);
          console.log(err);
        }
      }}
    >
      <h1 className="text-foreground text-[24px] font-semibold text-center">
        Welcome to Rokim!
      </h1>

      <p className="text-foreground/75 text-[14px] mb-4 text-center">
        Please login/register with your email to continue.
      </p>

      <Input
        block
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <Button block className="mt-4" loading={loading}>
        Submit
      </Button>

      <div className="flex items-center gap-2 w-full mt-4">
        <span className="bg-border w-full h-[1px]" />
        <p className="text-[12px] text-border flex-shrink-0">
          OR CONTINUE WITH
        </p>
        <span className="bg-border w-full h-[1px]" />
      </div>

      <div className="flex w-full gap-2 mt-4">
        <Button block variant="outlined" type="button">
          <Icons.Discord className="text-[21px]" />
        </Button>
        <Button block variant="outlined" type="button">
          <Icons.Github className="text-[21px]" />
        </Button>
      </div>
    </form>
  );
}

export default Login;
