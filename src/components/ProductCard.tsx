import { CartContext } from "@/stores/CartContext"
import { Product } from "@/types/product"
import { useContext } from "react"

const ProductCart = ({product}: {product: Product}) => {
    const cart = useContext(CartContext)

    const handleAdd = () => {
        cart?.dispatch({type: 'add', payload: product}); 
        alert(`Item ${product.title} adicionado ao carrinho`)
    }
    return(
        <div className="border p-4 rounded-lg flex flex-col h-full items-center gap-4 hover:shadow-lg transition cursor-pointer ">
            <img src={product.image} alt="imagem do produto" className="object-contain" style={{ width: '120px', height: '120px' }}/>
            <h2 className="font-semibold">{product.title}</h2>
            <p className="text-gray-500 text-sm">{product.description}</p>
            <div className="mt-auto flex items-center justify-end">
                <span className="font-bold mr-3">
                    $: {product.price.toFixed(2)}
                </span>

                <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 cursor-pointer" onClick={handleAdd}>
                    Adicionar
                </button>
            </div>
        </div>
    )
}

export default ProductCart