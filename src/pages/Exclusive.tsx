import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { navigateTo } from "../components/Router";

export function Exclusive() {
  const exclusiveProducts = [
    {
      name: "iPhone 15 Pro Max (Natural Titanium)",
      description: "Apple 스토어에서만 구매 가능한 특별 컬러",
      priceText: "₩1,550,000부터",
      image: "https://images.unsplash.com/photo-1696446702071-6d3324532346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBwcm8lMjBtYXh8ZW58MXx8fHwxNzU4Mjg2NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "Apple 독점"
    },
    {
      name: "MacBook Pro (Space Black)",
      description: "Apple에서만 만날 수 있는 특별한 컬러 옵션",
      priceText: "₩2,390,000부터",
      image: "https://images.unsplash.com/photo-1705617551935-63c5fc09ba72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNib29rJTIwbGFwdG9wJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODI4NTYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "스페셜 에디션"
    },
    {
      name: "Apple Watch Hermès",
      description: "Apple과 Hermès의 특별한 콜라보레이션",
      priceText: "₩1,899,000부터",
      image: "https://images.unsplash.com/photo-1676173648519-06522eb8c269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHdhdGNoJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgyODQ1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "콜라보레이션"
    },
  ];

  const services = [
    {
      name: "Apple One Premier",
      description: "모든 Apple 서비스를 하나의 패키지로",
      features: ["Apple Music", "Apple TV+", "Apple Arcade", "iCloud+ (2TB)", "Apple News+", "Apple Fitness+"],
      priceText: "₩39,500/월",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHNlcnZpY2VzfGVufDF8fHx8MTc1ODI4NjQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "AppleCare+ Premium",
      description: "최고 수준의 기술 지원과 하드웨어 보장",
      features: ["무제한 기술 지원", "의도치 않은 손상 보장", "익일 교체 서비스", "전담 기술 전문가"],
      priceText: "₩29,000/월부터",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHNlcnZpY2VzfGVufDF8fHx8MTc1ODI4NjQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-900 to-black text-white py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h1 className="text-6xl mb-4">Apple 독점 제공</h1>
          <p className="text-2xl text-gray-300 mb-8">
            Apple에서만 만날 수 있는 특별한 제품과 서비스
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0071e3] text-white rounded-full hover:bg-[#0077ed] transition-colors"
            >
              독점 제품 보기
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#0071e3] text-[#0071e3] rounded-full hover:bg-[#0071e3] hover:text-white transition-colors"
            >
              서비스 살펴보기
            </a>
          </div>
        </div>
      </section>

      {/* Exclusive Products */}
      <section id="products" className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">독점 제품</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exclusiveProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-shadow relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                </div>
                <div className="mb-8">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-2xl mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg mb-6">{product.priceText}</p>
                
                <div className="flex flex-col gap-3 justify-center">
                  <Button className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-3 rounded-full">
                    주문하기
                  </Button>
                  <Button
                    variant="outline"
                    className="border border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white px-6 py-3 rounded-full"
                  >
                    더 알아보기
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Services */}
      <section id="services" className="bg-white py-20">
        <div className="max-w-[1024px] mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">프리미엄 서비스</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow">
                <div className="mb-8">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-2xl mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <p className="text-lg mb-6">{service.priceText}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm text-gray-500 mb-3">포함된 서비스:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-gray-700 flex items-center">
                        <span className="w-2 h-2 bg-[#0071e3] rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <Button className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-3 rounded-full">
                    구독하기
                  </Button>
                  <Button
                    variant="outline"
                    className="border border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white px-6 py-3 rounded-full"
                  >
                    자세히 보기
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h2 className="text-4xl mb-8">Apple 독점 혜택</h2>
          <p className="text-xl text-gray-600 mb-12">
            Apple에서만 경험할 수 있는 특별한 혜택들
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl mb-2">무료 배송</h3>
                <p className="text-gray-600">모든 주문에 무료 배송 서비스</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl mb-2">14일 무료 반품</h3>
                <p className="text-gray-600">조건 없는 14일 반품 정책</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl mb-2">전문가 지원</h3>
                <p className="text-gray-600">Apple 전문가의 1:1 맞춤 지원</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl mb-2">특별 혜택</h3>
                <p className="text-gray-600">회원 전용 이벤트와 할인</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}