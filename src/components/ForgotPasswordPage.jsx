import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  ArrowLeft,
  MailCheck,
} from "lucide-react";

import logoIcon from "../assets/logo-icon.png";
import heroBlobPink from "../assets/hero-blob-pink.png";
import heroBlobPurple from "../assets/hero-blob-purple.png";
import iconMoneySack from "../assets/icon-money-sack.png";
import iconExchange from "../assets/icon-exchange.png";
import iconGlobe from "../assets/icon-globe.png";
import ellipsePinkLg from "../assets/ellipse-pink-lg.png";
import ellipsePurpleSm from "../assets/ellipse-purple-sm.png";

const C = {
  purple: "#6C5CE7",
  purpleDark: "#5B4BD6",
  purpleMid: "#8B7FF5",
  purpleLight: "#A99BFA",
  purpleBg: "#F5F3FF",
  pink: "#F2798F",
  pinkLight: "#F9A8B4",
  dark: "#14142B",
  gray: "#8B8B9E",
  border: "#ECECF3",
};

function Field({ label, icon, type = "text", placeholder, value, onChange, rightSlot }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2" style={{ color: C.dark }}>
        {label}
      </label>
      <div
        className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white transition-colors focus-within:ring-2"
        style={{ border: `1.5px solid ${C.border}`, "--tw-ring-color": C.purpleLight }}
      >
        {icon}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="flex-1 text-sm outline-none bg-transparent"
          style={{ color: C.dark }}
        />
        {rightSlot}
      </div>
    </div>
  );
}

function BrandPanel({ eyebrow, headline, subtext }) {
  return (
    <div
      className="hidden md:flex w-1/2 relative overflow-hidden flex-col justify-between px-12 py-12"
      style={{ background: `linear-gradient(160deg, ${C.purpleMid}, ${C.purpleDark})` }}
    >
      <div
        className="absolute rounded-full blur-3xl"
        style={{ width: 260, height: 260, top: -60, right: -60, background: "rgba(255,255,255,0.15)" }}
      />
      <div
        className="absolute rounded-full blur-3xl"
        style={{ width: 200, height: 200, bottom: -40, left: -40, background: "rgba(242,121,143,0.35)" }}
      />

      <div className="relative flex items-center gap-2">
        <img src={logoIcon} alt="Money" className="w-8 h-8" style={{ filter: "brightness(0) invert(1)" }} />
        <span className="text-xl font-bold text-white">Money</span>
      </div>

      <div className="relative mx-auto animate-fade-in" style={{ width: 320, height: 320 }}>
        {/* Top-left blurred purple circle */}
        <img
          src={ellipsePurpleSm}
          alt=""
          className="absolute"
          style={{ width: 90, height: 90, top: -25, left: -10 }}
        />
        {/* Pink blob */}
        <img
          src={heroBlobPink}
          alt=""
          className="absolute animate-pulse"
          style={{ width: 170, height: 140, top: 25, left: 35, animationDuration: "6s" }}
        />
        {/* Purple blob */}
        <img
          src={heroBlobPurple}
          alt=""
          className="absolute drop-shadow-xl"
          style={{ width: 240, height: 260, top: 40, left: 45 }}
        />
        {/* Bottom-right blurred pink circle */}
        <img
          src={ellipsePinkLg}
          alt=""
          className="absolute"
          style={{ width: 100, height: 100, bottom: -15, right: -15 }}
        />
        {/* Money sack card */}
        <div
          className="absolute bg-white rounded-2xl shadow-xl flex items-center justify-center transition-transform hover:scale-110"
          style={{ width: 50, height: 50, top: 100, left: 15 }}
        >
          <img src={iconMoneySack} alt="Money sack" style={{ width: 24, height: 24 }} />
        </div>
        {/* Exchange card */}
        <div
          className="absolute bg-white rounded-2xl shadow-xl flex items-center justify-center transition-transform hover:scale-110"
          style={{ width: 52, height: 52, bottom: 40, left: 25 }}
        >
          <img src={iconExchange} alt="Coins" style={{ width: 24, height: 24 }} />
        </div>
        {/* Globe card */}
        <div
          className="absolute bg-white rounded-2xl shadow-xl flex items-center justify-center transition-transform hover:scale-110"
          style={{ width: 52, height: 52, bottom: 20, right: 25 }}
        >
          <img src={iconGlobe} alt="Globe" style={{ width: 26, height: 26 }} />
        </div>
      </div>

      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-wider text-white/70 mb-2">{eyebrow.toUpperCase()}</p>
        <h2 className="text-3xl font-extrabold text-white mb-3 leading-tight">{headline}</h2>
        <p className="text-sm text-white/80 leading-relaxed max-w-sm">{subtext}</p>
      </div>
    </div>
  );
}
export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex bg-white" style={{ fontFamily: "'Poppins', 'Segoe UI', sans-serif" }}>
      <BrandPanel
        eyebrow="Account recovery"
        headline="Forgot your password? No worries."
        subtext="We'll help you get back into your Money account quickly and securely."
      />

      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-16 py-12">
        <div className="md:hidden flex items-center gap-2 mb-10">
          <img src={logoIcon} alt="Money" className="w-8 h-8" />
          <span className="text-xl font-bold" style={{ color: C.purple }}>
            Money
          </span>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Link to="/login" className="inline-flex items-center gap-1.5 text-sm font-semibold mb-8" style={{ color: C.purple }}>
            <ArrowLeft size={16} />
            Back to login
          </Link>

          {!sent ? (
            <>
              <h1 className="text-3xl font-extrabold mb-2" style={{ color: C.dark }}>
                Forgot Password?
              </h1>
              <p className="text-sm mb-8 leading-relaxed" style={{ color: C.gray }}>
                Enter the email address linked to your account and we&apos;ll send you a link to reset your password.
              </p>

              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) {
                    navigate("/reset-password");
                  }
                }}
              >
                <Field
                  label="Email Address"
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={<Mail size={18} color={C.gray} />}
                />

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full text-sm font-semibold text-white shadow-lg mt-2"
                  style={{ background: `linear-gradient(135deg, ${C.purpleLight}, ${C.purple})` }}
                >
                  Send Reset Link
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: C.purpleBg }}
              >
                <MailCheck size={28} color={C.purple} />
              </div>
              <h1 className="text-2xl font-extrabold mb-3" style={{ color: C.dark }}>
                Check your email
              </h1>
              <p className="text-sm leading-relaxed mb-8" style={{ color: C.gray }}>
                We&apos;ve sent a password reset link to{" "}
                <span className="font-semibold" style={{ color: C.dark }}>
                  {email}
                </span>
                . The link will expire in 30 minutes.
              </p>
              <button
                onClick={() => setSent(false)}
                className="text-sm font-semibold"
                style={{ color: C.purple }}
              >
                Didn&apos;t get it? Resend email
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
