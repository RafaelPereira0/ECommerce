"use client"

import { CartAction, CartItem, CartReducer } from "@/reducers/ProductReducer";

import { Dispatch, ReactNode, useReducer, useState } from "react";
import { createContext } from "react";

type CartContextType = {
    cart: CartItem[];
    dispatch: Dispatch<CartAction>
    totalItems: number
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, dispatch] = useReducer(CartReducer, []);

    const totalItems = cart.reduce((sum, item)=> sum+ item.quantity, 0);

    return(
        <CartContext.Provider value={{cart, dispatch, totalItems}}>
            {children}
        </CartContext.Provider>
    )
}