import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useCart } from "../components/CartContext";
import { Button } from "../components/ui/button";
import { toast } from "sonner@2.0.3";
import { useState } from "react";

export function Accessories() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const categories = ["전체", "케이스 및 보호", "무선충전", "케이블", "오디오", "기타"];

  const accessories = [
    {
      id: "magsafe-charger",
      name: "MagSafe 충전기",
      description: "iPhone을 위한 무선 충전기",
      price: 59000,
      priceText: "₩59,000",
      category: "무선충전",
      compatibility: ["iPhone 15", "iPhone 14", "iPhone 13", "iPhone 12"],
      image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGNoYXJnZXJ8ZW58MXx8fHwxNzU4Mjg2NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["최대 15W 무선 충전", "MagSafe 호환", "1m USB-C 케이블 포함"]
    },
    {
      id: "leather-case-iphone",
      name: "iPhone 가죽 케이스",
      description: "프리미엄 가죽으로 제작된 케이스",
      price: 89000,
      priceText: "₩89,000",
      category: "케이스 및 보호",
      compatibility: ["iPhone 15 Pro", "iPhone 15"],
      image: "https://images.unsplash.com/photo-1602525463692-4eff4ad98737?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhc2UlMjBsZWF0aGVyfGVufDF8fHx8MTc1ODI4NjUzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["프리미엄 가죽 소재", "MagSafe 호환", "정밀한 컷아웃", "5가지 컬러"]
    },
    {
      id: "usb-c-cable",
      name: "USB-C to Lightning 케이블",
      description: "고속 충전을 위한 케이블",
      price: 25000,
      priceText: "₩25,000",
      category: "케이블",
      compatibility: ["iPhone", "iPad", "AirPods"],
      image: "https://images.unsplash.com/photo-1558618166-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2IlMjBjYWJsZSUyMGxpZ2h0bmluZ3xlbnwxfHx8fDE3NTgyODY1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["1m 길이", "고속 충전 지원", "데이터 동기화", "내구성 강화"]
    },
    {
      id: "airtag",
      name: "AirTag",
      description: "중요한 물건을 찾아주는 추적기",
      price: 45000,
      priceText: "₩45,000",
      category: "기타",
      compatibility: ["iPhone", "iPad", "Mac"],
      image: "https://images.unsplash.com/photo-1621768216002-5ac171876625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGFpcnRhZ3xlbnwxfHx8fDE3NTgyODY1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["정밀 찾기", "교체 가능한 배터리", "방수 기능", "개인정보 보호"]
    },
    {
      id: "airpods-case",
      name: "AirPods Pro 실리콘 케이스",
      description: "AirPods Pro를 보호하는 실리콘 케이스",
      price: 35000,
      priceText: "₩35,000",
      category: "케이스 및 보호",
      compatibility: ["AirPods Pro (2세대)", "AirPods Pro"],
      image: "https://images.unsplash.com/photo-1574920162043-b872873f19c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGFpcnBvZHMlMjB3aXJlbGVzc3xlbnwxfHx8fDE3NTgyODYyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["부드러운 실리콘 소재", "무선 충전 호환", "카라비너 포함", "4가지 컬러"]
    },
    {
      id: "studio-display-stand",
      name: "Studio Display 높이 조절 스탠드",
      description: "Studio Display용 높이 조절 스탠드",
      price: 499000,
      priceText: "₩499,000",
      category: "기타",
      compatibility: ["Studio Display"],
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25pdG9yJTIwZGlzcGxheXxlbnwxfHx8fDE3NTgyODYzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["110mm 높이 조절", "틸트 및 회전", "케이블 정리", "알루미늄 소재"]
    },
  ];

  const filteredAccessories = selectedCategory === "전체" 
    ? accessories 
    : accessories.filter(item => item.category === selectedCategory);

  const handleAddToCart = (product: typeof accessories[0]) => {
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
      <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h1 className="text-6xl mb-4">액세서리</h1>
          <p className="text-2xl text-gray-300 mb-8">
            Apple 제품을 더욱 특별하게 만들어주는 액세서리
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0071e3] text-white rounded-full hover:bg-[#0077ed] transition-colors"
            >
              액세서리 쇼핑하기
            </a>
            <a
              href="#compatibility"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#0071e3] text-[#0071e3] rounded-full hover:bg-[#0071e3] hover:text-white transition-colors"
            >
              호환성 확인하기
            </a>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-[#f5f5f7] py-8">
        <div className="max-w-[1024px] mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-[#0071e3] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">
            {selectedCategory === "전체" ? "모든 액세서리" : selectedCategory}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredAccessories.map((product) => (
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
                
                {/* Compatibility */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">호환 기기:</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {product.compatibility.map((device, deviceIndex) => (
                      <span
                        key={deviceIndex}
                        className="px-2 py-1 bg-gray-100 rounded-full text-xs"
                      >
                        {device}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 justify-center">
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

      {/* Compatibility Guide */}
      <section id="compatibility" className="bg-white py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h2 className="text-4xl mb-8">호환성 가이드</h2>
          <p className="text-xl text-gray-600 mb-12">
            어떤 액세서리가 내 Apple 기기와 호환되는지 확인해보세요
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl mb-2">iPhone</h3>
                <p className="text-gray-600 text-sm">케이스, MagSafe, 케이블, AirTag</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl mb-2">Mac</h3>
                <p className="text-gray-600 text-sm">케이블, 스탠드, 마우스, 키보드</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">📟</div>
                <h3 className="text-xl mb-2">iPad</h3>
                <p className="text-gray-600 text-sm">케이스, Apple Pencil, 키보드</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">⌚</div>
                <h3 className="text-xl mb-2">Apple Watch</h3>
                <p className="text-gray-600 text-sm">밴드, 충전기, 스탠드</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}