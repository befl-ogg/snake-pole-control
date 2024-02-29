// /src/components/ProductCard.tsx
import type { Product } from '@models/product-model';
import { getProductDetail } from '@services/product-service';
import React, { useEffect, useState } from 'react';

interface ProductCardProps {
  productId: number;
}

const ProductDetail: React.FC<ProductCardProps> = ({ productId }) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProductDetail(productId)
      .then(setProduct)
      .catch(error => console.error(error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetail;
