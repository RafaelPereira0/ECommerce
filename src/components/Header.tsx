"use client"

import { useProducts } from "@/data/products";
import { useFilter } from "@/stores/FilterContext";
import Link from "next/link";

const Header = () => {

  const {categories} = useProducts();
  const {selectedCategory, setSelectedCategory} = useFilter()

  return (
    <header className="w-full bg-[#0E0F6B] flex justify-between items-center py-4 px-6 rounded-lg fixed mb-10">
      <Link href='/'>
        <h1 className="text-2xl font-bold">Loja virtual</h1>
      </Link>
      <div className="flex text-1xl font-bold">
        <p onClick={() => setSelectedCategory(null)} className="mr-10 cursor-pointer">Todos</p>
        {categories.map((category) => (
          <p key={category} onClick={() => setSelectedCategory(category)} className={`mr-10 cursor-pointer`}>
            {category}
          </p>
        ))}
        
      </div>
      <Link href="/cart" className="cursor-pointer font-bold">
        Carrinho
      </Link>
    </header>
  );
};

export default Header;
