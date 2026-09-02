import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setError("Please enter your email.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    const result = login(cleanEmail, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    const from = location.state?.from || "/account";

    navigate(from, {
      replace: true,
    });
  };

  return (
    <main className="login-page">
      <div className="login-container">
        <div className="login-header">
          <span>WELCOME BACK</span>

          <h1>Sign In</h1>

          <p>
            Sign in to manage your orders, wishlist, saved addresses and
            account.
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {error && <p className="form-error">{error}</p>}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>
          <button type="submit" className="login-submit">
            Sign In
          </button>
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </form>

        <div className="login-footer">
          <span>Don't have an account?</span>

          <Link to="/signup">Create Account</Link>
        </div>

        <Link to="/" className="continue-shopping">
          ← Continue Shopping
        </Link>
      </div>
    </main>
  );
}

export default Login;
