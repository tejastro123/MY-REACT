import React, { useState } from "react";

export default function TextForm({ heading }) {
  const [text, setText] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Demo credentials
  const validEmail = "tejas.mellimpudi@gmail.com";
  const validPassword = "1234";

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === validEmail && password === validPassword) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("❌ Invalid email or password");
    }
  };

  // Logout
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setText("");
    setEmail("");
    setPassword("");
    setError("");
  };

  // Text actions
  const handleUppercase = () => setText(text.toUpperCase());
  const handleLowercase = () => setText(text.toLowerCase());
  const handleCapitalize = () =>
    setText(
      text
        .split(/\s+/)
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ")
    );
  const handleClear = () => setText("");
  const handleChange = (e) => setText(e.target.value);

  // Word count
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="container my-5">
      {/* LOGIN */}
      {!isLoggedIn && (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form
              onSubmit={handleLogin}
              className="p-4 border rounded bg-light shadow-sm"
            >
              <h3 className="mb-4 text-center">🔐 Login to Continue</h3>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="form-text">
                  Use valid email like <b>test@example.com</b>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && <div className="alert alert-danger">{error}</div>}

              <button className="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      )}

      {/* TEXT TOOLS */}
      {isLoggedIn && (
        <div className="p-4 border rounded bg-white shadow-sm">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="mb-0">{heading}</h2>
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>

          <textarea
            className="form-control mb-3"
            rows="6"
            value={text}
            onChange={handleChange}
            placeholder="✍️ Type or paste your text here..."
          ></textarea>

          {/* ACTION BUTTONS */}
          <div className="mb-3 d-flex flex-wrap gap-2">
            <button
              className="btn btn-primary"
              onClick={handleUppercase}
              disabled={!text}
            >
              UPPERCASE
            </button>
            <button
              className="btn btn-primary"
              onClick={handleLowercase}
              disabled={!text}
            >
              lowercase
            </button>
            <button
              className="btn btn-primary"
              onClick={handleCapitalize}
              disabled={!text}
            >
              Capitalize Words
            </button>
            <button
              className="btn btn-danger"
              onClick={handleClear}
              disabled={!text}
            >
              Clear
            </button>
          </div>

          {/* SUMMARY */}
          <div>
            <h4>📊 Summary</h4>
            <p>
              <b>{wordCount}</b> {wordCount === 1 ? "word" : "words"} |{" "}
              <b>{text.length}</b> characters
            </p>
            <p>
              ⏱ Estimated Read Time:{" "}
              <b>{(0.008 * wordCount).toFixed(2)} minutes</b>
            </p>
          </div>

          {/* PREVIEW */}
          <div>
            <h4>👀 Preview</h4>
            <div className="p-3 border rounded bg-light">
              {text || <span className="text-muted">Nothing to preview</span>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
