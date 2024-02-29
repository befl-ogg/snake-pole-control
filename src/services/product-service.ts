import type { Product } from '@models/product-model';
import { productCatalog, productDetail } from '@models/product-model';

/*
export async function fetchProduct(productId: number): Promise<Product> {
  const response = await fetch(`https://api.example.com/products/${productId}`);
  if (!response.ok) {
    throw new Error('Product not found');
  }
  const product: Product = await response.json();
  return product;
}*/

export async function getProductDetail(productId: number): Promise<Product> {
    // Simula una operación asíncrona, como una llamada a una API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productDetail);
      }, 1000); // Simula un retraso de red
    });
  }

  export async function getProductCatalog(): Promise<Array<Product>> {
    // Simula una operación asíncrona, como una llamada a una API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productCatalog);
      }, 1000); // Simula un retraso de red
    });
  }