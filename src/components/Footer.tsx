import { navigateTo } from "./Router";

export function Footer() {
  const footerSections = [
    {
      title: "쇼핑 및 알아보기",
      links: [
        { name: "스토어", path: "/store" },
        { name: "Mac", path: "/mac" },
        { name: "iPad", path: "/ipad" },
        { name: "iPhone", path: "/iphone" },
        { name: "Watch", path: "/watch" },
        { name: "AirPods", path: "/airpods" },
        { name: "TV 및 홈", path: "/tv-and-home" },
        { name: "액세서리", path: "/accessories" },
        { name: "Apple 독점 제공", path: "/apple-exclusive" },
      ],
    },
    {
      title: "Apple Wallet",
      links: [
        { name: "월렛", path: "/wallet" },
        { name: "Apple Card", path: "/apple-card" },
        { name: "Apple Pay", path: "/apple-pay" },
        { name: "Apple Cash", path: "/apple-cash" },
      ],
    },
    {
      title: "계정",
      links: [
        { name: "Apple ID 관리", path: "#" },
        { name: "Apple Store 계정", path: "#" },
        { name: "iCloud.com", path: "#" },
      ],
    },
    {
      title: "엔터테인먼트",
      links: [
        { name: "Apple One", path: "/apple-one" },
        { name: "Apple TV+", path: "/apple-tv-plus" },
        { name: "Apple Music", path: "/apple-music" },
        { name: "Apple Arcade", path: "/apple-arcade" },
        { name: "Apple Fitness+", path: "/apple-fitness-plus" },
        { name: "Apple News+", path: "/apple-news-plus" },
        { name: "Apple Podcasts", path: "/apple-podcasts" },
        { name: "Apple Books", path: "/apple-books" },
        { name: "App Store", path: "/app-store" },
      ],
    },
    {
      title: "Apple Store",
      links: [
        { name: "Apple Store 찾기", path: "#" },
        { name: "Genius Bar", path: "#" },
        { name: "Today at Apple", path: "#" },
        { name: "Apple 캠프", path: "#" },
        { name: "Apple Store 앱", path: "#" },
        { name: "인증 리퍼비쉬 제품", path: "#" },
        { name: "Apple Trade In", path: "#" },
        { name: "할부", path: "#" },
        { name: "캐리어 혜택", path: "#" },
        { name: "주문 상태", path: "#" },
        { name: "구입 도움말", path: "#" },
      ],
    },
  ];

  const handleNavigation = (path: string) => {
    if (path !== "#") {
      navigateTo(path);
    }
  };

  return (
    <footer className="bg-[#f5f5f7] border-t border-gray-300">
      <div className="max-w-[1024px] mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button 
                      onClick={() => handleNavigation(link.path)}
                      className="text-sm text-gray-600 hover:underline text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              <p>다양한 쇼핑 방법: <a href="#" className="text-[#0071e3] hover:underline">Apple Store를 찾거나</a> <a href="#" className="text-[#0071e3] hover:underline">리셀러</a>를 찾아보세요.</p>
            </div>
            <div className="text-sm text-gray-600">
              Copyright © 2024 Apple Inc. 모든 권리 보유.
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
            <a href="#" className="hover:underline">개인정보 처리방침</a>
            <span>|</span>
            <a href="#" className="hover:underline">웹 사이트 이용 약관</a>
            <span>|</span>
            <a href="#" className="hover:underline">판매 및 환불</a>
            <span>|</span>
            <a href="#" className="hover:underline">법적 고지</a>
            <span>|</span>
            <a href="#" className="hover:underline">사이트 맵</a>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            <p>사업자등록번호 : 120-81-84429 | 통신판매업신고번호 : 제 2021-서울강남-04373호 | 대표이사 : PETER DENWOOD</p>
            <p>주소 : 서울 특별시 강남구 영동대로 517, 06292 | 대표전화 : 080-330-8877 | 팩스 : 02-6928-0000</p>
          </div>
        </div>
      </div>
    </footer>
  );
}