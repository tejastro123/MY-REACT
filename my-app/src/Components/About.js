import React, { useState } from "react";

export default function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleStyle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const accordionItems = [
    {
      id: "collapseOne",
      title: "Accordion Item #1",
      content:
        "This is the first item's accordion body. It’s shown by default..."
    },
    {
      id: "collapseTwo",
      title: "Accordion Item #2",
      content:
        "This is the second item's accordion body. It is hidden by default..."
    },
    {
      id: "collapseThree",
      title: "Accordion Item #3",
      content:
        "This is the third item's accordion body. It is hidden by default..."
    },
  ];

  return (
    <div className={`container py-3 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <h1 className="my-3">About Us</h1>

      <div className="accordion" id="accordionExample">
        {accordionItems.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"} ${index !== 0 ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${item.id}`}
                aria-expanded={index === 0}
                aria-controls={item.id}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={item.id}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              data-bs-parent="#accordionExample"
            >
              <div className={`accordion-body ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
                <strong>{item.content}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3">
        <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-primary"
        >
          {isDarkMode ? "Enable Light Mode" : "Enable Dark Mode"}
        </button>
      </div>
    </div>
  );
}
