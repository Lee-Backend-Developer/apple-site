import { useState, useEffect } from "react";
import { useCart } from "../components/CartContext";
import { useAuth } from "../components/AuthContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Separator } from "../components/ui/separator";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { navigateTo } from "../components/Router";
import { CreditCard, Shield, Truck } from "lucide-react";

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface PaymentInfo {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
}

export function Checkout() {
  const { items, getTotalPrice, clearCart } = useCart();
  const { addOrder } = useAuth();
  const [step, setStep] = useState<'shipping' | 'payment' | 'review' | 'complete'>('shipping');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '한국'
  });

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  // If cart is empty, redirect to cart
  useEffect(() => {
    if (items.length === 0) {
      navigateTo('/cart');
    }
  }, [items.length]);

  // Show loading or nothing while redirecting for empty cart
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] py-20">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <div className="bg-white rounded-3xl p-12">
            <div className="text-6xl mb-8">🛒</div>
            <p className="text-xl text-gray-600">장바구니로 이동 중...</p>
          </div>
        </div>
      </div>
    );
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('review');
  };

  const handleFinalOrder = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Add order to history
    const newOrder = {
      id: `ORD-${Date.now().toString().slice(-8)}`,
      date: new Date().toISOString().split('T')[0],
      items: items.map(item => ({...item})),
      total: Math.round(getTotalPrice() * 1.1), // Include tax
      status: "주문완료"
    };
    addOrder(newOrder);
    
    setIsProcessing(false);
    setStep('complete');
    clearCart();
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  if (step === 'complete') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] py-20">
        <div className="max-w-[600px] mx-auto px-6">
          <div className="bg-white rounded-3xl p-12 text-center">
            <div className="text-6xl mb-8">✅</div>
            <h1 className="text-4xl mb-6">주문이 완료되었습니다</h1>
            <p className="text-xl text-gray-600 mb-8">
              주문 확인 이메일을 {shippingInfo.email}으로 발송했습니다.
            </p>
            <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
              <p className="text-lg mb-2">주문 번호</p>
              <p className="font-mono text-xl">AP{Date.now().toString().slice(-8)}</p>
            </div>
            <div className="space-y-3">
              <Button 
                className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-4 rounded-full text-lg"
                onClick={() => navigateTo('/')}
              >
                홈으로 돌아가기
              </Button>
              <Button 
                variant="outline"
                className="w-full border-2 border-gray-300 py-4 rounded-full text-lg"
                onClick={() => navigateTo('/store')}
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
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">결제</h1>
          <div className="flex justify-center items-center space-x-8 text-lg">
            <div className={`flex items-center space-x-2 ${step === 'shipping' ? 'text-[#0071e3]' : step === 'payment' || step === 'review' ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'shipping' ? 'bg-[#0071e3] text-white' : step === 'payment' || step === 'review' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <span>배송정보</span>
            </div>
            <div className={`flex items-center space-x-2 ${step === 'payment' ? 'text-[#0071e3]' : step === 'review' ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'payment' ? 'bg-[#0071e3] text-white' : step === 'review' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                2
              </div>
              <span>결제정보</span>
            </div>
            <div className={`flex items-center space-x-2 ${step === 'review' ? 'text-[#0071e3]' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'review' ? 'bg-[#0071e3] text-white' : 'bg-gray-200'}`}>
                3
              </div>
              <span>주문확인</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8">
              {step === 'shipping' && (
                <form onSubmit={handleShippingSubmit} className="space-y-6">
                  <div className="flex items-center space-x-3 mb-8">
                    <Truck className="w-6 h-6 text-[#0071e3]" />
                    <h2 className="text-3xl">배송 정보</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">이름</Label>
                      <Input
                        id="firstName"
                        required
                        value={shippingInfo.firstName}
                        onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                        className="rounded-xl py-6"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">성</Label>
                      <Input
                        id="lastName"
                        required
                        value={shippingInfo.lastName}
                        onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                        className="rounded-xl py-6"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                      className="rounded-xl py-6"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">전화번호</Label>
                    <Input
                      id="phone"
                      required
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                      className="rounded-xl py-6"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">주소</Label>
                    <Input
                      id="address"
                      required
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                      className="rounded-xl py-6"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">도시</Label>
                      <Input
                        id="city"
                        required
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                        className="rounded-xl py-6"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">우편번호</Label>
                      <Input
                        id="postalCode"
                        required
                        value={shippingInfo.postalCode}
                        onChange={(e) => setShippingInfo({...shippingInfo, postalCode: e.target.value})}
                        className="rounded-xl py-6"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">국가</Label>
                    <Select value={shippingInfo.country} onValueChange={(value) => setShippingInfo({...shippingInfo, country: value})}>
                      <SelectTrigger className="rounded-xl py-6">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="한국">대한민국</SelectItem>
                        <SelectItem value="일본">일본</SelectItem>
                        <SelectItem value="미국">미국</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-4 rounded-full text-lg mt-8">
                    결제 정보 입력
                  </Button>
                </form>
              )}

              {step === 'payment' && (
                <form onSubmit={handlePaymentSubmit} className="space-y-6">
                  <div className="flex items-center space-x-3 mb-8">
                    <CreditCard className="w-6 h-6 text-[#0071e3]" />
                    <h2 className="text-3xl">결제 정보</h2>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardholderName">카드 소유자 이름</Label>
                    <Input
                      id="cardholderName"
                      required
                      value={paymentInfo.cardholderName}
                      onChange={(e) => setPaymentInfo({...paymentInfo, cardholderName: e.target.value})}
                      className="rounded-xl py-6"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">카드 번호</Label>
                    <Input
                      id="cardNumber"
                      required
                      placeholder="1234 5678 9012 3456"
                      value={paymentInfo.cardNumber}
                      onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: formatCardNumber(e.target.value)})}
                      maxLength={19}
                      className="rounded-xl py-6"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">유효기간</Label>
                      <Input
                        id="expiryDate"
                        required
                        placeholder="MM/YY"
                        value={paymentInfo.expiryDate}
                        onChange={(e) => {
                          let value = e.target.value.replace(/\D/g, '');
                          if (value.length >= 2) {
                            value = value.substring(0, 2) + '/' + value.substring(2, 4);
                          }
                          setPaymentInfo({...paymentInfo, expiryDate: value});
                        }}
                        maxLength={5}
                        className="rounded-xl py-6"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        required
                        placeholder="123"
                        value={paymentInfo.cvv}
                        onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value.replace(/\D/g, '')})}
                        maxLength={3}
                        className="rounded-xl py-6"
                      />
                    </div>
                  </div>

                  <div className="bg-[#f5f5f7] rounded-2xl p-6 mt-8">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="text-lg mb-2">안전한 결제</p>
                        <p className="text-sm text-gray-600">
                          모든 결제 정보는 256비트 SSL 암호화로 보호됩니다. Apple은 귀하의 카드 정보를 저장하지 않습니다.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-8">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setStep('shipping')}
                      className="flex-1 border-2 border-gray-300 py-4 rounded-full text-lg"
                    >
                      이전
                    </Button>
                    <Button 
                      type="submit" 
                      className="flex-1 bg-[#0071e3] hover:bg-[#0077ed] text-white py-4 rounded-full text-lg"
                    >
                      주문 검토
                    </Button>
                  </div>
                </form>
              )}

              {step === 'review' && (
                <div className="space-y-6">
                  <h2 className="text-3xl mb-8">주문 검토</h2>

                  {/* Shipping Info Review */}
                  <div className="border border-gray-200 rounded-2xl p-6">
                    <h3 className="text-xl mb-4">배송 정보</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>{shippingInfo.firstName} {shippingInfo.lastName}</p>
                      <p>{shippingInfo.address}</p>
                      <p>{shippingInfo.city}, {shippingInfo.postalCode}</p>
                      <p>{shippingInfo.country}</p>
                      <p>{shippingInfo.email}</p>
                      <p>{shippingInfo.phone}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      onClick={() => setStep('shipping')}
                      className="mt-3 text-[#0071e3] hover:bg-blue-50"
                    >
                      수정
                    </Button>
                  </div>

                  {/* Payment Info Review */}
                  <div className="border border-gray-200 rounded-2xl p-6">
                    <h3 className="text-xl mb-4">결제 정보</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>{paymentInfo.cardholderName}</p>
                      <p>**** **** **** {paymentInfo.cardNumber.slice(-4)}</p>
                      <p>만료일: {paymentInfo.expiryDate}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      onClick={() => setStep('payment')}
                      className="mt-3 text-[#0071e3] hover:bg-blue-50"
                    >
                      수정
                    </Button>
                  </div>

                  <Button 
                    onClick={handleFinalOrder}
                    disabled={isProcessing}
                    className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-4 rounded-full text-lg mt-8"
                  >
                    {isProcessing ? '처리 중...' : '주문 완료'}
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 sticky top-24">
              <h2 className="text-2xl mb-6">주문 요약</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-xl flex-shrink-0"
                    />
                    <div className="flex-grow min-w-0">
                      <p className="truncate">{item.name}</p>
                      <p className="text-sm text-gray-500">수량: {item.quantity}</p>
                    </div>
                    <p className="text-lg">₩{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>소계</span>
                  <span>₩{getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>배송비</span>
                  <span className="text-green-600">무료</span>
                </div>
                <div className="flex justify-between">
                  <span>세금</span>
                  <span>₩{Math.round(getTotalPrice() * 0.1).toLocaleString()}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between text-xl mb-6">
                <span>총 금액</span>
                <span>₩{Math.round(getTotalPrice() * 1.1).toLocaleString()}</span>
              </div>

              <div className="text-sm text-gray-600 space-y-2">
                <p>• 무료 배송 및 반품</p>
                <p>• AppleCare+ 가입 가능</p>
                <p>• 전문가 무료 상담</p>
                <p>• 예상 배송일: 2-3일</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}