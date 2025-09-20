import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useCart } from "../components/CartContext";
import { Button } from "../components/ui/button";
import { toast } from "sonner@2.0.3";

export function Watch() {
  const { addToCart } = useCart();
  
  const watchProducts = [
    {
      id: "apple-watch-series-9",
      name: "Apple Watch Series 9",
      description: "스마트. 밝다. 막강하다.",
      price: 599000,
      priceText: "₩599,000부터",
      sizes: ["41mm", "45mm"],
      category: "스마트워치",
      image: "https://images.unsplash.com/photo-1676173648519-06522eb8c269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHdhdGNoJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgyODQ1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["S9 SiP 칩", "Always-On Retina 디스플레이", "혈중 산소 측정", "ECG 앱"]
    },
    {
      id: "apple-watch-ultra-2",
      name: "Apple Watch Ultra 2",
      description: "한계를 뛰어넘는 모험을 위해.",
      price: 1149000,
      priceText: "₩1,149,000부터",
      sizes: ["49mm"],
      category: "스마트워치",
      image: "https://images.unsplash.com/photo-1676173648519-06522eb8c269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHdhdGNoJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgyODQ1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["S9 SiP 칩", "가장 밝은 Always-On Retina 디스플레이", "티타늄 케이스", "100m 방수"]
    },
    {
      id: "apple-watch-se",
      name: "Apple Watch SE",
      description: "Apple Watch의 핵심 기능들을 합리적인 가격에.",
      price: 359000,
      priceText: "₩359,000부터",
      sizes: ["40mm", "44mm"],
      category: "스마트워치",
      image: "https://images.unsplash.com/photo-1676173648519-06522eb8c269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHdhdGNoJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgyODQ1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["S8 SiP 칩", "Retina 디스플레이", "활동 측정", "수면 추적"]
    },
  ];

  const handleAddToCart = (product: typeof watchProducts[0]) => {
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
      <section className="bg-gradient-to-b from-red-900 to-black text-white py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h1 className="text-6xl mb-4">Apple Watch</h1>
          <p className="text-2xl text-gray-300 mb-8">
            더 건강한 일상. 더 안전한 하루. 더 연결된 삶.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0071e3] text-white rounded-full hover:bg-[#0077ed] transition-colors"
            >
              Watch 살펴보기
            </a>
            <a
              href="#compare"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#0071e3] text-[#0071e3] rounded-full hover:bg-[#0071e3] hover:text-white transition-colors"
            >
              Watch 비교하기
            </a>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">나에게 맞는 Apple Watch 찾기</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {watchProducts.map((product) => (
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
                
                {/* Size Options */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">크기:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {product.sizes.map((size, sizeIndex) => (
                      <span
                        key={sizeIndex}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {size}
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

      {/* Health Features */}
      <section className="bg-white py-20">
        <div className="max-w-[1024px] mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">건강과 피트니스의 새로운 기준</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-50 rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-xl mb-2">심박수 모니터링</h3>
                <p className="text-gray-600">24시간 건강 상태를 확인하세요</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">💤</div>
                <h3 className="text-xl mb-2">수면 추적</h3>
                <p className="text-gray-600">수면의 질을 개선하세요</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-50 rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">🏃</div>
                <h3 className="text-xl mb-2">운동 추적</h3>
                <p className="text-gray-600">다양한 운동을 정확하게 측정</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-50 rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">🆘</div>
                <h3 className="text-xl mb-2">안전 기능</h3>
                <p className="text-gray-600">응급 상황에서 자동으로 도움 요청</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bands Section */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h2 className="text-4xl mb-8">Apple Watch 밴드</h2>
          <p className="text-xl text-gray-600 mb-12">
            당신의 스타일과 활동에 맞는 완벽한 밴드를 찾아보세요.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 mb-4">
                <div className="h-32 flex items-center justify-center text-4xl">⌚</div>
              </div>
              <h3 className="text-lg mb-2">스포츠 밴드</h3>
              <p className="text-gray-600">₩69,000</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 mb-4">
                <div className="h-32 flex items-center justify-center text-4xl">⌚</div>
              </div>
              <h3 className="text-lg mb-2">스포츠 루프</h3>
              <p className="text-gray-600">₩69,000</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 mb-4">
                <div className="h-32 flex items-center justify-center text-4xl">⌚</div>
              </div>
              <h3 className="text-lg mb-2">가죽 링크</h3>
              <p className="text-gray-600">₩129,000</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 mb-4">
                <div className="h-32 flex items-center justify-center text-4xl">⌚</div>
              </div>
              <h3 className="text-lg mb-2">밀라네즈 루프</h3>
              <p className="text-gray-600">₩129,000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}