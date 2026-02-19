"use client"

import { useState, useEffect } from "react"

export function SearchOverlay() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleSearchClick = () => {
      setIsOpen(true)
      document.body.style.overflow = "hidden"
    }

    const searchButtons = document.querySelectorAll('[aria-label="Search"]')
    searchButtons.forEach(btn => {
      btn.addEventListener("click", handleSearchClick)
    })

    return () => {
      searchButtons.forEach(btn => {
        btn.removeEventListener("click", handleSearchClick)
      })
    }
  }, [])

  const closeSearch = () => {
    setIsOpen(false)
    document.body.style.overflow = ""
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeSearch()
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div className={`search-overlay-backdrop ${isOpen ? "active" : ""}`} id="search-overlay-backdrop" onClick={closeSearch}></div>
      <div className={`search-overlay ${isOpen ? "active" : ""}`} id="search-overlay">
        <div className="search-overlay-content">
          <form action="/search" method="get" role="search">
            <input type="text" name="q" placeholder="Search products..." aria-label="Search" autoFocus />
            <button type="submit" className="btn btn-primary btn-sm">Search</button>
          </form>
          <button className="search-overlay-close" aria-label="Close search" onClick={closeSearch}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
