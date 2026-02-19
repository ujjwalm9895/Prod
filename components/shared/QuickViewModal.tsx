"use client"

import { useState, useEffect } from "react"

export function QuickViewModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<string>("")

  useEffect(() => {
    const handleQuickView = (e: CustomEvent) => {
      setContent(e.detail.content || "")
      setIsOpen(true)
      document.body.style.overflow = "hidden"
    }

    window.addEventListener("quick-view" as any, handleQuickView as EventListener)
    return () => {
      window.removeEventListener("quick-view" as any, handleQuickView as EventListener)
    }
  }, [])

  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflow = ""
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal()
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div id="quick-view-modal" className={`quick-view-modal ${isOpen ? "active" : ""}`}>
      <button id="quick-view-close" className="quick-view-close" aria-label="Close quick view" onClick={closeModal}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <div className="quick-view-content">
        <div id="quick-view-body" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  )
}
