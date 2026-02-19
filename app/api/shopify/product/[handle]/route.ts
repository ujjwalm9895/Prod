/**
 * Shopify Product by Handle API Route
 * 
 * Fetches a single product by handle (slug) from Shopify Storefront API
 * 
 * GET /api/shopify/product/[handle]
 */

import { NextResponse } from 'next/server'
import { shopifyClient } from '@/lib/shopify/client'
import { GET_PRODUCT_BY_HANDLE_QUERY } from '@/lib/shopify/queries'

export async function GET(
  request: Request,
  { params }: { params: { handle: string } }
) {
  try {
    const { handle } = params

    if (!handle) {
      return NextResponse.json(
        { error: 'Product handle is required' },
        { status: 400 }
      )
    }

    // Fetch product from Shopify
    const response = await shopifyClient.request(GET_PRODUCT_BY_HANDLE_QUERY, {
      variables: { handle },
    })

    // Check for errors
    if (response.errors) {
      console.error('Shopify API Errors:', response.errors)
      return NextResponse.json(
        { error: 'Failed to fetch product', details: response.errors },
        { status: 500 }
      )
    }

    // Check if product exists
    if (!response.data?.product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: response.data.product,
    })
  } catch (error: any) {
    console.error('Shopify API Error:', error)
    return NextResponse.json(
      {
        error: 'Failed to fetch product',
        details: error.message,
      },
      { status: 500 }
    )
  }
}
