import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function PasswordReset() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent. Check your inbox.");
      navigate("/"); // Redirect back to the sign-in page after sending the reset email.
    } catch (error) {
      toast.error("Failed to send password reset email. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen mt-4"> {/* Add mt-4 for top margin */}
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Forgot Password</h1>
        <p className="text-center mb-4">
          Enter your email address to reset your password.
        </p>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 mb-4 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleResetPassword}
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
        >
          Send Reset Email
        </button>
        <p className="mt-4 text-center">
          Remember your password? <a href="/sign-in" className="text-blue-500">Sign in</a>
        </p>
      </div>
    </div>
  );
}
