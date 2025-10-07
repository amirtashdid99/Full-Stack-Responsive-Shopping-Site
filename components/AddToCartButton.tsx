"use client";

import { ShoppingCart, Plus, Minus } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    image: string;
    stock: number;
  };
  className?: string;
}

export default function AddToCartButton({
  product,
  className = "",
}: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const items = useCartStore((state) => state.items);

  const cartItem = items.find((item) => item.id === product.id);
  const isInCart = !!cartItem;
  const isOutOfStock = product.stock === 0;
  const currentQuantity = cartItem?.quantity || 0;
  const isMaxQuantity = currentQuantity >= product.stock;

  const handleAddToCart = () => {
    if (isOutOfStock) return;

    addItem({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      image: product.image,
      stock: product.stock,
    });
  };

  const handleIncrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentQuantity < product.stock) {
      updateQuantity(product.id, currentQuantity + 1);
    }
  };

  const handleDecrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentQuantity > 0) {
      updateQuantity(product.id, currentQuantity - 1);
    }
  };

  if (isOutOfStock) {
    return (
      <button
        disabled
        className={`flex items-center justify-center gap-2 px-6 py-3 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed ${className}`}
      >
        <ShoppingCart className="h-5 w-5" />
        Out of Stock
      </button>
    );
  }

  if (isInCart) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <button
          onClick={handleDecrease}
          className="h-12 w-12 rounded-lg border-2 border-indigo-600 dark:border-indigo-400 flex items-center justify-center hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition text-indigo-600 dark:text-indigo-400"
        >
          <Minus className="h-5 w-5" />
        </button>
        <div className="flex-1 text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {currentQuantity}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            in cart
          </div>
        </div>
        <button
          onClick={handleIncrease}
          disabled={isMaxQuantity}
          className={`h-12 w-12 rounded-lg border-2 flex items-center justify-center transition ${
            isMaxQuantity
              ? "border-gray-300 dark:border-gray-600 text-gray-300 dark:text-gray-600 cursor-not-allowed"
              : "border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
          }`}
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all transform hover:scale-105 active:scale-95 ${className}`}
    >
      <ShoppingCart className="h-5 w-5" />
      Add to Cart
    </button>
  );
}
