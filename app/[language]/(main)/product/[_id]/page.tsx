import { Icons } from "@/components/icons";
import BuyProduct from "@/components/product/buy-product";
import { KeysOfAType } from "mongodb";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

interface ProductPageProps {
  params: {
    _id: string;
  };
}

const fetchProductData = async (_id: string) => {
  const res = await fetch(`http://localhost:3000/api/product/${_id}`, {
    method: "GET",
    cache: "no-cache",
  });

  if (!res.ok) {
    return new Error("Failed to fetch data!");
  }

  return res.json();
};

export const generateMetadata = async ({
  params,
}: ProductPageProps): Promise<Metadata> => {
  const data = await fetchProductData(params._id);

  return {
    title: `Gal Apar | ${data?.name}`,
  };
};

const Product = async ({ params }: ProductPageProps) => {
  const data = await fetchProductData(params._id);

  if (!data) return <p>{params._id}</p>;

  return (
    <div className="flex flex-col container px-4 pb-6 sm:px-8 max-w-[1300px] mx-auto relative text-foreground text-[14px]">
      <div className="flex items-center gap-2 justify-start py-3">
        {["gal-apar", (data.category as string)?.toLowerCase()].map(
          (category, idx, list) => {
            if (!links[category]) return "";

            return (
              <Fragment key={idx}>
                <Link
                  href={links[category]?.link}
                  className="text-[14px] text-foreground/75"
                >
                  {links[category]?.name}
                </Link>
                {idx < list.length - 1 ? (
                  <p className="text-[13px] text-foreground/75">/</p>
                ) : (
                  ""
                )}
              </Fragment>
            );
          }
        )}
      </div>

      <div className="grid w-full relative md:grid-cols-2 gap-6 items-start">
        <div className="grid gap-3 w-full relative">
          <div className="relative w-full aspect-square overflow-hidden">
            <div className="relative w-full aspect-square ">
              <Image
                fill
                unoptimized
                src={data?.images[0] ?? ""}
                alt={data?.name ?? ""}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-3 w-full relative">
          <div className="flex gap-2 items-center w-full p-2 border border-border rounded ">
            <img
              className="h-7 aspect-square rounded-full "
              src={data?.seller_id?.image}
            />
            <p>{data?.seller_id?.name}</p>
          </div>

          <div className=" relative w-full grid gap-1 rounded border border-border p-3">
            <h1 className="text-[18px] font-semibold text-foreground">
              {data?.name}
            </h1>

            <p className="text-[14px] text-foreground/80">
              {data?.description}
            </p>
          </div>

          {data.variants && <BuyProduct data={data} />}
        </div>
      </div>

      {/* <pre className="whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default Product;

const links: {
  [word: string]: {
    name: string;
    link: string;
  };
} = {
  "gal-apar": {
    name: "Gal apar",
    link: "/",
  },
  clothing: {
    name: "Clothing",
    link: "/categories/clothing",
  },
};
