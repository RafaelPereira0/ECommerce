import { Product } from "@/types/product";


export interface CartItem extends Product {
    quantity: number
}

export type CartState = CartItem[]

export type CartAction = 
| {type: "add"; payload: Product}
| {type: 'remove', payload: number}
| {type: 'clear'}

export const CartReducer = (state: CartState, action: CartAction) => {
    switch(action.type){
        case "add":
            const existingItem = state.find(item => item.id === action.payload.id)
            if(existingItem){
                return state.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item)
            }

            return [...state, {...action.payload, quantity: 1}]
        case "remove":
            return state.filter(item => item.id !== action.payload)
        case "clear":
            return []
        
        default: return state
    }
}