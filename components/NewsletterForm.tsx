"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterForm() {
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email")?.toString().trim() ?? "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setMessage("Newsletter sign-up isn’t open yet — please check back soon.");
  };

  return (
    <form className="rs-news-form" onSubmit={onSubmit} noValidate>
      <label className="visually-hidden" htmlFor="rs-email">
        Email address
      </label>
      <input id="rs-email" name="email" type="email" placeholder="Enter your email (optional)" autoComplete="email" />
      <button type="submit" className="hp-btn hp-btn-blue">
        SUBSCRIBE
      </button>
      <p className="rs-news-msg" role="status">
        {message}
      </p>
    </form>
  );
}
