import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Navbar({
  title = "my website",
  about = "about us",
  links = [],
  dropdownTitle = "dropdown",
  dropdownItems = ["one","two","three"],
  mode,
  togglemode,
  onSearch
}) {
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();

    if (!trimmed) {
      alert("Please enter a search term!");
      return;
    }

    if (onSearch && typeof onSearch === "function") {
      onSearch(trimmed);
    } else {
      window.location.href = `/search?q=${encodeURIComponent(trimmed)}`;
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${mode} bg-primary transition-all ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand fw-bold" href="/">
          {title}
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                <a
                  className={`nav-link ${
                    link.active ? "active fw-semibold" : ""
                  }`}
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Dropdown */}
            {dropdownItems.length > 0 && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {dropdownTitle}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {dropdownItems.map((item, idx) => {
                    const label = typeof item === "string" ? item : item.label;
                    const href = typeof item === "string" ? `/${item}` : item.href;
                    return (
                      <li key={idx}>
                        <a className="dropdown-item" href={href}>
                          {label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            )}

            {/* About */}
            <li className="nav-item">
              <a className="nav-link" href="/about">
                {about}
              </a>
            </li>
          </ul>

          {/* Search */}
          <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
            <input
              name="search"
              className="form-control me-1"
              aria-label="Search"
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoComplete="off"
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>

          {/* Dark Mode Toggle */}
          <div
            className={`form-check form-switch ms-3 text-${
              mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={togglemode}
              type="checkbox"
              role="switch"
              id="darkModeSwitch"
            />
            <label
              className="form-check-label"
              htmlFor="darkModeSwitch"
              style={{ cursor: "pointer" }}
            >
              Dark
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      active: PropTypes.bool
    })
  ),
  dropdownTitle: PropTypes.string,
  dropdownItems: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      })
    ])
  ),
  mode: PropTypes.oneOf(["light", "dark"]),
  togglemode: PropTypes.func.isRequired,
  onSearch: PropTypes.func
};

Navbar.defaultProps = {
  title: "My App",
  about: "About Us",
  links: [],
  dropdownTitle: "Dropdown",
  dropdownItems: [],
  mode: "light"
};
