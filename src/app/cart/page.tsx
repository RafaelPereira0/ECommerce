"use client"

import { CartContext } from "@/stores/CartContext"
import Link from "next/link";
import { useContext } from "react"

const CartPage = () => {

    const cart = useContext(CartContext);

    let value:number = 0

    const handleRemoveItemCart = (id: number, item: string) => {
        cart?.dispatch({type: 'remove', payload: id})
        alert(`Item ${item} removido com sucesso`)
    }

    const handleRemoveAllItems = () => {
        cart?.dispatch({type: "clear"})
        alert('Carrinho limpo')
    }

    return(
        <div className="w-[980px] mt-8 mx-auto flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Seu Carrinho
            </h1>
            
            {cart?.cart.length === 0 ? (
                <div className="text-center">
                    <p className="text-gray-500">Seu carrinho está vazio</p>
                    <Link href="/" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Voltar à loja
                    </Link>
                </div>
            ) : (
                <>
                    <ul className="divide-y divide-gray-200 mb-5">
                        {cart?.cart.map((item) => (
                            
                            <li className="flex items-center justify between py-4" key={item.id}>
                                <div className="flex items-center gap-4">
                                    <img src={item.image} alt={item.title} className="h-16 w-16 object-contain"/>

                                    <div>
                                        <h2 className="font-semibold">{item.title}</h2>
                                        <p className="text-sm text-gray-500">{item.price.toFixed(2)}</p>
                                        <p className="text-sm text-gray-500">Quantidade: {item.quantity}</p>
                                    </div>
                                </div>
                                {value = value + (item.price * item.quantity)}
                                <button className="text-red-600 hover:underline cursor-pointer ml-5" onClick={() => handleRemoveItemCart(item.id, item.title)}>
                                    Remover
                                </button>
                            </li>
                            
                        )
                        
                        )}
                    </ul>
                    <p>Valor total: {value}</p>
                    <button className="text-orange-400 hover:underline cursor-pointer" onClick={() => handleRemoveAllItems()}>
                        Limpar Carrinho
                    </button>
                </>
            )}
        </div>
    )
}

export default CartPage