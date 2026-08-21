import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  ArrowLeft,
  ArrowRight,
  Wifi,
  Quote,
  Check,
  LogOut,
} from "lucide-react";

import logoIcon from "../assets/logo-icon.png";
import heroBlobPink from "../assets/hero-blob-pink.png";
import heroBlobPurple from "../assets/hero-blob-purple.png";
import iconMoneySack from "../assets/icon-money-sack.png";
import iconExchange from "../assets/icon-exchange.png";
import iconGlobe from "../assets/icon-globe.png";
import ellipsePinkLg from "../assets/ellipse-pink-lg.png";
import ellipsePinkSm from "../assets/ellipse-pink-sm.png";
import ellipsePurpleSm from "../assets/ellipse-purple-sm.png";
import iconTrackMove from "../assets/icon-track-move.png";
import iconLifetimeSupport from "../assets/icon-lifetime-support.png";
import iconTopSecurity from "../assets/icon-top-security.png";
import iconProfessionalsGuide from "../assets/icon-professionals-guide.png";
import group44Card from "../assets/Group 44.png";
import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
import avatar5 from "../assets/avatar-5.png";
import avatar6 from "../assets/avatar-6.png";
import avatar7 from "../assets/avatar-7.png";
import avatar8 from "../assets/avatar-8.png";
import avatar9 from "../assets/avatar-9.png";

// ---- Color tokens sampled from the reference design ----
const C = {
  purple: "#6C5CE7",
  purpleDark: "#5B4BD6",
  purpleMid: "#8B7FF5",
  purpleLight: "#A99BFA",
  purpleBg: "#F5F3FF",
  pink: "#F2798F",
  pinkLight: "#F9A8B4",
  pinkBg: "#FDECEF",
  green: "#16C79A",
  greenBg: "#E4FBF4",
  orange: "#F6A93E",
  orangeBg: "#FEF3E2",
  dark: "#14142B",
  gray: "#8B8B9E",
  grayLight: "#C9C9D6",
  border: "#ECECF3",
};

function Avatar({ size, top, left, right, bottom, src, ring }) {
  return (
    <div
      className="absolute rounded-full overflow-hidden shadow-md"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        border: ring ? `3px solid ${C.purple}` : "3px solid #fff",
      }}
    >
      <img src={src} alt="" className="w-full h-full object-cover" />
    </div>
  );
}

function NavLink({ children, hasChevron, href, onClick }) {
  return (
    <a
      href={href || "#"}
      onClick={onClick}
      className="flex items-center gap-1 text-[15px] font-medium hover:opacity-70 transition-opacity"
      style={{ color: C.dark }}
    >
      {children}
      {hasChevron && <ChevronDown size={16} />}
    </a>
  );
}

function FeatureCard({ iconSrc, title, desc, filled }) {
  return (
    <div
      className="rounded-2xl p-8 flex flex-col items-center text-center bg-white"
      style={{ border: `1px solid ${C.border}` }}
    >
      <img src={iconSrc} alt="" className="w-16 h-16 mb-6" />
      <h3 className="text-lg font-bold mb-3" style={{ color: C.dark }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed mb-6" style={{ color: C.gray }}>
        {desc}
      </p>
      <button
        className="mt-auto px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
        style={
          filled
            ? { background: C.purple, color: "#fff" }
            : { border: `1.5px solid ${C.purple}`, color: C.purple }
        }
      >
        Read More
      </button>
    </div>
  );
}

function CheckItem({ text }) {
  return (
    <li className="flex items-center gap-3">
      <span
        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: C.pink }}
      >
        <Check size={12} strokeWidth={3} color="#fff" />
      </span>
      <span className="text-[15px]" style={{ color: C.dark, opacity: 0.75 }}>
        {text}
      </span>
    </li>
  );
}

