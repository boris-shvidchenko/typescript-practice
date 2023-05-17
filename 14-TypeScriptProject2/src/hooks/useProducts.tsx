import { useContext } from "react";
import ProductsContext from "../context/ProductsProvider";
import { UseProductsContextType } from "../context/ProductsProvider";

export default function useProducts(): UseProductsContextType {
    return useContext(ProductsContext);
}