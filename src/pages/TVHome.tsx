import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useCart } from "../components/CartContext";
import { Button } from "../components/ui/button";
import { toast } from "sonner@2.0.3";

export function TVHome() {
  const { addToCart } = useCart();
  
  const tvProducts = [
    {
      id: "apple-tv-4k",
      name: "Apple TV 4K",
      description: "최고의 화질과 몰입감 있는 오디오 경험.",
      price: 199000,
      priceText: "₩199,000부터",
      category: "미디어 플레이어",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHR2JTIwYm94fGVufDF8fHx8MTc1ODI4NjQwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["A15 Bionic 칩", "4K HDR10+ 지원", "Dolby Vision", "64GB 또는 128GB"]
    },
    {
      id: "homepod",
      name: "HomePod",
      description: "놀라운 음질의 스마트 스피커.",
      price: 399000,
      priceText: "₩399,000",
      category: "스마트 스피커",
      image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVha2VyJTIwc21hcnQlMjBob21lfGVufDF8fHx8MTc1ODI4NjQzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["S7 칩", "고편위 우퍼", "Siri 내장", "Touch 컨트롤"]
    },
    {
      id: "homepod-mini",
      name: "HomePod mini",
      description: "놀라운 사운드를 작은 크기에 담다.",
      price: 129000,
      priceText: "₩129,000",
      category: "스마트 스피커",
      image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVha2VyJTIwc21hcnQlMjBob21lfGVufDF8fHx8MTc1ODI4NjQzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["S5 칩", "360도 오디오", "Siri 내장", "5가지 컬러"]
    },
  ];

  const handleAddToCart = (product: typeof tvProducts[0]) => {
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
      <section className="bg-black text-white py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h1 className="text-6xl mb-4">TV 및 홈</h1>
          <p className="text-2xl text-gray-300 mb-8">
            거실의 모든 엔터테인먼트가 Apple로 시작됩니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0071e3] text-white rounded-full hover:bg-[#0077ed] transition-colors"
            >
              제품 살펴보기
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#0071e3] text-[#0071e3] rounded-full hover:bg-[#0071e3] hover:text-white transition-colors"
            >
              기능 알아보기
            </a>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">TV 및 홈 제품</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tvProducts.map((product) => (
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

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-[1024px] mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">Apple TV 4K의 특별한 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">📺</div>
                <h3 className="text-xl mb-2">4K HDR</h3>
                <p className="text-gray-600">Dolby Vision과 HDR10+로 더욱 생생한 화질</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-xl mb-2">Dolby Atmos</h3>
                <p className="text-gray-600">몰입감 있는 3D 오디오 경험</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl mb-2">Apple Arcade</h3>
                <p className="text-gray-600">100개 이상의 프리미엄 게임</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h2 className="text-4xl mb-8">Apple 서비스</h2>
          <p className="text-xl text-gray-600 mb-12">
            Apple TV 4K와 함께 즐기는 다양한 엔터테인먼트 서비스
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 mb-4">
                <div className="h-24 flex items-center justify-center text-3xl">📺</div>
              </div>
              <h3 className="text-lg mb-2">Apple TV+</h3>
              <p className="text-gray-600 text-sm">오리지널 콘텐츠</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 mb-4">
                <div className="h-24 flex items-center justify-center text-3xl">🎵</div>
              </div>
              <h3 className="text-lg mb-2">Apple Music</h3>
              <p className="text-gray-600 text-sm">수백만 곡의 음악</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 mb-4">
                <div className="h-24 flex items-center justify-center text-3xl">🎮</div>
              </div>
              <h3 className="text-lg mb-2">Apple Arcade</h3>
              <p className="text-gray-600 text-sm">프리미엄 게임</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 mb-4">
                <div className="h-24 flex items-center justify-center text-3xl">💪</div>
              </div>
              <h3 className="text-lg mb-2">Apple Fitness+</h3>
              <p className="text-gray-600 text-sm">홈 피트니스</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}