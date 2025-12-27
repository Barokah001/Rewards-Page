import React, { useState } from "react";
import { supabase } from "../../lib/supabase";

interface AuthFormProps {
  onAuthSuccess: () => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ onAuthSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  // FIX: Added the missing loading state
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;

        // AUTO-LOGIN: If signup is successful, immediately sign in to bypass email link
        if (data.user) {
          const { error: signInError } = await supabase.auth.signInWithPassword(
            { email, password }
          );
          if (signInError) throw signInError;
          onAuthSuccess();
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        onAuthSuccess();
      }
    } catch (error) {
      // FIX: Removed 'any' and added type-safe error handling
      const message =
        error instanceof Error ? error.message : "An unexpected error occurred";
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7FF] flex items-center justify-center p-4">
      <div className="bg-white rounded-[32px] shadow-xl p-10 w-full max-w-md border border-purple-50">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-[#8B5CF6] rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-4">
            f
          </div>
          <h2 className="text-3xl font-black text-gray-900">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h2>
        </div>

        <form onSubmit={handleAuth} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#8B5CF6] text-white py-4 rounded-2xl font-bold hover:bg-[#7C3AED] transition-all shadow-lg disabled:opacity-50"
          >
            {loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="w-full mt-6 text-sm font-bold text-[#8B5CF6] hover:text-purple-800 transition"
        >
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};
