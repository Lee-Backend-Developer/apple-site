import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useCart } from "../components/CartContext";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { toast } from "sonner@2.0.3";
import { Star, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react";
import { navigateTo } from "../components/Router";

interface ProductDetailProps {
  productId: string;
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data - in real app, this would come from an API
  const productData: { [key: string]: any } = {
    "macbook-pro-m3": {
      id: "macbook-pro-m3",
      name: "MacBook Pro",
      subtitle: "M3 칩 탑재",
      description: "막강한 성능의 M3, M3 Pro, M3 Max 칩을 탑재한 MacBook Pro. 최대 22시간의 배터리 사용 시간으로 하루 종일 작업할 수 있습니다.",
      basePrice: 2390000,
      rating: 4.8,
      reviewCount: 2847,
      images: [
        "https://images.unsplash.com/photo-1705617551935-63c5fc09ba72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNib29rJTIwbGFwdG9wJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODI4NTYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1705617551935-63c5fc09ba72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNib29rJTIwbGFwdG9wJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODI4NTYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      colors: [
        { name: "스페이스 블랙", value: "#1a1a1a", price: 0 },
        { name: "실버", value: "#e8e8e8", price: 0 }
      ],
      storageOptions: [
        { name: "512GB SSD", price: 0 },
        { name: "1TB SSD", price: 300000 },
        { name: "2TB SSD", price: 900000 }
      ],
      specifications: {
        processor: "Apple M3 칩",
        display: "14인치 Liquid Retina XDR 디스플레이",
        memory: "8GB 통합 메모리",
        graphics: "10코어 GPU",
        battery: "최대 22시간 배터리 사용 시간",
        ports: "3개의 Thunderbolt 4 포트, HDMI 포트, SDXC 카드 슬롯, MagSafe 3 포트",
        camera: "1080p FaceTime HD 카메라",
        audio: "고충실도 6스피커 사운드 시스템",
        keyboard: "백라이트 Magic Keyboard",
        weight: "1.55kg",
        dimensions: "31.26 x 22.12 x 1.55cm"
      },
      features: [
        "M3 칩으로 업그레이드된 성능",
        "Liquid Retina XDR 디스플레이",
        "최대 22시간 배터리 사용 시간", 
        "고급 카메라 및 오디오",
        "모든 포트와 연결성"
      ],
      inBox: [
        "MacBook Pro",
        "67W USB-C 전원 어댑터",
        "USB-C to MagSafe 3 케이블 (2m)"
      ],
      category: "노트북"
    },
    "iphone-15-pro": {
      id: "iphone-15-pro",
      name: "iPhone 15 Pro",
      subtitle: "티타늄 디자인",
      description: "티타늄으로 제작된 iPhone 15 Pro. 강력한 A17 Pro 칩과 혁신적인 카메라 시스템을 만나보세요.",
      basePrice: 1550000,
      rating: 4.9,
      reviewCount: 5234,
      images: [
        "https://images.unsplash.com/photo-1652721367098-0ecad4cc0370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGlwaG9uZSUyMG1vZGVybiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4Mjg1NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      colors: [
        { name: "내추럴 티타늄", value: "#f1f0ea", price: 0 },
        { name: "블루 티타늄", value: "#4a5568", price: 0 },
        { name: "화이트 티타늄", value: "#f7fafc", price: 0 },
        { name: "블랙 티타늄", value: "#2d3748", price: 0 }
      ],
      storageOptions: [
        { name: "128GB", price: 0 },
        { name: "256GB", price: 150000 },
        { name: "512GB", price: 400000 },
        { name: "1TB", price: 900000 }
      ],
      specifications: {
        processor: "A17 Pro 칩",
        display: "6.1인치 Super Retina XDR 디스플레이",
        camera: "Pro 카메라 시스템",
        battery: "최대 23시간 비디오 재생",
        connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3",
        resistance: "IP68 등급",
        material: "티타늄 디자인",
        weight: "187g",
        dimensions: "146.6 x 70.6 x 8.25mm"
      },
      features: [
        "A17 Pro 칩의 혁신적 성능",
        "Pro 카메라 시스템",
        "액션 버튼",
        "USB-C 커넥터",
        "티타늄 디자인"
      ],
      inBox: [
        "iPhone 15 Pro",
        "USB-C to USB-C 케이블 (1m)",
        "설명서"
      ],
      category: "스마트폰"
    }
  };

  const product = productData[productId];

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h1 className="text-6xl mb-8">제품을 찾을 수 없습니다</h1>
          <p className="text-2xl text-gray-600 mb-12">
            요청하신 제품이 존재하지 않습니다.
          </p>
          <Button
            onClick={() => navigateTo("/")}
            className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3 rounded-full"
          >
            홈으로 돌아가기
          </Button>
        </div>
      </div>
    );
  }

  const currentPrice = product.basePrice + 
    product.colors[selectedColor].price + 
    product.storageOptions[selectedStorage].price;

  const handleAddToCart = () => {
    const cartProduct = {
      id: `${product.id}-${selectedColor}-${selectedStorage}`,
      name: `${product.name} ${product.colors[selectedColor].name} ${product.storageOptions[selectedStorage].name}`,
      price: currentPrice,
      image: product.images[0],
      category: product.category,
      quantity: quantity,
      specifications: Object.entries(product.specifications).map(([key, value]) => `${key}: ${value}`)
    };
    
    addToCart(cartProduct);
    toast.success(`${product.name}이(가) 장바구니에 추가되었습니다.`);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? "위시리스트에서 제거되었습니다." : "위시리스트에 추가되었습니다.");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#f5f5f7] py-4">
        <div className="max-w-[1024px] mx-auto px-6">
          <nav className="text-sm text-gray-600">
            <button onClick={() => navigateTo("/")} className="hover:text-[#0071e3]">
              홈
            </button>
            <span className="mx-2">{">"}</span>
            <button onClick={() => navigateTo("/store")} className="hover:text-[#0071e3]">
              스토어
            </button>
            <span className="mx-2">{">"}</span>
            <span className="text-black">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 rounded-3xl overflow-hidden">
              <ImageWithFallback
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {product.images.slice(1).map((image: string, index: number) => (
                  <div key={index} className="aspect-square bg-gray-50 rounded-2xl overflow-hidden">
                    <ImageWithFallback
                      src={image}
                      alt={`${product.name} ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className="mb-2">
                  {product.category}
                </Badge>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={toggleWishlist}
                    className={`p-2 rounded-full transition-colors ${
                      isWishlisted ? "text-red-500 bg-red-50" : "text-gray-400 hover:text-red-500"
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                  </button>
                  <button className="p-2 rounded-full text-gray-400 hover:text-[#0071e3] transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <h1 className="text-4xl mb-2">{product.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{product.subtitle}</p>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviewCount.toLocaleString()}개 리뷰)
                  </span>
                </div>
              </div>

              <div className="text-3xl mb-6">₩{currentPrice.toLocaleString()}</div>
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg mb-3">컬러 선택</h3>
              <div className="flex gap-3">
                {product.colors.map((color: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`relative w-12 h-12 rounded-full border-2 transition-all ${
                      selectedColor === index ? "border-[#0071e3] scale-110" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.value }}
                  >
                    {selectedColor === index && (
                      <div className="absolute inset-0 rounded-full border-2 border-white"></div>
                    )}
                    <span className="sr-only">{color.name}</span>
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                선택된 컬러: {product.colors[selectedColor].name}
              </p>
            </div>

            {/* Storage Selection */}
            <div>
              <h3 className="text-lg mb-3">저장 용량</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.storageOptions.map((storage: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedStorage(index)}
                    className={`p-4 border rounded-2xl text-center transition-all ${
                      selectedStorage === index
                        ? "border-[#0071e3] bg-[#0071e3] text-white"
                        : "border-gray-300 hover:border-[#0071e3]"
                    }`}
                  >
                    <div className="font-medium">{storage.name}</div>
                    {storage.price > 0 && (
                      <div className="text-sm opacity-80">+₩{storage.price.toLocaleString()}</div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg mb-3">수량</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#0071e3] transition-colors"
                >
                  -
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#0071e3] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                onClick={handleAddToCart}
                className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-4 rounded-full text-lg"
              >
                장바구니에 추가
              </Button>
              <Button
                variant="outline"
                className="w-full border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white py-4 rounded-full text-lg"
              >
                바로 구매
              </Button>
            </div>

            {/* Service Info */}
            <div className="space-y-3 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Truck className="w-5 h-5" />
                <span>무료 배송 및 반품</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Shield className="w-5 h-5" />
                <span>AppleCare+ 보장 서비스 이용 가능</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <RotateCcw className="w-5 h-5" />
                <span>14일 무료 반품 정책</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="specs">기술 사양</TabsTrigger>
              <TabsTrigger value="features">주요 기능</TabsTrigger>
              <TabsTrigger value="inbox">박스 구성품</TabsTrigger>
              <TabsTrigger value="support">지원</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specs" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-6">기술 사양</h3>
                  <div className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0">
                        <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="text-right max-w-md">{value as string}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="features" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-6">주요 기능</h3>
                  <div className="space-y-4">
                    {product.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#0071e3] rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="inbox" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-6">박스 구성품</h3>
                  <div className="space-y-4">
                    {product.inBox.map((item: string, index: number) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="support" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-6">지원 및 서비스</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg mb-2">AppleCare+</h4>
                      <p className="text-gray-600 mb-4">
                        우발적인 손상에 대한 보장을 포함하여 {product.name}에 대한 전문적인 기술 지원과 하드웨어 보장 서비스를 받을 수 있습니다.
                      </p>
                      <Button variant="outline" className="border-[#0071e3] text-[#0071e3]">
                        AppleCare+ 알아보기
                      </Button>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="text-lg mb-2">기술 지원</h4>
                      <p className="text-gray-600 mb-4">
                        {product.name} 사용에 대한 질문이 있으시면 Apple 지원팀이 도와드립니다.
                      </p>
                      <Button variant="outline" className="border-[#0071e3] text-[#0071e3]">
                        지원 받기
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}