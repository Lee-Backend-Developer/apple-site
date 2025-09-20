import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useCart } from "./CartContext";
import { toast } from "sonner@2.0.3";
import { navigateTo } from "./Router";

interface ProductCardProps {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  price: number;
  backgroundColor?: string;
  textColor?: string;
}

function ProductCard({
  id,
  title,
  subtitle,
  imageUrl,
  imageAlt,
  price,
  backgroundColor = "bg-white",
  textColor = "text-black",
}: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    const product = {
      id,
      name: title,
      price,
      image: imageUrl,
      quantity: 1
    };
    addToCart(product);
    toast.success(`${title}이(가) 장바구니에 추가되었습니다.`);
  };

  return (
    <div className={`${backgroundColor} ${textColor} rounded-3xl overflow-hidden group cursor-pointer`}>
      <div className="p-8 text-center">
        <div className="space-y-2 mb-8">
          <div className="text-sm opacity-80">{subtitle}</div>
          <h3 className="text-3xl tracking-tight">{title}</h3>
          <div className="text-xl opacity-90 mb-4">₩{price.toLocaleString()}</div>
          <div className="flex gap-4 justify-center items-center pt-2">
            <button 
              onClick={() => navigateTo(`/product/${id}`)}
              className="text-[#0071e3] hover:underline bg-transparent border-none cursor-pointer"
            >
              더 알아보기
            </button>
            <button 
              onClick={handleAddToCart}
              className="text-[#0071e3] hover:underline bg-transparent border-none cursor-pointer"
            >
              구입하기
            </button>
          </div>
        </div>
        <div className="relative">
          <ImageWithFallback
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export function ProductGrid() {
  const products = [
    {
      id: "watch-series-9",
      title: "Apple Watch Series 9",
      subtitle: "스마트. 밝다. 막강하다.",
      price: 599000,
      imageUrl: "https://images.unsplash.com/photo-1676173648519-06522eb8c269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHdhdGNoJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgyODQ1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Apple Watch Series 9",
      backgroundColor: "bg-gradient-to-b from-gray-900 to-black",
      textColor: "text-white",
    },
    {
      id: "ipad-pro-m2",
      title: "iPad Pro",
      subtitle: "막강한 성능의 M2 칩",
      price: 1349000,
      imageUrl: "https://images.unsplash.com/photo-1629131704989-c74179b0ce16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGFkJTIwdGFibGV0JTIwbW9kZXJufGVufDF8fHx8MTc1ODI4NTYzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "iPad Pro",
      backgroundColor: "bg-gray-50",
      textColor: "text-black",
    },
  ];

  return (
    <section className="bg-[#f5f5f7] py-16">
      <div className="max-w-[1024px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}