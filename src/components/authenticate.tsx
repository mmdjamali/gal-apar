"use client"
import React from 'react'
import { Icons } from './icons'
import { Button, Fade, OutlinedInput, Typography } from '@mui/material';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';

function Authenticate() {
  const router = useRouter()

  const [phoneNumber, setPhoneNumber] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [errors, setErrors] = React.useState({
    field : "",
    otp : ""
  })
  const [sended, setSended] = React.useState(true);
  const [digits, setDigits] = React.useState(Array(6).fill(""));
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const input = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    input.current?.querySelector("input")?.focus();
  }, [currentIndex, input]);

  if (!sended)
    return (
      <div className="flex flex-col items-center justify-center relative w-[min(100%,320px)] px-4 border sm:border-solid border-neutral-200/75 py-5 rounded-lg">
        <div className="w-full flex items-center justify-center">
          <Icons.Logo className="text-lt-primary-main h-[50px]" />
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();

            if (!!errors.field || !phoneNumber) return;

            try {
              setLoading(true);

              const res = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  phone: phoneNumber,
                }),
              });

              if (res.ok) setSended(true);

              setLoading(false);
            } catch (err) {
              setLoading(false);
              console.error(err);
            }
          }}
          className="flex flex-col mt-4 w-full"
        >
          <Typography
            component={"h1"}
            className="text-[16px] font-medium text-neutral-800/90"
          >
            Login | Sign Up
          </Typography>

          <Typography
            component={"p"}
            className="text-[12px] text-neutral-800/60 mt-3"
          >
            Hello!
          </Typography>

          <Typography
            component={"p"}
            className="text-[12px] text-neutral-800/60 mt-1"
          >
            Please enter your phone number
          </Typography>

          <OutlinedInput
            value={phoneNumber}
            onChange={(e) => {
              const value = e.target.value;

              setPhoneNumber(value);

              if (!value) {
                setErrors((prev) => ({
                  ...prev,
                  field: "Please don't leave this field empty",
                }));
                return;
              }

              if (!/^(\+98|0)?9\d{9}$/.test(value)) {
                setErrors((prev) => ({
                  ...prev,
                  field: "Please enter a valid phone number",
                }));
                return;
              }

              setErrors((prev) => ({ ...prev, field: "" }));
            }}
            onBlur={() => {
              if (!phoneNumber) {
                setErrors((prev) => ({
                  ...prev,
                  field: "Please don't leave this field empty",
                }));
                return;
              }

              if (!/^(\+98|0)?9\d{9}$/.test(phoneNumber)) {
                setErrors((prev) => ({
                  ...prev,
                  field: "Please enter a valid phone number",
                }));
                return;
              }

              setErrors((prev) => ({
                ...prev,
                field: "",
              }));
            }}
            sx={{
              "& input": {
                paddingBlock: "12px",
              },
            }}
            className="mt-4 text-[12px] py-0"
          />

          <Fade in={!!errors.field}>
            <Typography component={"p"} color="error" className="text-[12px]">
              {errors.field}
            </Typography>
          </Fade>

          <Button
            type="submit"
            disabled={loading}
            className="mt-6 py-2 text-[14px] capitalize"
            fullWidth
            variant="contained"
          >
            {loading ? (
              <Icons.Spinner className="animate-spin text-[25px]" />
            ) : (
              "Enter"
            )}
          </Button>
        </form>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center relative w-[min(100%,320px)] px-4 border sm:border-solid border-neutral-200/75 py-5 rounded-lg">
      <div className="w-full flex items-center justify-center">
        <Icons.Logo className="text-lt-primary-main h-[50px]" />
      </div>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const otp = digits.join("");

          if (!otp) return;

          try {
            setLoading(true);

            const res = await signIn("credentials", {
              code: otp,
              phone: phoneNumber,
              redirect: false,
            });

            if (!res?.ok) {
              setErrors((prev) => ({
                ...prev,
                otp: "Something went wrong!",
              }));
            } else {
              setErrors((prev) => ({
                ...prev,
                otp: "",
              }));

              setTimeout(() => {
                router.push("/");
              }, 1000);
            }

            setLoading(false);
          } catch (err) {
            setLoading(false);
            console.error(err);
          }
        }}
        className="flex flex-col mt-4 w-full"
      >
        <Typography
          component={"h1"}
          className="text-[16px] font-medium text-neutral-800/90"
        >
          Confirm Your Code
        </Typography>

        <Typography
          component={"p"}
          className="text-[12px] text-neutral-800/60 mt-1"
        >
          We have send you a code, please use it to continue
        </Typography>

        <div className="flex flex-wrap gap-1 mt-4 justify-evenly">
          {digits.map((value, idx, list) => (
            <OutlinedInput
              ref={idx === currentIndex ? input : null}
              type="number"
              error={!!errors.otp}
              key={idx}
              value={value}
              onChange={(e) => {
                let v = e.target.value;

                setDigits((prev) => {
                  let clone = [...prev];
                  clone[idx] = v.substring(v.length - 1, v.length);
                  return clone;
                });

                if (idx < list.length - 1 && v) {
                  setCurrentIndex((prev) => prev + 1);
                }
              }}
              onKeyDown={(e) => {
                if (
                  e.key === "Backspace" &&
                  !value &&
                  idx === currentIndex &&
                  idx > 0
                ) {
                  setCurrentIndex((prev) => prev - 1);
                  setDigits((prev) => {
                    let clone = [...prev];
                    clone[idx - 1] = "";
                    return clone;
                  });
                  e.preventDefault();
                }
              }}
              onFocus={() => {
                idx !== currentIndex ? setCurrentIndex(idx) : null;
              }}
              sx={{
                "& input": {
                  textAlign: "center",
                  padding: 0,
                },
              }}
              className="
              text-[16px] flex-shrink-0 w-[40px]
              px-2 py-3 outline-none
               "
            />
          ))}
        </div>

        <Fade in={!!errors.otp}>
          <Typography component={"p"} color="error" className="text-[12px]">
            {errors.otp}
          </Typography>
        </Fade>

        <Button
          type="submit"
          disabled={loading}
          className="mt-6 py-2 text-[14px] capitalize"
          fullWidth
          variant="contained"
        >
          {loading ? (
            <Icons.Spinner className="animate-spin text-[25px]" />
          ) : (
            "Enter"
          )}
        </Button>
      </form>
    </div>
  );
}

export default Authenticate

