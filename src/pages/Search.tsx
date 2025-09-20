import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useCart } from "../components/CartContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { toast } from "sonner@2.0.3";
import { useState, useEffect } from "react";
import { navigateTo } from "../components/Router";

export function Search() {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // 모든 제품 데이터
  const allProducts = [
    // iPhone
    {
      id: "iphone-15-pro-max",
      name: "iPhone 15 Pro Max",
      description: "티타늄 디자인과 Action 버튼을 갖춘 가장 진보된 iPhone",
      price: 1550000,
      priceText: "₩1,550,000부터",
      category: "iPhone",
      page: "/iphone",
      image: "https://images.unsplash.com/photo-1696446702071-6d3324532346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBwcm8lMjBtYXh8ZW58MXx8fHwxNzU4Mjg2NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["A17 Pro 칩", "6.7인치 Super Retina XDR", "48MP 메인 카메라", "티타늄 디자인"]
    },
    {
      id: "iphone-15",
      name: "iPhone 15",
      description: "모든 면에서 새로워진 iPhone",
      price: 1250000,
      priceText: "₩1,250,000부터",
      category: "iPhone",
      page: "/iphone",
      image: "https://images.unsplash.com/photo-1696446702071-6d3324532346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBwcm8lMjBtYXh8ZW58MXx8fHwxNzU4Mjg2NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["A16 Bionic 칩", "6.1인치 Super Retina XDR", "48MP 메인 카메라", "USB-C"]
    },
    // Mac
    {
      id: "macbook-air-m3",
      name: "MacBook Air",
      description: "놀랍도록 얇다. 믿을 수 없을 만큼 능력이 뛰어나다.",
      price: 1390000,
      priceText: "₩1,390,000부터",
      category: "Mac",
      page: "/mac",
      image: "https://images.unsplash.com/photo-1705617551935-63c5fc09ba72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNib29rJTIwbGFwdG9wJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODI4NTYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["M3 칩", "13.6인치 Liquid Retina 디스플레이", "최대 18시간 배터리"]
    },
    {
      id: "macbook-pro-m3",
      name: "MacBook Pro",
      description: "막강한 성능의 M3 칩을 탑재한 프로급 노트북.",
      price: 2390000,
      priceText: "₩2,390,000부터",
      category: "Mac",
      page: "/mac",
      image: "https://images.unsplash.com/photo-1705617551935-63c5fc09ba72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNib29rJTIwbGFwdG9wJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODI4NTYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["M3 Pro 칩", "14인치 Liquid Retina XDR 디스플레이", "최대 22시간 배터리"]
    },
    // iPad
    {
      id: "ipad-pro-11",
      name: "iPad Pro",
      description: "궁극의 iPad 경험. M2 칩의 막강한 성능.",
      price: 1249000,
      priceText: "₩1,249,000부터",
      category: "iPad",
      page: "/ipad",
      image: "https://images.unsplash.com/photo-1629131704989-c74179b0ce16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGFkJTIwdGFibGV0JTIwbW9kZXJufGVufDF8fHx8MTc1ODI4NTYzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["M2 칩", "11인치 또는 12.9인치", "Liquid Retina XDR 디스플레이", "Apple Pencil (2세대) 지원"]
    },
    // Apple Watch
    {
      id: "apple-watch-series-9",
      name: "Apple Watch Series 9",
      description: "스마트. 밝다. 막강하다.",
      price: 599000,
      priceText: "₩599,000부터",
      category: "Apple Watch",
      page: "/watch",
      image: "https://images.unsplash.com/photo-1676173648519-06522eb8c269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHdhdGNoJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgyODQ1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["S9 SiP 칩", "Always-On Retina 디스플레이", "혈중 산소 측정", "ECG 앱"]
    },
    // AirPods
    {
      id: "airpods-pro-2nd",
      name: "AirPods Pro (2세대)",
      description: "적응형 투명 모드. 개인 맞춤형 공간 음향.",
      price: 329000,
      priceText: "₩329,000",
      category: "AirPods",
      page: "/airpods",
      image: "https://images.unsplash.com/photo-1574920162043-b872873f19c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGFpcnBvZHMlMjB3aXJlbGVzc3xlbnwxfHx8fDE3NTgyODYyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["H2 칩", "적응형 투명 모드", "개인 맞춤형 공간 음향", "MagSafe 충전 케이스"]
    },
    // TV 및 홈
    {
      id: "apple-tv-4k",
      name: "Apple TV 4K",
      description: "최고의 화질과 몰입감 있는 오디오 경험.",
      price: 199000,
      priceText: "₩199,000부터",
      category: "TV 및 홈",
      page: "/tv-and-home",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHR2JTIwYm94fGVufDF8fHx8MTc1ODI4NjQwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["A15 Bionic 칩", "4K HDR10+ 지원", "Dolby Vision", "64GB 또는 128GB"]
    },
    // 액세서리
    {
      id: "magsafe-charger",
      name: "MagSafe 충전기",
      description: "iPhone을 위한 무선 충전기",
      price: 59000,
      priceText: "₩59,000",
      category: "액세서리",
      page: "/accessories",
      image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGNoYXJnZXJ8ZW58MXx8fHwxNzU4Mjg2NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["최대 15W 무선 충전", "MagSafe 호환", "1m USB-C 케이블 포함"]
    },
  ];

  const popularSearches = [
    "iPhone 15 Pro", "MacBook Air", "iPad Pro", "Apple Watch", "AirPods Pro", 
    "MagSafe", "Apple TV", "HomePod", "케이스", "충전기"
  ];

  // 검색 실행
  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // 검색 시뮬레이션 (실제로는 API 호출)
    setTimeout(() => {
      const results = allProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.specifications.some(spec => spec.toLowerCase().includes(query.toLowerCase()))
      );
      
      setSearchResults(results);
      setIsSearching(false);
    }, 300);
  };

  // URL에서 검색어 가져오기
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q') || '';
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchQuery);
  };

  const handleAddToCart = (product: typeof allProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      specifications: product.specifications
    });
    toast.success(`${product.name}이(가) 장바구니에 추가되었습니다.`);
  };

  const handleProductClick = (productPage: string) => {
    navigateTo(productPage);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Search Header */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-[1024px] mx-auto px-6">
          <h1 className="text-4xl text-center mb-8">검색</h1>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Apple 제품을 검색해보세요..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-[#0071e3]"
              />
              <Button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-[#0071e3] hover:bg-[#0077ed]"
                disabled={isSearching}
              >
                {isSearching ? "검색 중..." : "검색"}
              </Button>
            </div>
          </form>

          {/* Popular Searches */}
          {!searchQuery && (
            <div className="text-center">
              <h3 className="text-lg mb-4">인기 검색어</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {popularSearches.map((term, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchQuery(term);
                      performSearch(term);
                    }}
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Search Results */}
      <section className="py-12">
        <div className="max-w-[1024px] mx-auto px-6">
          {searchQuery && (
            <div className="mb-8">
              <h2 className="text-2xl mb-2">
                "{searchQuery}"에 대한 검색 결과
              </h2>
              <p className="text-gray-600">
                {isSearching ? "검색 중..." : `${searchResults.length}개의 결과를 찾았습니다.`}
              </p>
            </div>
          )}

          {searchResults.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchResults.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-3xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleProductClick(product.page)}
                >
                  <div className="mb-6">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-2xl"
                    />
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-sm text-[#0071e3] bg-blue-50 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  <p className="text-lg mb-4">{product.priceText}</p>
                  
                  <div className="flex gap-3">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-4 py-2 rounded-full text-sm flex-1"
                    >
                      장바구니 추가
                    </Button>
                    <Button
                      onClick={() => handleProductClick(product.page)}
                      variant="outline"
                      className="border border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white px-4 py-2 rounded-full text-sm"
                    >
                      보기
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {searchQuery && searchResults.length === 0 && !isSearching && (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl mb-4">검색 결과가 없습니다</h3>
              <p className="text-gray-600 mb-8">
                다른 검색어를 시도해보거나 인기 검색어를 참고해보세요.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {popularSearches.slice(0, 5).map((term, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchQuery(term);
                      performSearch(term);
                    }}
                    className="px-4 py-2 bg-[#0071e3] text-white rounded-full hover:bg-[#0077ed] transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!searchQuery && (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">📱</div>
              <h3 className="text-2xl mb-4">Apple 제품을 검색해보세요</h3>
              <p className="text-gray-600">
                원하는 Apple 제품을 빠르게 찾아보세요. iPhone, Mac, iPad, Apple Watch 등 다양한 제품이 준비되어 있습니다.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}