import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useCart } from "../components/CartContext";
import { Button } from "../components/ui/button";
import { toast } from "sonner@2.0.3";

export function IPhonePage() {
  const { addToCart } = useCart();
  
  const iPhoneProducts = [
    {
      id: "iphone-15-pro",
      name: "iPhone 15 Pro",
      description: "티타늄. 강력하다. 가볍다. Pro답다.",
      price: 1550000,
      priceText: "₩1,550,000부터",
      colors: ["내추럴 티타늄", "블루 티타늄", "화이트 티타늄", "블랙 티타늄"],
      image: "https://images.unsplash.com/photo-1652721367098-0ecad4cc0370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGlwaG9uZSUyMG1vZGVybiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4Mjg1NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "스마트폰",
      specifications: ["A17 Pro 칩", "Pro 카메라 시스템", "티타늄 디자인"]
    },
    {
      id: "iphone-15",
      name: "iPhone 15",
      description: "새로워진 카메라. 새로워진 디자인. 새로워진 울트라 와이드.",
      price: 1250000,
      priceText: "₩1,250,000부터",
      colors: ["핑크", "옐로우", "그린", "블루", "블랙"],
      image: "https://images.unsplash.com/photo-1652721367098-0ecad4cc0370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGlwaG9uZSUyMG1vZGVybiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4Mjg1NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "스마트폰",
      specifications: ["A16 Bionic 칩", "48MP 메인 카메라", "USB-C"]
    },
    {
      id: "iphone-14",
      name: "iPhone 14",
      description: "Pro급 카메라. 강력한 A15 Bionic 칩.",
      price: 1050000,
      priceText: "₩1,050,000부터",
      colors: ["미드나이트", "퍼플", "스타라이트", "레드", "블루"],
      image: "https://images.unsplash.com/photo-1652721367098-0ecad4cc0370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGlwaG9uZSUyMG1vZGVybiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4Mjg1NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "스마트폰",
      specifications: ["A15 Bionic 칩", "듀얼 카메라 시스템", "Crash Detection"]
    },
    {
      id: "iphone-se",
      name: "iPhone SE",
      description: "사랑받는 디자인. 강력한 A15 Bionic 칩.",
      price: 650000,
      priceText: "₩650,000부터",
      colors: ["미드나이트", "스타라이트", "레드"],
      image: "https://images.unsplash.com/photo-1652721367098-0ecad4cc0370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGlwaG9uZSUyMG1vZGVybiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4Mjg1NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "스마트폰",
      specifications: ["A15 Bionic 칩", "4.7인치 Retina HD", "Touch ID"]
    },
  ];

  const accessories = [
    {
      id: "magsafe-charger",
      name: "MagSafe 충전기",
      price: 59000,
      priceText: "₩59,000",
      category: "충전기",
      image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyZ2VyJTIwd2lyZWxlc3N8ZW58MXx8fHwxNzU4Mjg2NjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["무선 충전", "MagSafe 호환", "1m 케이블 포함"]
    },
    {
      id: "iphone-case",
      name: "iPhone 케이스",
      price: 69000,
      priceText: "₩69,000부터",
      category: "액세서리",
      image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhc2UlMjBhY2Nlc3Nvcnl8ZW58MXx8fHwxNzU4Mjg2NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["실리콘 소재", "MagSafe 호환", "다양한 컬러"]
    },
    {
      id: "airpods-pro-2",
      name: "AirPods Pro",
      price: 329000,
      priceText: "₩329,000",
      category: "오디오",
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb2RzJTIwYXBwbGV8ZW58MXx8fHwxNzU4Mjg2NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["액티브 노이즈 캔슬링", "적응형 투명 모드", "MagSafe 충전 케이스"]
    },
    {
      id: "usb-c-adapter",
      name: "USB-C 어댑터",
      price: 29000,
      priceText: "₩29,000",
      category: "어댑터",
      image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2IlMjBjJTIwYWRhcHRlcnxlbnwxfHx8fDE3NTgyODY2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["20W 고속 충전", "USB-C to Lightning", "컴팩트 디자인"]
    },
  ];

  const handleAddToCart = (product: typeof iPhoneProducts[0] | typeof accessories[0]) => {
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

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-900 to-black text-white py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h1 className="text-6xl mb-4">iPhone</h1>
          <p className="text-2xl text-gray-300 mb-8">
            디자인된 것 중에 가장 개인적인 기기.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0071e3] text-white rounded-full hover:bg-[#0077ed] transition-colors"
            >
              iPhone 살펴보기
            </a>
            <a
              href="#compare"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#0071e3] text-[#0071e3] rounded-full hover:bg-[#0071e3] hover:text-white transition-colors"
            >
              iPhone 비교하기
            </a>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">나에게 맞는 iPhone 찾기</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {iPhoneProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="mb-8">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-2xl mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg mb-4">{product.priceText}</p>
                
                {/* Color Options */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">컬러:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {product.colors.map((color, colorIndex) => (
                      <span
                        key={colorIndex}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-3 rounded-full"
                  >
                    장바구니에 추가
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

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1024px] mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">iPhone만이 할 수 있는 일들</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">📷</div>
                <h3 className="text-xl mb-2">고급 카메라 시스템</h3>
                <p className="text-gray-600">Pro급 촬영을 누구나 쉽게</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-xl mb-2">Face ID</h3>
                <p className="text-gray-600">가장 안전한 얼굴 인식 기술</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl mb-2">A17 Pro 칩</h3>
                <p className="text-gray-600">프로 수준의 성능과 효율성</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h2 className="text-4xl mb-8">iPhone 액세서리</h2>
          <p className="text-xl text-gray-600 mb-12">
            iPhone을 더욱 활용도 높게 만들어주는 액세서리들을 살펴보세요.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {accessories.map((accessory) => (
              <div key={accessory.id} className="text-center bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                  <ImageWithFallback
                    src={accessory.image}
                    alt={accessory.name}
                    className="w-full h-32 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-lg mb-2">{accessory.name}</h3>
                <p className="text-gray-600 mb-4">{accessory.priceText}</p>
                <Button
                  onClick={() => handleAddToCart(accessory)}
                  className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-4 py-2 rounded-full text-sm"
                >
                  장바구니에 추가
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}