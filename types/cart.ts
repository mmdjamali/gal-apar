import { ProductType, VariantType } from "@/types/product";

export interface CartProductType {
    product : ProductType,
    variant : VariantType,
    _id : string,
    quantity : number
}