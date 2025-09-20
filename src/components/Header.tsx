import { Search, ShoppingBag } from "lucide-react";
import { navigateTo } from "./Router";
import { useCart } from "./CartContext";

export function Header() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const handleNavigation = (path: string) => {
    navigateTo(path);
  };

  return (
    <header className="bg-[rgba(22,22,23,0.8)] backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-[1024px] mx-auto px-6">
        <nav className="flex items-center justify-between h-12">
          {/* Apple Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation("/")}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="fill-[#f5f5f7]"
            >
              <path d="M11.182 3.185c.708-.708 1.186-1.671 1.061-2.685-.964.114-2.15.64-2.858 1.348-.636.708-1.186 1.785-1.061 2.8 1.133.114 2.15-.526 2.858-1.463zm1.745 2.114c-1.577 0-2.85 1.234-2.85 2.914 0 1.791 1.387 2.571 1.5 2.628-.114.456-.364 1.005-.708 1.463-.364.526-.708 1.005-1.273 1.005s-.909-.364-1.577-.364c-.64 0-.909.386-1.577.386-.64 0-1.005-.571-1.463-1.234C4.298 10.234 3.98 8.57 3.98 7.028c0-2.628 1.708-4.028 3.348-4.028.708 0 1.273.386 1.7.386.456 0 1.16-.456 1.972-.456.32 0 1.5.068 2.27.844-.068.046-.114.091-.16.137-.845.777-1.273 1.348-1.273 2.457 0 1.348.845 2.171 1.09 2.342z" />
            </svg>
          </div>

          {/* Navigation Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-xs text-[#f5f5f7]">
            <li>
              <button onClick={() => handleNavigation("/store")} className="hover:text-white transition-colors">
                스토어
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("/mac")} className="hover:text-white transition-colors">
                Mac
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("/ipad")} className="hover:text-white transition-colors">
                iPad
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("/iphone")} className="hover:text-white transition-colors">
                iPhone
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("/watch")} className="hover:text-white transition-colors">
                Watch
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("/airpods")} className="hover:text-white transition-colors">
                AirPods
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("/tv-and-home")} className="hover:text-white transition-colors">
                TV 및 홈
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("/apple-exclusive")} className="hover:text-white transition-colors">
                Apple 독점 제공
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("/accessories")} className="hover:text-white transition-colors">
                액세서리
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("/support")} className="hover:text-white transition-colors">
                고객지원
              </button>
            </li>
          </ul>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-4 h-4 text-[#f5f5f7] hover:text-white cursor-pointer transition-colors" />
            <div className="relative">
              <ShoppingBag 
                className="w-4 h-4 text-[#f5f5f7] hover:text-white cursor-pointer transition-colors" 
                onClick={() => handleNavigation("/cart")}
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#0071e3] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}