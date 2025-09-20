import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  backgroundColor?: string;
  textColor?: string;
}

function ProductCard({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  backgroundColor = "bg-white",
  textColor = "text-black",
}: ProductCardProps) {
  return (
    <div className={`${backgroundColor} ${textColor} rounded-3xl overflow-hidden group cursor-pointer`}>
      <div className="p-8 text-center">
        <div className="space-y-2 mb-8">
          <div className="text-sm opacity-80">{subtitle}</div>
          <h3 className="text-3xl tracking-tight">{title}</h3>
          <div className="flex gap-4 justify-center items-center pt-2">
            <a href="#" className="text-[#0071e3] hover:underline">
              더 알아보기
            </a>
            <a href="#" className="text-[#0071e3] hover:underline">
              구입하기
            </a>
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
      title: "Apple Watch Series 9",
      subtitle: "스마트. 밝다. 막강하다.",
      imageUrl: "https://images.unsplash.com/photo-1676173648519-06522eb8c269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHdhdGNoJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgyODQ1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Apple Watch Series 9",
      backgroundColor: "bg-gradient-to-b from-gray-900 to-black",
      textColor: "text-white",
    },
    {
      title: "iPad Pro",
      subtitle: "막강한 성능의 M2 칩",
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