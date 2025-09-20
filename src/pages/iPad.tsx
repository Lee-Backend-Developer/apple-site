import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function IPadPage() {
  const iPadProducts = [
    {
      name: "iPad Pro",
      description: "궁극의 iPad 경험. M2 칩의 막강한 성능.",
      price: "₩1,249,000부터",
      sizes: ["11인치", "12.9인치"],
      image: "https://images.unsplash.com/photo-1629131704989-c74179b0ce16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGFkJTIwdGFibGV0JTIwbW9kZXJufGVufDF8fHx8MTc1ODI4NTYzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "iPad Air",
      description: "색다른 능력. 색다른 재미. 색다른 컬러.",
      price: "₩899,000부터",
      sizes: ["10.9인치"],
      image: "https://images.unsplash.com/photo-1629131704989-c74179b0ce16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGFkJTIwdGFibGV0JTIwbW9kZXJufGVufDF8fHx8MTc1ODI4NTYzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "iPad",
      description: "만족스러운 성능. 만족스러운 가격.",
      price: "₩679,000부터",
      sizes: ["10.9인치"],
      image: "https://images.unsplash.com/photo-1629131704989-c74179b0ce16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGFkJTIwdGFibGV0JTIwbW9kZXJufGVufDF8fHx8MTc1ODI4NTYzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "iPad mini",
      description: "메가급 성능. 미니 사이즈.",
      price: "₩749,000부터",
      sizes: ["8.3인치"],
      image: "https://images.unsplash.com/photo-1629131704989-c74179b0ce16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGFkJTIwdGFibGV0JTIwbW9kZXJufGVufDF8fHx8MTc1ODI4NTYzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h1 className="text-6xl mb-4">iPad</h1>
          <p className="text-2xl text-gray-300 mb-8">
            놀랍도록 다재다능. 믿을 수 없을 만큼 능력이 뛰어나다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0071e3] text-white rounded-full hover:bg-[#0077ed] transition-colors"
            >
              iPad 살펴보기
            </a>
            <a
              href="#compare"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#0071e3] text-[#0071e3] rounded-full hover:bg-[#0071e3] hover:text-white transition-colors"
            >
              iPad 비교하기
            </a>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">나에게 맞는 iPad 찾기</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {iPadProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="mb-8">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-2xl mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg mb-4">{product.price}</p>
                
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
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#0071e3] text-white rounded-full hover:bg-[#0077ed] transition-colors"
                  >
                    구입하기
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 border border-[#0071e3] text-[#0071e3] rounded-full hover:bg-[#0071e3] hover:text-white transition-colors"
                  >
                    더 알아보기
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1024px] mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">iPad가 할 수 있는 놀라운 일들</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">✏️</div>
                <h3 className="text-xl mb-2">Apple Pencil</h3>
                <p className="text-gray-600">픽셀 수준의 정밀도로 그리고, 쓰고, 표시하세요</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">⌨️</div>
                <h3 className="text-xl mb-2">Magic Keyboard</h3>
                <p className="text-gray-600">노트북처럼 타이핑하고 트랙패드를 활용하세요</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 rounded-2xl p-8 mb-6">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl mb-2">앱 스토어</h3>
                <p className="text-gray-600">백만 개가 넘는 iPad 전용 앱을 만나보세요</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h2 className="text-4xl mb-8">iPad 액세서리</h2>
          <p className="text-xl text-gray-600 mb-12">
            iPad의 잠재력을 최대한 끌어내는 액세서리들입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 mb-4">
                <div className="h-32 flex items-center justify-center text-4xl">✏️</div>
              </div>
              <h3 className="text-lg mb-2">Apple Pencil</h3>
              <p className="text-gray-600">₩159,000부터</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 mb-4">
                <div className="h-32 flex items-center justify-center text-4xl">⌨️</div>
              </div>
              <h3 className="text-lg mb-2">Magic Keyboard</h3>
              <p className="text-gray-600">₩399,000부터</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 mb-4">
                <div className="h-32 flex items-center justify-center text-4xl">🛡️</div>
              </div>
              <h3 className="text-lg mb-2">Smart Folio</h3>
              <p className="text-gray-600">₩95,000부터</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}