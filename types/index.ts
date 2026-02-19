/**
 * TypeScript type definitions
 * Centralized type exports for the entire application
 */

// Product Types
export interface Product {
  id: string
  title: string
  description: string
  price: number
  compareAtPrice?: number
  images: string[]
  variants: ProductVariant[]
  handle: string
  tags?: string[]
  available: boolean
}

export interface ProductVariant {
  id: string
  title: string
  price: number
  compareAtPrice?: number
  available: boolean
  image?: string
  options: {
    [key: string]: string
  }
}

// Cart Types
export interface CartItem {
  id: string
  product: Product
  variant: ProductVariant
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
  subtotal: number
  tax?: number
  shipping?: number
}

// User Types
export interface User {
  id: string
  email: string
  name: string
  phone?: string
}

export interface Address {
  id?: string
  firstName: string
  lastName: string
  address1: string
  address2?: string
  city: string
  state: string
  zip: string
  country: string
  phone?: string
}

// Order Types
export interface Order {
  id: string
  orderNumber: string
  items: CartItem[]
  total: number
  status: OrderStatus
  createdAt: string
  shippingAddress: Address
  billingAddress: Address
}

export type OrderStatus = 
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"

// API Types
export interface ApiResponse<T> {
  data: T
  error?: string
  message?: string
}
