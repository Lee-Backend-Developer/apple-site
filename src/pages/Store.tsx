import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Store() {
  const featuredProducts = [
    {
      name: "iPhone 15 Pro",
      category: "iPhone",
      price: "₩1,550,000부터",
      image: "https://images.unsplash.com/photo-1652721367098-0ecad4cc0370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGlwaG9uZSUyMG1vZGVybiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4Mjg1NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "New",
    },
    {
      name: "MacBook Pro",
      category: "Mac",
      price: "₩2,390,000부터",
      image: "https://images.unsplash.com/photo-1705617551935-63c5fc09ba72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNib29rJTIwbGFwdG9wJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODI4NTYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "M3 칩",
    },
    {
      name: "iPad Pro",
      category: "iPad",
      price: "₩1,249,000부터",
      image: "https://images.unsplash.com/photo-1629131704989-c74179b0ce16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGFkJTIwdGFibGV0JTIwbW9kZXJufGVufDF8fHx8MTc1ODI4NTYzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "M2 칩",
    },
    {
      name: "Apple Watch Series 9",
      category: "Watch",
      price: "₩599,000부터",
      image: "https://images.unsplash.com/photo-1676173648519-06522eb8c269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHdhdGNoJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgyODQ1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "S9 칩",
    },
  ];

  const categories = [
    { name: "Mac", icon: "💻", description: "데스크톱과 노트북" },
    { name: "iPad", icon: "📱", description: "태블릿" },
    { name: "iPhone", icon: "📞", description: "스마트폰" },
    { name: "Watch", icon: "⌚", description: "스마트워치" },
    { name: "AirPods", icon: "🎧", description: "무선 이어폰" },
    { name: "TV & 홈", icon: "📺", description: "엔터테인먼트" },
    { name: "액세서리", icon: "🔌", description: "케이스, 충전기 등" },
    { name: "Apple Care", icon: "🛡️", description: "보장 서비스" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h1 className="text-6xl mb-4">Apple Store</h1>
          <p className="text-2xl text-gray-600 mb-8">
            Apple 제품을 구매하는 가장 좋은 방법.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#featured"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0071e3] text-white rounded-full hover:bg-[#0077ed] transition-colors"
            >
              신제품 보기
            </a>
            <a
              href="#categories"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#0071e3] text-[#0071e3] rounded-full hover:bg-[#0071e3] hover:text-white transition-colors"
            >
              카테고리 보기
            </a>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="bg-black text-white py-16">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h2 className="text-3xl mb-4">특별 혜택</h2>
          <p className="text-xl text-gray-300 mb-8">
            Apple Trade In으로 기존 기기를 보상 판매하고 새 제품을 더 저렴하게 구매하세요.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
          >
            Trade In 가격 알아보기
          </a>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">제품 카테고리</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <a
                key={index}
                href={`/${category.name.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
                className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="bg-white py-20">
        <div className="max-w-[1024px] mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">추천 제품</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow group">
                <div className="relative mb-6">
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm z-10">
                      {product.badge}
                    </span>
                  )}
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                  <h3 className="text-2xl mb-2">{product.name}</h3>
                  <p className="text-lg text-gray-600 mb-6">{product.price}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#0071e3] text-white rounded-full hover:bg-[#0077ed] transition-colors"
                    >
                      구입하기
                    </a>
                    <a
                      href="#"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-[#0071e3] text-[#0071e3] rounded-full hover:bg-[#0071e3] hover:text-white transition-colors"
                    >
                      더 알아보기
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">Apple Store 서비스</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl mb-4">무료 배송</h3>
              <p className="text-gray-600">
                모든 주문에 대해 무료 배송 서비스를 제공합니다. 빠르고 안전한 배송을 약속드립니다.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl mb-4">무이자 할부</h3>
              <p className="text-gray-600">
                Apple Card 또는 승인된 신용카드로 무이자 할부 결제가 가능합니다.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl mb-4">개인별 맞춤 설정</h3>
              <p className="text-gray-600">
                전문가의 도움을 받아 당신에게 딱 맞는 Apple 제품을 설정하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Store Locator */}
      <section className="bg-white py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h2 className="text-4xl mb-8">Apple Store 방문하기</h2>
          <p className="text-xl text-gray-600 mb-12">
            전국의 Apple Store에서 직접 제품을 체험하고 전문가의 조언을 받아보세요.
          </p>
          <div className="mb-12">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1584920810895-06c0b42310e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHN0b3JlJTIwcmV0YWlsJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU4Mjg2MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Apple Store Interior"
              className="w-full h-64 object-cover rounded-3xl"
            />
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#0071e3] text-white rounded-full hover:bg-[#0077ed] transition-colors"
          >
            근처 Apple Store 찾기
          </a>
        </div>
      </section>
    </div>
  );
}