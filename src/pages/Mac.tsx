import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useCart } from "../components/CartContext";
import { Button } from "../components/ui/button";
import { toast } from "sonner@2.0.3";

export function Mac() {
  const { addToCart } = useCart();
  
  const macProducts = [
    {
      id: "macbook-air-m3",
      name: "MacBook Air",
      description: "놀랍도록 얇다. 믿을 수 없을 만큼 능력이 뛰어나다.",
      price: 1390000,
      priceText: "₩1,390,000부터",
      image: "https://images.unsplash.com/photo-1705617551935-63c5fc09ba72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNib29rJTIwbGFwdG9wJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODI4NTYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "노트북",
      specifications: ["M3 칩", "13.6인치 Liquid Retina 디스플레이", "최대 18시간 배터리"]
    },
    {
      id: "macbook-pro-m3",
      name: "MacBook Pro",
      description: "막강한 성능의 M3 칩을 탑재한 프로급 노트북.",
      price: 2390000,
      priceText: "₩2,390,000부터",
      image: "https://images.unsplash.com/photo-1705617551935-63c5fc09ba72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNib29rJTIwbGFwdG9wJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODI4NTYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "노트북",
      specifications: ["M3 Pro 칩", "14인치 Liquid Retina XDR 디스플레이", "최대 22시간 배터리"]
    },
    {
      id: "imac-24",
      name: "iMac",
      description: "24인치 올인원 데스크톱. 7가지 생생한 컬러로 만나보세요.",
      price: 1699000,
      priceText: "₩1,699,000부터",
      image: "https://images.unsplash.com/photo-1643094829508-d8a30140e916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWMlMjBkZXNrdG9wJTIwY29tcHV0ZXJ8ZW58MXx8fHx8MTc1ODI4NjI1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "데스크톱",
      specifications: ["M3 칩", "24인치 4.5K Retina 디스플레이", "7가지 컬러 옵션"]
    },
    {
      id: "mac-studio-m2",
      name: "Mac Studio",
      description: "데스크톱급 성능을 놀랍도록 컴팩트한 디자인에 담다.",
      price: 2490000,
      priceText: "₩2,490,000부터",
      image: "https://images.unsplash.com/photo-1643094829508-d8a30140e916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWMlMjBkZXNrdG9wJTIwY29tcHV0ZXJ8ZW58MXx8fHx8MTc1ODI4NjI1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "데스크톱",
      specifications: ["M2 Max 칩", "컴팩트한 디자인", "프로급 성능"]
    },
  ];

  const accessories = [
    {
      id: "magic-mouse",
      name: "Magic Mouse",
      price: 99000,
      priceText: "₩99,000",
      category: "액세서리",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VzZSUyMGNvbXB1dGVyfGVufDF8fHx8MTc1ODI4NjMxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["무선 연결", "멀티터치 표면", "라이트닝 충전"]
    },
    {
      id: "magic-keyboard",
      name: "Magic Keyboard",
      price: 129000,
      priceText: "₩129,000",
      category: "액세서리",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXlib2FyZCUyMGNvbXB1dGVyfGVufDF8fHx8MTc1ODI4NjMyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["시저 구조 키", "무선 연결", "라이트닝 충전"]
    },
    {
      id: "studio-display",
      name: "Studio Display",
      price: 1999000,
      priceText: "₩1,999,000",
      category: "디스플레이",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25pdG9yJTIwZGlzcGxheXxlbnwxfHx8fDE3NTgyODYzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: ["27인치 5K Retina", "12MP 울트라 와이드 카메라", "6스피커 사운드 시스템"]
    },
  ];

  const handleAddToCart = (product: typeof macProducts[0] | typeof accessories[0]) => {
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
          <h1 className="text-6xl mb-4">Mac</h1>
          <p className="text-2xl text-gray-300 mb-8">
            놀라운 능력. 놀라운 가치. 놀라운 Mac.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0071e3] text-white rounded-full hover:bg-[#0077ed] transition-colors"
            >
              Mac 살펴보기
            </a>
            <a
              href="#compare"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#0071e3] text-[#0071e3] rounded-full hover:bg-[#0071e3] hover:text-white transition-colors"
            >
              Mac 비교하기
            </a>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">나에게 맞는 Mac 찾기</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {macProducts.map((product) => (
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

      {/* Accessories Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h2 className="text-4xl mb-8">Mac 액세서리</h2>
          <p className="text-xl text-gray-600 mb-12">
            Mac을 더욱 강력하게 만들어주는 액세서리들을 살펴보세요.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accessories.map((accessory) => (
              <div key={accessory.id} className="text-center bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                  <ImageWithFallback
                    src={accessory.image}
                    alt={accessory.name}
                    className="w-full h-48 object-cover rounded-xl"
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