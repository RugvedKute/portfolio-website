import React from "react";

export default function Footer() {
  return (
    <div className="container text-white mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-200">Rugved Kute</h3>
          <p className="text-base">Software Engineer</p>
        </div>
        <div className="space-y-2">
          <p className="text-base">
            <a
              className="hover:text-gray-300"
              href="mailto:rugvedkute02@mail.com"
            >
              rugvedkute02@gmail.com
            </a>
          </p>
          <p className="text-base">
            <a className="hover:text-gray-300" href="tel:8779682229">
              +91 8779682229
            </a>
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-base">
            <a
              className="hover:text-gray-300"
              href="https://www.linkedin.com/in/rugved-kute-bb34b3213/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
          <p className="text-base">
            <a
              className="hover:text-gray-300"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </a>
          </p>
          <p className="text-base">
            <a
              className="hover:text-gray-300"
              href="https://github.com/RugvedKute"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-base">© 2024 Rugved Kute. All rights reserved.</p>
          <p className="text-base">
            Designed and built with by Rugved Kute ♥️
            <a
              className="hover:text-gray-300"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            ></a>
          </p>
        </div>
      </div>
    </div>
  );
}