function PricingCard({ plan, price, blurb, features, highlighted, cta }) {
  return (
    <div
      className={`rounded-2xl p-8 flex flex-col h-full ${highlighted ? "shadow-2xl" : ""}`}
      style={{
        background: highlighted ? C.purple : "#fff",
        border: highlighted ? "none" : `1px solid ${C.border}`,
      }}
    >
      <p
        className="text-sm font-semibold mb-4"
        style={{ color: highlighted ? "rgba(255,255,255,0.8)" : C.gray }}
      >
        {plan}
      </p>
      <div className="flex items-end gap-1 mb-3">
        <span
          className="text-4xl font-extrabold"
          style={{ color: highlighted ? "#fff" : C.dark }}
        >
          {price}
        </span>
        <span
          className="text-sm mb-1"
          style={{ color: highlighted ? "rgba(255,255,255,0.75)" : C.gray }}
        >
          /month
        </span>
      </div>
      <p
        className="text-sm leading-relaxed mb-6"
        style={{ color: highlighted ? "rgba(255,255,255,0.75)" : C.gray }}
      >
        {blurb}
      </p>
      <p
        className="text-sm font-bold mb-4"
        style={{ color: highlighted ? "#fff" : C.dark }}
      >
        What&apos;s included:
      </p>
      <ul className="space-y-3 mb-8">
        {features.map((f) => (
          <li
            key={f}
            className="text-sm"
            style={{ color: highlighted ? "rgba(255,255,255,0.85)" : C.gray }}
          >
            {f}
          </li>
        ))}
      </ul>
      <button
        className="mt-auto w-full py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
        style={
          highlighted
            ? { background: "#fff", color: C.purple }
            : { border: `1.5px solid ${C.purple}`, color: C.purple }
        }
      >
        {cta}
      </button>
    </div>
  );
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div id="home" className="w-full min-h-screen bg-white" style={{ fontFamily: "'Poppins', 'Segoe UI', sans-serif" }}>
      {/* ---------------- NAVBAR ---------------- */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoIcon} alt="Money" className="w-8 h-8" />
            <span className="text-xl font-bold" style={{ color: C.purple }}>
              Money
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#service">Service</NavLink>
            <NavLink hasChevron href="#business">Business</NavLink>
            <NavLink href="#help">Help</NavLink>
          </nav>

          {user ? (
            <div className="relative hidden md:block" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-3 rounded-full px-4 py-2 border transition-all hover:bg-black/5"
                style={{ borderColor: C.border }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-sm"
                  style={{ background: "#E6EEFA", color: C.purpleDark }}
                >
                  {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>
                <span className="text-[15px] font-semibold" style={{ color: C.dark }}>
                  {user.name || "User"}
                </span>
                {dropdownOpen ? <ChevronUp size={16} color={C.gray} /> : <ChevronDown size={16} color={C.gray} />}
              </button>

              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-3 w-72 bg-white rounded-3xl p-6 shadow-2xl z-50 border animate-fade-in"
                  style={{ borderColor: C.border }}
                >
                  <div className="mb-4">
                    <h4 className="text-base font-bold" style={{ color: C.dark }}>
                      {user.name || "User"}
                    </h4>
                    <p className="text-xs break-all mt-0.5 font-medium text-slate-500">
                      {user.email || ""}
                    </p>
                  </div>
                  <div className="border-t my-4" style={{ borderColor: C.border }} />
                  <button
                    onClick={() => {
                      localStorage.removeItem("user");
                      setUser(null);
                      setDropdownOpen(false);
                    }}
                    className="flex items-center gap-3 w-full py-2 text-sm font-bold text-red-500 hover:opacity-80 transition-opacity uppercase tracking-wider text-left"
                  >
                    <LogOut size={16} className="text-red-500" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="hidden md:block px-6 py-2.5 rounded-full text-sm font-semibold text-white shadow-md"
              style={{ background: `linear-gradient(135deg, ${C.purpleLight}, ${C.purple})` }}
            >
              Sign up
            </Link>
          )}

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4 border-t pt-4" style={{ borderColor: C.border }}>
            <NavLink href="#home" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink href="#service" onClick={() => setMenuOpen(false)}>Service</NavLink>
            <NavLink hasChevron href="#business" onClick={() => setMenuOpen(false)}>Business</NavLink>
            <NavLink href="#help" onClick={() => setMenuOpen(false)}>Help</NavLink>
            
            {user ? (
              <div className="mt-2 p-4 rounded-2xl bg-gray-50 border flex flex-col gap-3" style={{ borderColor: C.border }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-base"
                    style={{ background: "#E6EEFA", color: C.purpleDark }}
                  >
                    {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold" style={{ color: C.dark }}>
                      {user.name || "User"}
                    </h4>
                    <p className="text-xs text-slate-500" style={{ color: C.gray }}>
                      {user.email || ""}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    localStorage.removeItem("user");
                    setUser(null);
                    setMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 w-full mt-2 py-3 rounded-xl border border-red-200 text-xs font-bold text-red-500 bg-red-50/50 hover:bg-red-50"
                >
                  <LogOut size={14} />
                  SIGN OUT
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-6 py-2.5 rounded-full text-sm font-semibold text-white w-full block text-center"
                style={{ background: C.purple }}
              >
                Sign up
              </Link>
            )}
          </div>
        )}
      </header>

      {/* ---------------- HERO ---------------- */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1
            className="text-5xl md:text-[3.4rem] font-extrabold leading-[1.12] mb-6"
            style={{ color: C.dark }}
          >
            Fastest Money
            <br />
            Transfer, Shopping
            <br />
            From One Account
          </h1>
          <p className="text-[15px] leading-relaxed mb-8 max-w-md" style={{ color: C.gray }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            tempus felis vitae sit est quisque.
          </p>
          <div className="flex items-center gap-4">
            <button
              className="px-7 py-3.5 rounded-full text-sm font-semibold text-white shadow-lg"
              style={{ background: `linear-gradient(135deg, ${C.purpleLight}, ${C.purple})` }}
            >
              Read More
            </button>
            <button
              className="px-7 py-3.5 rounded-full text-sm font-semibold"
              style={{ border: `1.5px solid ${C.purple}`, color: C.purple }}
            >
              Get a Quote
            </button>
          </div>
        </div>

        {/* Hero blob illustration */}
        <div className="relative mx-auto" style={{ width: 380, height: 420 }}>
          <img
            src={ellipsePurpleSm}
            alt=""
            className="absolute"
            style={{ width: 110, height: 110, top: -30, left: -10 }}
          />
          <img
            src={heroBlobPink}
            alt=""
            className="absolute"
            style={{ width: 210, height: 175, top: 30, left: 45 }}
          />
          <img
            src={heroBlobPurple}
            alt=""
            className="absolute drop-shadow-2xl"
            style={{ width: 300, height: 328, top: 50, left: 60 }}
          />
          <img
            src={ellipsePinkLg}
            alt=""
            className="absolute"
            style={{ width: 120, height: 120, bottom: -10, right: -15 }}
          />
          <div
            className="absolute bg-white rounded-2xl shadow-xl flex items-center justify-center transition-transform hover:scale-110"
            style={{ width: 56, height: 56, top: 130, left: 20 }}
          >
            <img src={iconMoneySack} alt="" style={{ width: 28, height: 28 }} />
          </div>
          <div
            className="absolute bg-white rounded-2xl shadow-xl flex items-center justify-center transition-transform hover:scale-110"
            style={{ width: 60, height: 60, bottom: 50, left: 35 }}
          >
            <img src={iconExchange} alt="" style={{ width: 28, height: 28 }} />
          </div>
          <div
            className="absolute bg-white rounded-2xl shadow-xl flex items-center justify-center transition-transform hover:scale-110"
            style={{ width: 60, height: 60, bottom: 25, right: 30 }}
          >
            <img src={iconGlobe} alt="" style={{ width: 32, height: 32 }} />
          </div>
        </div>
      </section>

      {/* ---------------- WELCOME / FEATURES ---------------- */}
      <section id="service" className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: C.dark }}>
            Welcome To
            <br />
            Our Online Platform
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: C.gray }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum
            purus bibendum risus nibh cursus integer dolor, commodo. Amet,
            aliquam condimentum.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            iconSrc={iconTrackMove}
            title="Track Your Move"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
          />
          <FeatureCard
            iconSrc={iconLifetimeSupport}
            title="Lifetime Support"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
            filled
          />
          <FeatureCard
            iconSrc={iconTopSecurity}
            title="Top Security"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
          />
          <FeatureCard
            iconSrc={iconProfessionalsGuide}
            title="Professionals Guide"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
          />
        </div>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section id="business" className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5" style={{ color: C.dark }}>
            How It Works?
          </h2>
          <p className="text-sm leading-relaxed mb-8 max-w-md" style={{ color: C.gray }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum
            purus bibendum risus nibh cursus integer dolor, commodo. Amet,
            aliquam condimentum.
          </p>
          <ul className="space-y-4">
            <CheckItem text="Use the right sales structure" />
            <CheckItem text="Make decisions with data" />
            <CheckItem text="Invest in sales enablement" />
            <CheckItem text="Use the right sales structure" />
            <CheckItem text="Make decisions with data" />
          </ul>
        </div>

        {/* Credit cards illustration */}
        <div className="relative mx-auto flex items-center justify-center" style={{ width: 380, height: 340 }}>
          <img
            src={ellipsePinkSm}
            alt=""
            className="absolute z-0"
            style={{ width: 80, height: 80, top: 40, right: 10 }}
          />
          <img
            src={group44Card}
            alt="Credit Cards"
            className="relative z-10 w-full h-auto object-contain"
          />
          <img
            src={ellipsePurpleSm}
            alt=""
            className="absolute z-0"
            style={{ width: 80, height: 80, bottom: 40, left: 10 }}
          />
        </div>
      </section>

      {/* ---------------- PRICING ---------------- */}
      <section className="py-20" style={{ background: C.purpleBg }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: C.dark }}>
              Our Exclusive Features
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: C.gray }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum
              purus bibendum risus nibh cursus integer dolor, commodo. Amet,
              aliquam condimentum.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-4 items-stretch">
            <PricingCard
              plan="Starter Plan"
              price="$29"
              blurb="This package is suitable for teams 1-15 people."
              features={["10 GB Dedicated Hosting Free", "Best for Developers, Freelancers", "1 Year Support"]}
              cta="Read More"
            />
            <PricingCard
              plan="Basic Plan"
              price="$79"
              blurb="This package is suitable for teams 1-50 people."
              features={[
                "15 GB Dedicated Hosting Free",
                "Best for Developers, Freelancers",
                "5 Year Support",
                "Free Custom Domain",
                "Basic Statistics",
              ]}
              highlighted
              cta="Buy Now"
            />
            <PricingCard
              plan="Premium Plan"
              price="$129"
              blurb="This package is suitable for teams 1-100 people."
              features={[
                "20 GB Dedicated Hosting Free",
                "Best for Developers, Freelancers",
                "Unlimited Support",
                "Free Custom Domain",
                "Full Statistics",
              ]}
              cta="Read More"
            />
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section id="help" className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: C.dark }}>
            Client Testimonial
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: C.gray }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum
            purus bibendum risus nibh cursus integer dolor, commodo. Amet,
            aliquam condimentum.
          </p>
        </div>

        <div className="relative mx-auto hidden md:block" style={{ maxWidth: 1000, height: 420 }}>
          {/* Left side avatars */}
          <Avatar size={60} top={20} left={100} src={avatar7} />
          <Avatar size={80} top={190} left={0} src={avatar2} />
          <Avatar size={56} top={130} left={180} src={avatar1} />
          <Avatar size={50} top={310} left={110} src={avatar5} />

          {/* Right side avatars */}
          <Avatar size={60} top={20} right={100} src={avatar4} />
          <Avatar size={80} top={190} right={0} src={avatar9} />
          <Avatar size={56} top={130} right={180} src={avatar6} />
          <Avatar size={50} top={310} right={110} src={avatar8} />

          {/* Center Card */}
          <div
            className="absolute bg-white shadow-xl rounded-3xl p-8 flex flex-col items-center text-center border animate-fade-in"
            style={{
              top: 60,
              left: "50%",
              transform: "translateX(-50%)",
              width: 540,
              borderColor: C.border,
            }}
          >
            {/* Active center avatar */}
            <div
              className="absolute rounded-full overflow-hidden shadow-md"
              style={{
                width: 90,
                height: 90,
                top: -45,
                left: "50%",
                transform: "translateX(-50%)",
                border: "4px solid #fff",
              }}
            >
              <img src={avatar3} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="pt-10 flex flex-col items-center w-full">
              <Quote size={28} color={C.purpleLight} className="mb-3 opacity-30" />
              <p className="text-[15px] leading-relaxed mb-6 px-4" style={{ color: C.dark, opacity: 0.75 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
                cum purus bibendum risus nibh cursus integer dolor, commodo.
                Amet, aliquam condimentum.
              </p>
              
              <div className="flex items-center justify-center gap-6 w-full mt-2">
                <button
                  className="w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-opacity hover:opacity-90"
                  style={{ background: C.pink }}
                >
                  <ArrowLeft size={16} color="#fff" />
                </button>
                <div className="flex flex-col items-center">
                  <p className="font-bold text-sm" style={{ color: C.dark }}>
                    Johnson Mark
                  </p>
                  <p className="text-xs mt-1" style={{ color: C.gray }}>
                    California, USA
                  </p>
                </div>
                <button
                  className="w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-opacity hover:opacity-90"
                  style={{ background: C.pink }}
                >
                  <ArrowRight size={16} color="#fff" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile fallback */}
        <div className="md:hidden flex flex-col items-center text-center px-6">
          <div className="relative" style={{ width: 64, height: 64 }}>
            <Avatar size={64} top={0} left={0} src={avatar3} ring />
          </div>
          <div className="mt-6">
            <Quote size={28} color={C.purpleLight} className="mb-3 mx-auto" />
            <p className="text-[15px] leading-relaxed mb-4" style={{ color: C.dark, opacity: 0.75 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
              cum purus bibendum risus nibh cursus integer dolor, commodo.
            </p>
            <p className="font-bold text-sm" style={{ color: C.dark }}>
              Johnson Mark
            </p>
            <p className="text-xs mt-1" style={{ color: C.gray }}>
              California, USA
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- CTA BANNER ---------------- */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div
          className="rounded-3xl px-8 md:px-14 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: `linear-gradient(120deg, ${C.purpleMid}, ${C.purple})` }}
        >
          <h3 className="text-2xl md:text-3xl font-extrabold text-white text-center md:text-left leading-snug">
            Grow your business fast
            <br />
            with Sark SaaS Landing.
          </h3>
          <button
            className="px-7 py-3.5 rounded-full text-sm font-semibold whitespace-nowrap shadow-lg"
            style={{ background: "#fff", color: C.purple }}
          >
            Download Now
          </button>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { title: "Company", links: ["About", "Features", "Works", "Career"] },
              { title: "Help", links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"] },
              { title: "Resources", links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"] },
              { title: "Links", links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"] },
            ].map((col) => (
              <div key={col.title}>
                <p className="font-bold text-sm mb-5" style={{ color: C.dark }}>
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm hover:opacity-70 transition-opacity" style={{ color: C.gray }}>
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
