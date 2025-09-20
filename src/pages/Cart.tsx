import { useCart } from "../components/CartContext";
import { Button } from "../components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { navigateTo } from "../components/Router";

export function Cart() {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6">
          <div className="text-center">
            <div className="bg-white rounded-3xl p-16 max-w-2xl mx-auto">
              <div className="text-6xl mb-8">🛒</div>
              <h1 className="text-4xl mb-6">장바구니가 비어있습니다</h1>
              <p className="text-xl text-gray-600 mb-8">
                Apple 제품을 둘러보고 마음에 드는 제품을 장바구니에 담아보세요.
              </p>
              <Button 
                className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3 rounded-full"
                onClick={() => window.history.back()}
              >
                쇼핑 계속하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] py-20">
      <div className="max-w-[1024px] mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-6xl mb-4">장바구니</h1>
          <p className="text-xl text-gray-600">
            {items.length}개의 제품이 장바구니에 담겨있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl mb-2">{item.name}</h3>
                        <p className="text-gray-600 mb-2">{item.category}</p>
                        {item.specifications && (
                          <div className="text-sm text-gray-500">
                            {item.specifications.map((spec, index) => (
                              <span key={index} className="block">{spec}</span>
                            ))}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors p-2"
                        aria-label="제품 삭제"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-lg min-w-[2rem] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl">₩{(item.price * item.quantity).toLocaleString()}</p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-gray-500">
                            개당 ₩{item.price.toLocaleString()}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 sticky top-24">
              <h2 className="text-2xl mb-6">주문 요약</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>소계</span>
                  <span>₩{getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>배송비</span>
                  <span className="text-green-600">무료</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl">
                    <span>총 금액</span>
                    <span>₩{getTotalPrice().toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-4 rounded-full text-lg"
                  onClick={() => navigateTo('/checkout')}
                >
                  주문하기
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-gray-300 py-4 rounded-full text-lg"
                  onClick={() => navigateTo('/checkout')}
                >
                  Apple Pay로 결제
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <Button
                  variant="ghost"
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 w-full"
                >
                  장바구니 비우기
                </Button>
              </div>

              <div className="mt-6 text-sm text-gray-600">
                <p className="mb-2">• 무료 배송 및 반품</p>
                <p className="mb-2">• Apple Care+ 가입 가능</p>
                <p>• 전문가 무료 상담</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}