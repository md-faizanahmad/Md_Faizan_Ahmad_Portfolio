"use client";

import React from "react";

interface TechIconProps {
  name: string;
}

export default function TechIconMap({ name }: TechIconProps) {
  const normKey = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  switch (normKey) {
    case "react":
    case "reactjs":
      return (
        <svg
          className="w-4 h-4 text-[#61DAFB] animate-[spin_20s_linear_infinite]"
          viewBox="-11.5 -10.23174 23 20.46348"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <circle cx="0" cy="0" r="2.05" fill="currentColor" />
          <g stroke="currentColor">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "typescript":
    case "ts":
      return (
        <svg
          className="w-3.5 h-3.5 fill-current text-[#3178C6]"
          viewBox="0 0 24 24"
        >
          <path d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zm11.233 12.87c-.122-.924-.717-1.442-1.74-1.442-.98 0-1.53.535-1.53 1.25 0 .848.653 1.152 1.815 1.603 1.545.6 2.585 1.218 2.585 2.923 0 1.815-1.427 2.935-3.64 2.935-2.27 0-3.5-1.168-3.654-2.887h1.942c.11 1.01 1.028 1.417 1.751 1.417.848 0 1.57-.428 1.57-1.255 0-.89-.665-1.173-1.925-1.67-1.448-.56-2.477-1.242-2.477-2.844 0-1.633 1.34-2.733 3.321-2.733 1.956 0 3.19.98 3.382 2.45h-1.995zm6.818-2.613h-2.316v7.712h-2.02v-7.712h-2.31v-1.64h6.646v1.64z" />
        </svg>
      );
    case "tailwindcss":
    case "tailwind":
      return (
        <svg
          className="w-4 h-4 fill-current text-[#38BDF8]"
          viewBox="0 0 24 24"
        >
          <path d="M12 6.036c-2.286 0-3.81 1.143-4.572 3.428 1.143-1.142 2.286-1.524 3.428-1.142 1.002.333 1.718 1.062 2.511 1.875C14.667 11.52 16.214 13 19.428 13c2.286 0 3.81-1.143 4.572-3.428-1.143 1.142-2.286 1.524-3.428 1.142-.889-.296-1.525-.941-2.261-1.689C17.067 7.751 15.386 6.036 12 6.036zM4.571 13c-2.285 0-3.81 1.143-4.571 3.428 1.143-1.142 2.285-1.524 3.428-1.142 1.002.333 1.718 1.062 2.511 1.875 1.301 1.326 2.848 2.839 6.063 2.839 2.286 0 3.81-1.143 4.571-3.428-1.143 1.142-2.285 1.524-3.428 1.142-.889-.296-1.524-.941-2.26-1.689C9.643 14.715 7.962 13 4.571 13z" />
        </svg>
      );
    case "tanstackquery":
    case "reactquery":
      return (
        <svg
          className="w-4 h-4 fill-none stroke-current text-[#FF4154]"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case "axios":
      return (
        <svg
          className="w-4 h-4 fill-current text-[#5A29E4]"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 22h4.5l2.5-5h6l2.5 5H22L12 2zm-2 12l2-4 2 4h-4z" />
        </svg>
      );
    case "zod":
      return (
        <svg
          className="w-3.5 h-3.5 fill-current text-[#3E63DD]"
          viewBox="0 0 24 24"
        >
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.527 10-10 10zm-3.6-13.6v1.8h4.5L8.4 15.1v1.7h6.8v-1.8h-4.5l4.5-4.9V8.4H8.4z" />
        </svg>
      );
    case "lucidereact":
      return (
        <svg
          className="w-4 h-4 fill-none stroke-current text-[#F43F5E]"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
          <line x1="12" y1="22" x2="12" y2="15.5" />
          <polyline points="22 8.5 12 15.5 2 8.5" />
          <polyline points="12 2 12 15.5" />
        </svg>
      );
    case "mongodb":
    case "mongoose":
      return (
        <svg
          className="w-4 h-4 fill-current text-[#47A248]"
          viewBox="0 0 24 24"
        >
          <path d="M17.15 11.22c-.11-.53-.35-1.29-.68-2.03-.54-1.18-1.28-2.29-2-3.07a16.89 16.89 0 0 0-1.89-1.74l-.58-.45-.14-.1-.13.1c-.24.18-1 .76-1.71 1.5A18.81 18.81 0 0 0 7.82 8.32c-.41.84-.71 1.77-.85 2.5a8.77 8.77 0 0 0 0 2.53c.12.59.37 1.45.74 2.27A17.17 17.17 0 0 0 10 18.66c.64.57 1.25 1 1.63 1.23l.37.23.38-.23c.33-.21.89-.59 1.49-1.12a19.46 19.46 0 0 0 2.41-2.65c.44-.61.81-1.37 1-2.12a9.14 9.14 0 0 0-.15-2.78zM12 18.15V4.62c.94.9 2.76 3.19 2.76 7.42S12.94 17.25 12 18.15z" />
        </svg>
      );
    case "cloudinary":
      return (
        <svg
          className="w-4 h-4 fill-current text-[#3448C5]"
          viewBox="0 0 24 24"
        >
          <path d="M19.8 10.1c.1-.4.2-.9.2-1.3 0-3.2-2.6-5.8-5.8-5.8-.8 0-1.5.2-2.2.5-.9-1.4-2.5-2.3-4.3-2.3C4.8 1.2 2.5 3.5 2.5 6.4c0 .4 0 .7.1 1.1C1.1 8.3.2 9.7.2 11.4c0 2.4 1.9 4.3 4.3 4.3h15.3c2.3 0 4.2-1.9 4.2-4.2.1-1.5-.7-2.9-2.2-3.4zm-4.7 3.2l-3.1-4.3-3.1 4.3H6.8l5.2-7.2 5.2 7.2h-2.1z" />
        </svg>
      );
    case "vercel":
    case "vercelfunctions":
    case "serverlessarchitecture":
      return (
        <svg
          className="w-3.5 h-3.5 fill-current text-black dark:text-white"
          viewBox="0 0 512 512"
        >
          <path d="M256 48l240 416H16z" />
        </svg>
      );
    case "jwt":
    case "bcrypt":
    case "authentication":
    case "google2fa":
      return (
        <svg
          className="w-4 h-4 fill-none stroke-current text-[#00C853]"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case "razorpay":
      return (
        <svg
          className="w-4 h-4 text-[#0B72E7] fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M22.4 0L13.1 9.4l4.2 4.3L24 6.4z M10.9 2.2L0 13.1h6.6L15 4.7z M3.8 16.3L6.1 24l11.7-11.7H11z" />
        </svg>
      );
    case "nodejsesmodules":
    case "nodejs":
    case "expressjs":
      return (
        <svg
          className="w-4 h-4 fill-current text-[#339933]"
          viewBox="0 0 24 24"
        >
          <path d="M12 1L2.4 6.5v11L12 23l9.6-5.5v-11zm0 2.5l7.4 4.3v8.4L12 20.5l-7.4-4.3v-8.4zM12 6.2a5.8 5.8 0 0 0-5.8 5.8c0 3.2 2.6 5.8 5.8 5.8a5.8 5.8 0 0 0 5.8-5.8c0-3.2-2.6-5.8-5.8-5.8z" />
        </svg>
      );
    default:
      return (
        <svg
          className="w-3.5 h-3.5 fill-none stroke-current text-neutral-400"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
}
