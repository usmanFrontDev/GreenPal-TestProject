import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0A3755] text-white pt-10 pb-6 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        {/* ===== Top Brand Section ===== */}
        <div className="text-center mb-8">
          <h2 className="font-bold text-xl">Logo</h2>
          <p className="text-gray-200 text-sm max-w-2xl mx-auto leading-relaxed">
            GreenPal is hands-down the easiest way to book a local lawn care
            company for yard maintenance services at an affordable price. If
            you’re looking for same-day lawn mowing or next-day lawn cutting
            services, you’re at the right place.
          </p>
          <p className="text-gray-200 text-sm max-w-2xl mx-auto leading-relaxed mt-3">
            GreenPal is the easiest way to book a lawn mowing service near you
            at the touch of a button without even having to make a phone call.
          </p>
        </div>

        {/* ===== Links Section ===== */}
        <div className="grid sm:grid-cols-3 gap-8 text-sm mt-10">
          {/* Column 1 */}
          <div>
            <h4 className="text-white font-semibold mb-3">GreenPal</h4>
            <ul className="space-y-1 text-gray-200">
              <li>Lawn Care Blog</li>
              <li>Snow Removal Services</li>
              <li>Frequently Asked Questions</li>
              <li>Affordable Lawn Care</li>
              <li>Lawn Care Near Me</li>
              <li>Lawn Mowing Tips</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-3">Providers</h4>
            <ul className="space-y-1 text-gray-200">
              <li>Apply to be a GreenPal</li>
              <li>Business Guides</li>
              <li>Vendor Free Lawn</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-semibold mb-3">Connect with us</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="hover:text-[#FF6F01]"
                aria-label="Facebook"
                title="Facebook"
              >
                {/* Facebook */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M22 12.073C22 6.487 17.523 2 12 2S2 6.487 2 12.073C2 17.089 5.657 21.213 10.437 21.987v-6.987H8.077v-2.927h2.36V9.845c0-2.337 1.393-3.625 3.526-3.625.999 0 2.044.179 2.044.179v2.247h-1.148c-1.132 0-1.484.703-1.484 1.423v1.712h2.523l-.403 2.927h-2.12V21.99C18.343 21.214 22 17.089 22 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-[#FF6F01]"
                aria-label="Twitter"
                title="Twitter"
              >
                {/* Twitter */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M22.162 5.656c-.66.293-1.369.49-2.114.578.76-.455 1.344-1.176 1.62-2.035-.713.424-1.503.731-2.344.898C18.97 4.03 17.92 3.5 16.78 3.5c-1.99 0-3.605 1.626-3.605 3.632 0 .285.032.563.094.83C9.72 7.8 7.1 6.38 5.2 4.06c-.312.548-.49 1.188-.49 1.87 0 1.29.656 2.43 1.653 3.095-.61-.02-1.187-.187-1.69-.468v.047c0 1.803 1.274 3.307 2.964 3.65-.31.085-.64.13-.98.13-.24 0-.475-.024-.704-.068.475 1.49 1.86 2.576 3.497 2.606-1.282 1.01-2.9 1.61-4.66 1.61-.303 0-.602-.018-.897-.053 1.67 1.06 3.65 1.677 5.78 1.677 6.937 0 10.735-5.862 10.735-10.94 0-.167-.003-.334-.01-.5.737-.544 1.374-1.224 1.88-2.0z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-[#FF6F01]"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                {/* LinkedIn */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8.5h4.56V23H.2V8.5zM8.5 8.5h4.37v1.99h.06c.61-1.16 2.1-2.38 4.32-2.38C22.8 8.11 24 10.23 24 14.09V23h-4.56v-7.03c0-1.68-.03-3.83-2.34-3.83-2.35 0-2.71 1.84-2.71 3.72V23H8.5V8.5z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-[#FF6F01]"
                aria-label="Instagram"
                title="Instagram"
              >
                {/* Instagram */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3.2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
              </a>
            </div>
            <h4 className="text-white font-semibold mb-3">
              Get the remote control for your lawn
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-white text-black px-4 py-2 rounded-md flex items-center justify-center gap-2 font-semibold text-sm hover:bg-gray-100"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Play_2022_logo.svg"
                  alt="Play Store"
                  className="h-5"
                />
                Play Store
              </a>
              <a
                href="#"
                className="bg-white text-black px-4 py-2 rounded-md flex items-center justify-center gap-2 font-semibold text-sm hover:bg-gray-100"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="App Store"
                  className="h-4"
                />
                App Store
              </a>
            </div>
          </div>
        </div>

        {/* ===== Bottom Line ===== */}
        <div className="border-t border-gray-500 mt-10 pt-4 text-center text-xs text-gray-300">
          © {new Date().getFullYear()} GreenPal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
