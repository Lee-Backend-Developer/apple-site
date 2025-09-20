import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useCart } from "../components/CartContext";
import { Button } from "../components/ui/button";
import { toast } from "sonner@2.0.3";

export function AirPods() {
  const { addToCart } = useCart();
  
  const airPodsProducts = [
    {
      id: "airpods-pro-2nd",
      name: "AirPods Pro (2세대)",
      description: "적응형 투명 모드. 개인 맞춤형 공간 음향.",
      price: 329000,
      priceText: "₩329,000",
      features: ["액티브 노이즈 캔슬링", "적응형 투명 모드", "개인 맞춤형 공간 음향", "최대 6시간 재생"],
      category: "무선 이어폰",
      image: "https://images.unsplash.com/photo-1574920162043-b872873f19c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGFpcnBvZHMlMjB3aXJlbGVzc3xlbnwxfHx8fDE3NTgyODYyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["H2 칩", "적응형 투명 모드", "개인 맞춤형 공간 음향", "MagSafe 충전 케이스"]
    },
    {
      id: "airpods-3rd",
      name: "AirPods (3세대)",
      description: "공간 음향과 적응형 EQ로 더욱 몰입감 있는 사운드.",
      price: 259000,
      priceText: "₩259,000",
      features: ["공간 음향", "적응형 EQ", "최대 6시간 재생", "방수 기능"],
      category: "무선 이어폰",
      image: "https://images.unsplash.com/photo-1574920162043-b872873f19c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGFpcnBvZHMlMjB3aXJlbGVzc3xlbnwxfHx8fDE3NTgyODYyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["H1 칩", "공간 음향", "적응형 EQ", "MagSafe 충전 케이스"]
    },
    {
      id: "airpods-2nd",
      name: "AirPods (2세대)",
      description: "손쉬운 설정. 놀라운 사운드.",
      price: 179000,
      priceText: "₩179,000",
      features: ["빠른 접속", "최대 5시간 재생", "Siri 음성 활성화", "Lightning 충전 케이스"],
      category: "무선 이어폰",
      image: "https://images.unsplash.com/photo-1574920162043-b872873f19c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGFpcnBvZHMlMjB3aXJlbGVzc3xlbnwxfHx8fDE3NTgyODYyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["H1 칩", "Siri 음성 활성화", "빠른 접속", "Lightning 충전 케이스"]
    },
    {
      id: "airpods-max",
      name: "AirPods Max",
      description: "궁극의 개인 청취 경험.",
      price: 799000,
      priceText: "₩799,000",
      features: ["액티브 노이즈 캔슬링", "적응형 EQ", "공간 음향", "최대 20시간 재생"],
      category: "헤드폰",
      image: "https://images.unsplash.com/photo-1574920162043-b872873f19c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGFpcnBvZHMlMjB3aXJlbGVzc3xlbnwxfHx8fDE3NTgyODYyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["H1 칩", "알루미늄 컵", "메모리 폼 이어 쿠션", "Digital Crown"]
    },
  ];

  const handleAddToCart = (product: typeof airPodsProducts[0]) => {
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
          <h1 className="text-6xl mb-4">AirPods</h1>
          <p className="text-2xl text-gray-300 mb-8">
            마법 같은 무선 경험. 완전히 새로운 차원의 오디오.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0071e3] text-white rounded-full hover:bg-[#0077ed] transition-colors"
            >
              AirPods 살펴보기
            </a>
            <a
              href="#compare"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#0071e3] text-[#0071e3] rounded-full hover:bg-[#0071e3] hover:text-white transition-colors"
            >
              AirPods 비교하기
            </a>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">나에게 맞는 AirPods 찾기</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {airPodsProducts.map((product) => (
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
                <p className="text-lg mb-6">{product.priceText}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">주요 기능:</p>
                  <div className="space-y-1">
                    {product.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="text-sm text-gray-600"
                      >
                        • {feature}
                      </div>
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
          <h2 className="text-4xl text-center mb-16">AirPods만의 특별한 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-50 rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-xl mb-2">공간 음향</h3>
                <p className="text-gray-600">극장에 있는 듯한 몰입감 있는 3D 오디오 경험</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-50 rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">🔇</div>
                <h3 className="text-xl mb-2">노이즈 캔슬링</h3>
                <p className="text-gray-600">주변 소음을 차단하여 완벽한 집중 환경 제공</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-purple-50 rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">🎧</div>
                <h3 className="text-xl mb-2">적응형 EQ</h3>
                <p className="text-gray-600">귀의 형태에 맞춰 자동으로 음질을 최적화</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compatibility Section */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h2 className="text-4xl mb-8">모든 Apple 기기와 완벽하게</h2>
          <p className="text-xl text-gray-600 mb-12">
            iPhone, iPad, Mac, Apple Watch와 자동으로 연결되어 끊김 없는 경험을 제공합니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 mb-4">
                <div className="h-20 flex items-center justify-center text-3xl">📱</div>
              </div>
              <h3 className="text-lg">iPhone</h3>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 mb-4">
                <div className="h-20 flex items-center justify-center text-3xl">💻</div>
              </div>
              <h3 className="text-lg">Mac</h3>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 mb-4">
                <div className="h-20 flex items-center justify-center text-3xl">📟</div>
              </div>
              <h3 className="text-lg">iPad</h3>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 mb-4">
                <div className="h-20 flex items-center justify-center text-3xl">⌚</div>
              </div>
              <h3 className="text-lg">Apple Watch</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}