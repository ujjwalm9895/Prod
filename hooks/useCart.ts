import { useCartStore } from "@/store/cartStore"
import type { Product, ProductVariant } from "@/types"

export function useCart() {
  const store = useCartStore()

  const addToCart = (product: Product, variant: ProductVariant, quantity = 1) => {
    store.addItem(product, variant, quantity)
    store.openCart()
  }

  const removeFromCart = (itemId: string) => {
    store.removeItem(itemId)
  }

  const updateCartItemQuantity = (itemId: string, quantity: number) => {
    store.updateQuantity(itemId, quantity)
  }

  return {
    items: store.items,
    totalItems: store.getTotalItems(),
    totalPrice: store.getTotalPrice(),
    isOpen: store.isOpen,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart: store.clearCart,
    toggleCart: store.toggleCart,
    openCart: store.openCart,
    closeCart: store.closeCart,
  }
}
