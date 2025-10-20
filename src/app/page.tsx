"use client";

import ProductList from "@/components/ProductList";
import { useProducts } from "@/data/products";


export default function Home() {

  const {products, loading, error} = useProducts();
  if (loading) return <p className="text-center mx-auto">Carregando produtos...</p>;
  if(error) return <p>Erro: {error}</p>

  return (
    <div className="w-[980px] mt-8 mx-auto flex items-center">
      <ProductList products={products} />
    </div>
  );
}
