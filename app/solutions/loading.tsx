"use client"

export default function Loading() {
  if (typeof window !== 'undefined') {
    // Remove any background images that might be showing
    const style = document.createElement('style')
    style.textContent = `
      body, html, #__next, main {
        background-image: none !important;
      }
    `
    document.head.appendChild(style)
  }

  return (
    <div 
      className="fixed inset-0 min-h-screen bg-white z-[9999]"
      style={{ 
        backgroundColor: '#E0F2F7',
        backgroundImage: 'none !important',
        background: '#E0F2F7'
      }}
    />
  )
}
