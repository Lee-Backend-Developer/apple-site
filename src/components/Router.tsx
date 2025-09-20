import { useState, useEffect, ReactNode } from "react";

// Pages
import { Mac } from "../pages/Mac";
import { IPhonePage } from "../pages/iPhone";
import { IPadPage } from "../pages/iPad";
import { Watch } from "../pages/Watch";
import { AirPods } from "../pages/AirPods";
import { Store } from "../pages/Store";
import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";
import { TVHome } from "../pages/TVHome";
import { Exclusive } from "../pages/Exclusive";
import { Accessories } from "../pages/Accessories";
import { Support } from "../pages/Support";
import { Search } from "../pages/Search";
import { Signup } from "../pages/Signup";
import { Orders } from "../pages/Orders";
import { OrderDetail } from "../pages/OrderDetail";
import { TrackingOrder } from "../pages/TrackingOrder";
import { ProductDetail } from "../pages/ProductDetail";
import { AccountManagement } from "../pages/AccountManagement";
import { PaymentShipping } from "../pages/PaymentShipping";
import { AppleIdSettings } from "../pages/AppleIdSettings";

// Home component for the main page
import { Hero } from "./Hero";
import { ProductShowcase } from "./ProductShowcase";
import { ProductGrid } from "./ProductGrid";

function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase
        id="macbook-pro-m3"
        subtitle="새로운 맥북 프로"
        title="MacBook Pro"
        description="M3, M3 Pro, M3 Max가 제공하는 막강한 성능. 최대 22시간의 배터리 사용 시간."
        price={2390000}
        imageUrl="https://images.unsplash.com/photo-1705617551935-63c5fc09ba72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNib29rJTIwbGFwdG9wJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODI4NTYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        imageAlt="MacBook Pro"
        backgroundColor="bg-white"
        textColor="text-black"
        buttonStyle="blue"
      />
      <ProductGrid />
    </>
  );
}

// Simple page component for placeholder pages
function PlaceholderPage({ title, description }: { title: string; description: string }) {
  return (
    <div className="min-h-screen bg-[#f5f5f7] py-20">
      <div className="max-w-[1024px] mx-auto px-6 text-center">
        <h1 className="text-6xl mb-8">{title}</h1>
        <p className="text-2xl text-gray-600 mb-12">{description}</p>
        <div className="bg-white rounded-3xl p-16 text-center">
          <div className="text-8xl mb-8">🚧</div>
          <p className="text-xl text-gray-500">
            이 페이지는 현재 개발 중입니다. 곧 만나보실 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

interface Route {
  path: string;
  component: ReactNode;
}

const routes: Route[] = [
  { path: "/", component: <Home /> },
  { path: "/store", component: <Store /> },
  { path: "/cart", component: <Cart /> },
  { path: "/checkout", component: <Checkout /> },
  { path: "/search", component: <Search /> },
  { path: "/signup", component: <Signup /> },
  { path: "/orders", component: <Orders /> },
  { path: "/mac", component: <Mac /> },
  { path: "/ipad", component: <IPadPage /> },
  { path: "/iphone", component: <IPhonePage /> },
  { path: "/watch", component: <Watch /> },
  { path: "/airpods", component: <AirPods /> },
  { path: "/tv-and-home", component: <TVHome /> },
  { path: "/accessories", component: <Accessories /> },
  { path: "/apple-exclusive", component: <Exclusive /> },
  { path: "/support", component: <Support /> },
  
  // Account Management
  { path: "/account", component: <AccountManagement /> },
  { path: "/account/payment-shipping", component: <PaymentShipping /> },
  { path: "/account/apple-id", component: <AppleIdSettings /> },
  
  // Apple Wallet
  { path: "/wallet", component: <PlaceholderPage title="월렛" description="iPhone에서 카드, 티켓, 패스를 안전하게 보관하세요." /> },
  { path: "/apple-card", component: <PlaceholderPage title="Apple Card" description="일상을 더 간편하게 만드는 신용카드입니다." /> },
  { path: "/apple-pay", component: <PlaceholderPage title="Apple Pay" description="안전하고 편리한 결제 서비스입니다." /> },
  { path: "/apple-cash", component: <PlaceholderPage title="Apple Cash" description="메시지로 간편하게 송금하고 받으세요." /> },
  
  // Entertainment
  { path: "/apple-one", component: <PlaceholderPage title="Apple One" description="Apple 서비스를 하나의 요금제로 이용하세요." /> },
  { path: "/apple-tv-plus", component: <PlaceholderPage title="Apple TV+" description="오리지널 영화와 TV 프로그램을 감상하세요." /> },
  { path: "/apple-music", component: <PlaceholderPage title="Apple Music" description="수백만 곡의 음악을 스트리밍으로 즐기세요." /> },
  { path: "/apple-arcade", component: <PlaceholderPage title="Apple Arcade" description="광고나 인앱 구입 없는 프리미엄 게임들을 즐기세요." /> },
  { path: "/apple-fitness-plus", component: <PlaceholderPage title="Apple Fitness+" description="Apple Watch와 함께하는 피트니스 서비스입니다." /> },
  { path: "/apple-news-plus", component: <PlaceholderPage title="Apple News+" description="프리미엄 뉴스와 매거진을 읽어보세요." /> },
  { path: "/apple-podcasts", component: <PlaceholderPage title="Apple Podcasts" description="좋아하는 팟캐스트를 들어보세요." /> },
  { path: "/apple-books", component: <PlaceholderPage title="Apple Books" description="책과 오디오북을 구매하고 읽어보세요." /> },
  { path: "/app-store", component: <PlaceholderPage title="App Store" description="iOS 앱을 다운로드하고 업데이트하세요." /> },
];

export function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePathChange = () => {
      const newPath = window.location.pathname;
      setCurrentPath(newPath);
    };

    // Custom event listener for navigation
    window.addEventListener("popstate", handlePathChange);
    
    // Add custom navigation event
    window.addEventListener("navigate", handlePathChange as any);
    
    return () => {
      window.removeEventListener("popstate", handlePathChange);
      window.removeEventListener("navigate", handlePathChange as any);
    };
  }, []);

  // Find matching route - handle dynamic routes
  let currentRoute = routes.find(route => route.path === currentPath);
  
  // Handle dynamic routes
  if (!currentRoute) {
    if (currentPath.startsWith('/product/')) {
      const productId = currentPath.split('/')[2];
      return <div key={currentPath}><ProductDetail productId={productId} /></div>;
    } else if (currentPath.startsWith('/order/')) {
      const orderId = currentPath.split('/')[2];
      return <div key={currentPath}><OrderDetail orderId={orderId} /></div>;
    } else if (currentPath.startsWith('/tracking/')) {
      const orderId = currentPath.split('/')[2];
      return <div key={currentPath}><TrackingOrder orderId={orderId} /></div>;
    }
  }
  
  // Default to home if no route found
  currentRoute = currentRoute || routes[0];

  // Force re-render by returning a keyed component
  return <div key={currentPath}>{currentRoute.component}</div>;
}

// Navigation helper function
export function navigateTo(path: string) {
  // Update URL
  window.history.pushState({}, "", path);
  
  // Dispatch both events to ensure navigation works
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.dispatchEvent(new CustomEvent("navigate"));
  
  // Force immediate update by scrolling to top
  window.scrollTo(0, 0);
  
  // Force a small delay to ensure state updates
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent("navigate"));
  }, 10);
}