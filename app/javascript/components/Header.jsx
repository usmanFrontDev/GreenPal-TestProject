import React from "react";

const Header = () => {
  return (
  <nav className="w-full py-1 bg-[#00A3E7] backdrop-blur-md border-b border-white/20">
              <div className="px-6 py-4 flex justify-between items-center">
                <div className="text-white text-3xl font-bold">
                  GreenPal
                </div>
                <div className="space-x-4">
              {/* <Search /> */}
                </div>
              </div>
            </nav>
  )
}

export default Header