"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function PremiumLoader() {
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true)
      setTimeout(() => {
        const loader = document.querySelector(".premium-loader")
        if (loader) {
          loader.remove()
        }
      }, 200)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isHidden) return null

  return (
    <div className={`premium-loader ${isHidden ? "hidden" : ""}`}>
      <div className="loader-logo">
        <Image src="/assets/loader-logo.png" alt="R2F Loader Logo" width={120} height={120} />
      </div>
      <div className="loader-bar">
        <div className="loader-bar-fill"></div>
      </div>
    </div>
  )
}
