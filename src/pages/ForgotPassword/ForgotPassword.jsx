import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./ForgotPassword.scss";

function ForgotPassword() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setError("Please enter your email address.");
      return;
    }

    const savedUser = localStorage.getItem("mayfair-user");

    if (!savedUser) {
      setError("No account was found with this email.");
      return;
    }

    const user = JSON.parse(savedUser);

    if (user.email !== cleanEmail) {
      setError("No account was found with this email.");
      return;
    }

    setStep(2);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const savedUser = localStorage.getItem("mayfair-user");

    if (!savedUser) {
      setError("Something went wrong. Please try again.");
      return;
    }

    const user = JSON.parse(savedUser);

    const updatedUser = {
      ...user,
      password,
    };

    localStorage.setItem("mayfair-user", JSON.stringify(updatedUser));

    setSuccess("Your password has been successfully updated.");

    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  return (
    <main className="forgot-password-page">
      <div className="forgot-password-container">
        {step === 1 && (
          <>
            <div className="forgot-header">
              <span>ACCOUNT RECOVERY</span>

              <h1>Forgot Password?</h1>

              <p>
                Enter the email associated with your Mayfair account and we'll
                help you reset your password.
              </p>
            </div>

            <form className="forgot-form" onSubmit={handleEmailSubmit}>
              {error && <p className="form-error">{error}</p>}

              <div className="form-group">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>

              <button type="submit">Continue</button>
            </form>

            <Link className="back-login" to="/login">
              ← Back to Login
            </Link>
          </>
        )}

        {step === 2 && (
          <>
            <div className="forgot-header">
              <span>RESET PASSWORD</span>

              <h1>Create New Password</h1>

              <p>Choose a new password for your Mayfair account.</p>
            </div>

            <form className="forgot-form" onSubmit={handlePasswordSubmit}>
              {error && <p className="form-error">{error}</p>}

              {success && <p className="form-success">{success}</p>}

              <div className="form-group">
                <label htmlFor="password">New Password</label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  autoComplete="new-password"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>

                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  autoComplete="new-password"
                />
              </div>

              <button type="submit">Reset Password</button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}

export default ForgotPassword;
