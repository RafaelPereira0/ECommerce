import { Product } from "@/types/product";
import { useState } from "react";
import ProductCart from "./ProductCard";
import { useFilter } from "@/stores/FilterContext";

const ProductList = ({ products }: { products: Product[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itensPage = 10;

  const indexLastItem = currentPage * itensPage;
  const indexFirstItem = indexLastItem - itensPage;
  const currentItens = products.slice(indexFirstItem, indexLastItem);

  const totalPages = Math.ceil(products.length / itensPage);

  const {selectedCategory} = useFilter()

  const filteredProducts = selectedCategory ? products.filter((p) => p.category === selectedCategory) : products

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {filteredProducts.map((item) => (
          <ProductCart key={item.id} product={item}/>
        ))}

      </div>
      <div className="flex justify-center items-center gap-3 mt-4">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>

        <span>
          {currentPage} / {totalPages}
        </span>

        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default ProductList
