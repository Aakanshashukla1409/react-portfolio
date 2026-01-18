import React from 'react'
import { headerData } from '../data/headerData'
function Header() {
  return (
    <header className="header">
      <h1>Hi, I’m {headerData.name} </h1>
      <h2>{headerData.title}</h2>
      <p>{headerData.description}</p>

      <div className="header-buttons">
        {/* adding buttons and smooth role option on it */}
        <button
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          {headerData.ctaPrimary}
        </button>

        <button
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          {headerData.ctaSecondary}
        </button>
      </div>

    </header>
  )
}

export default Header