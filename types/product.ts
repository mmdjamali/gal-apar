export type VariantType = {
  _id?: string;
  price?: number | null;
  color?: string;
  quantity?: string;
  size?: string;
};

export type ProductType = {
  name : string,
  images : string[];
  currency : string;
  _id?: string;
  price?: number | null;
  base_prise : number;
  quantity?: string;
  variants : VariantType[] | string[] | null,
  category : string
};
