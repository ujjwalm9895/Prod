/**
 * Shopify Products API Route
 * 
 * Fetches products from Shopify Storefront API
 * 
 * GET /api/shopify/products?first=10
 */

import { NextResponse } from 'next/server'
import { shopifyClient } from '@/lib/shopify/client'
import { GET_PRODUCTS_QUERY } from '@/lib/shopify/queries'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const first = parseInt(searchParams.get('first') || '10', 10)

    // Validate input
    if (first < 1 || first > 250) {
      return NextResponse.json(
        { error: 'Invalid "first" parameter. Must be between 1 and 250.' },
        { status: 400 }
      )
    }

    // Fetch products from Shopify
    const response = await shopifyClient.request(GET_PRODUCTS_QUERY, {
      variables: { first },
    })

    // Check for errors
    if (response.errors) {
      console.error('Shopify API Errors:', response.errors)
      return NextResponse.json(
        { error: 'Failed to fetch products', details: response.errors },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: response.data,
    })
  } catch (error: any) {
    console.error('Shopify API Error:', error)
    return NextResponse.json(
      {
        error: 'Failed to fetch products',
        details: error.message,
      },
      { status: 500 }
    )
  }
}
