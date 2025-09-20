import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useCart } from "./CartContext";
import { toast } from "sonner@2.0.3";
import { navigateTo } from "./Router";

interface ProductShowcaseProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  price: number;
  backgroundColor?: string;
  textColor?: string;
  buttonStyle?: "blue" | "dark";
}

export function ProductShowcase({
  id,
  title,
  subtitle,
  description,
  imageUrl,
  imageAlt,
  price,
  backgroundColor = "bg-white",
  textColor = "text-black",
  buttonStyle = "blue",
}: ProductShowcaseProps) {
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

  const buttonClasses =
    buttonStyle === "blue"
      ? "bg-[#0071e3] text-white hover:bg-[#0077ed]"
      : "bg-black text-white hover:bg-gray-800";

  const buttonOutlineClasses =
    buttonStyle === "blue"
      ? "border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white"
      : "border-black text-black hover:bg-black hover:text-white";

  return (
    <section className={`${backgroundColor} ${textColor}`}>
      <div className="max-w-[1024px] mx-auto px-6 py-16">
        <div className="text-center space-y-4 mb-12">
          <div className="text-lg">{subtitle}</div>
          <h2 className="text-5xl tracking-tight">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="text-2xl opacity-90 mb-4">₩{price.toLocaleString()}부터</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={() => navigateTo(`/product/${id}`)}
              className={`inline-flex items-center justify-center px-6 py-3 rounded-full transition-colors ${buttonClasses}`}
            >
              더 알아보기
            </button>
            <button
              onClick={handleAddToCart}
              className={`inline-flex items-center justify-center px-6 py-3 border rounded-full transition-colors ${buttonOutlineClasses}`}
            >
              구입하기
            </button>
          </div>
        </div>
        <div className="relative mx-auto max-w-4xl">
          <ImageWithFallback
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-auto object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}