// src/components/ProductTable.tsx
import type { Product } from '@models/product-model';
import { getProductCatalog } from '@services/product-service';
import React, { useEffect, useState } from 'react';

const InventoryTable: React.FC = () => {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    getProductCatalog().then(setProducts);
  }, []);

  return (

    <div className="md:max-w-max w-full">
        <div className="flex justify-end py-5">
            <button
                type="button"
                className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
                    <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
                ></path>
                </svg>
                Agregar productos
            </button>
        </div>

        <div className="mx-auto w-3/4 md:w-full flex flex-col justify-center">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Nombre</th>
                <th scope="col" className="px-6 py-3">Descripción</th>
                <th scope="col" className="px-6 py-3">Precio</th>
                <th scope="col" className="px-6 py-3">Código</th>
                <th scope="col" className="px-6 py-3">Acción</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={product.id}>
                    <th scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.id}</th>
                    <th scope="row" className="px-6 py-3">{product.name}</th>
                    <th scope="row" className="px-6 py-3">{product.description}</th>
                    <th scope="row" className="px-6 py-3">${product.price}</th>
                    <th scope="row" className="px-6 py-3">{product.code}</th>
                    <th scope="row" className="px-6 py-3"><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a></th>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    </div>
  );
};

export default InventoryTable;
