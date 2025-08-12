import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Navbar({
  title = "Default Title",
  about = "About Page",
  links = [],
  dropdownTitle = "Dropdown",
  dropdownItems = ["one","two","three"]
}) {
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const onSearch = (e) => {
    e.preventDefault(); // prevents page reload
    if (!searchTerm.trim()) {
      alert("Please enter a search term!");
      return;
    }
    console.log("Searching for:", searchTerm);
    // You can replace this with an API call or routing logic
    window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-primary sticky-top transition-all ${
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

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                <a
                  className={`nav-link ${link.active ? "active fw-semibold" : ""}`}
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
                  {dropdownTitle || "Menu"}
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  {dropdownItems.map((item, idx) => (
                    <li key={idx}>
                      <a className="dropdown-item" href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            )}

            {/* About Link */}
            <li className="nav-item">
              <a className="nav-link" href="/about">
                {about}
              </a>
            </li>
          </ul>

          {/* Search Bar */}
          <form
            className="d-flex"
            role="search"
            onSubmit={onSearch}
          >
            <input
              name="search"
              className="form-control me-1"
              aria-label="Search"
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
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
      active: PropTypes.bool,
    })
  ),
  dropdownTitle: PropTypes.string,
  dropdownItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  onSearch: PropTypes.func,
};
