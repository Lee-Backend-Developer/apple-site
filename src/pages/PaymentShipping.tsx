import { useState } from "react";
import { useAuth } from "../components/AuthContext";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { toast } from "sonner@2.0.3";
import { 
  CreditCard, 
  MapPin, 
  Plus, 
  Edit3, 
  Trash2, 
  Star,
  Truck,
  Shield,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { navigateTo } from "../components/Router";

interface PaymentMethod {
  id: string;
  type: "card" | "apple-pay" | "paypal";
  name: string;
  details: string;
  isDefault: boolean;
  expiryDate?: string;
  last4?: string;
}

interface ShippingAddress {
  id: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  isDefault: boolean;
}

export function PaymentShipping() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<"payment" | "shipping">("payment");
  const [isAddingPayment, setIsAddingPayment] = useState(false);
  const [isAddingAddress, setIsAddingAddress] = useState(false);

  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: "pm-1",
      type: "card",
      name: "신한카드",
      details: "Visa 카드",
      last4: "1234",
      expiryDate: "12/25",
      isDefault: true
    },
    {
      id: "pm-2",
      type: "apple-pay",
      name: "Apple Pay",
      details: "iPhone의 기본 카드",
      isDefault: false
    },
    {
      id: "pm-3",
      type: "card",
      name: "국민카드",
      details: "Mastercard",
      last4: "5678",
      expiryDate: "08/26",
      isDefault: false
    }
  ]);

  const [shippingAddresses, setShippingAddresses] = useState<ShippingAddress[]>([
    {
      id: "addr-1",
      name: "김애플",
      address: "테헤란로 123",
      city: "서울특별시 강남구",
      postalCode: "06234",
      phone: "010-1234-5678",
      isDefault: true
    },
    {
      id: "addr-2",
      name: "김애플 (직장)",
      address: "여의대로 24",
      city: "서울특별시 영등포구",
      postalCode: "07336",
      phone: "010-1234-5678",
      isDefault: false
    }
  ]);

  if (!user) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h1 className="text-6xl mb-8">로그인이 필요합니다</h1>
          <p className="text-2xl text-gray-600 mb-12">
            결제 및 배송 설정에 접근하려면 로그인해주세요.
          </p>
          <Button
            onClick={() => navigateTo("/signup")}
            className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3 rounded-full"
          >
            로그인하기
          </Button>
        </div>
      </div>
    );
  }

  const setDefaultPayment = (id: string) => {
    setPaymentMethods(prev => 
      prev.map(pm => ({ ...pm, isDefault: pm.id === id }))
    );
    toast.success("기본 결제 수단이 변경되었습니다.");
  };

  const setDefaultAddress = (id: string) => {
    setShippingAddresses(prev => 
      prev.map(addr => ({ ...addr, isDefault: addr.id === id }))
    );
    toast.success("기본 배송지가 변경되었습니다.");
  };

  const deletePaymentMethod = (id: string) => {
    setPaymentMethods(prev => prev.filter(pm => pm.id !== id));
    toast.success("결제 수단이 삭제되었습니다.");
  };

  const deleteAddress = (id: string) => {
    setShippingAddresses(prev => prev.filter(addr => addr.id !== id));
    toast.success("배송지가 삭제되었습니다.");
  };

  const getCardIcon = (type: string) => {
    switch (type) {
      case "apple-pay":
        return "🍎";
      case "paypal":
        return "💳";
      default:
        return "💳";
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-[1200px] mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl mb-2">결제 및 배송</h1>
              <p className="text-gray-600">결제 방법과 배송지를 관리하세요.</p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                onClick={() => navigateTo("/account")}
                variant="outline"
                className="border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white"
              >
                내 계정
              </Button>
              <Button
                onClick={() => navigateTo("/account/apple-id")}
                variant="outline"
                className="border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white"
              >
                Apple ID 설정
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg mb-8 w-fit">
          <button
            onClick={() => setActiveTab("payment")}
            className={`px-6 py-3 rounded-md transition-colors ${
              activeTab === "payment"
                ? "bg-white text-[#0071e3] shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            결제 방법
          </button>
          <button
            onClick={() => setActiveTab("shipping")}
            className={`px-6 py-3 rounded-md transition-colors ${
              activeTab === "shipping"
                ? "bg-white text-[#0071e3] shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            배송지 관리
          </button>
        </div>

        {/* Payment Methods Tab */}
        {activeTab === "payment" && (
          <div className="space-y-6">
            {/* Payment Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Apple 결제 혜택
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">안전한 결제</p>
                      <p className="text-sm text-gray-600">256비트 SSL 암호화</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">즉시 결제</p>
                      <p className="text-sm text-gray-600">Touch ID & Face ID 지원</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">포인트 적립</p>
                      <p className="text-sm text-gray-600">Apple Card 캐시백</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods List */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">결제 방법</CardTitle>
                <Dialog open={isAddingPayment} onOpenChange={setIsAddingPayment}>
                  <DialogTrigger asChild>
                    <Button className="bg-[#0071e3] hover:bg-[#0077ed]">
                      <Plus className="w-4 h-4 mr-2" />
                      결제 방법 추가
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>새 결제 방법 추가</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="card-number">카드 번호</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">만료일</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label htmlFor="cvc">보안코드</Label>
                          <Input id="cvc" placeholder="123" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="card-name">카드 소유자명</Label>
                        <Input id="card-name" placeholder="김애플" />
                      </div>
                      <Button 
                        className="w-full bg-[#0071e3] hover:bg-[#0077ed]"
                        onClick={() => {
                          toast.success("결제 방법이 추가되었습니다.");
                          setIsAddingPayment(false);
                        }}
                      >
                        추가하기
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent className="space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{getCardIcon(method.type)}</div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{method.name}</p>
                          {method.isDefault && (
                            <Badge variant="secondary" className="text-xs">
                              기본
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">
                          {method.details}
                          {method.last4 && ` •••• ${method.last4}`}
                          {method.expiryDate && ` • ${method.expiryDate}`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {!method.isDefault && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setDefaultPayment(method.id)}
                        >
                          기본으로 설정
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deletePaymentMethod(method.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Payment Security */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">결제 보안</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="font-medium">이상 결제 알림</p>
                      <p className="text-sm text-gray-600">의심스러운 결제 활동 시 알림을 받습니다</p>
                    </div>
                  </div>
                  <input type="checkbox" className="toggle" defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">���제 확인 요청</p>
                      <p className="text-sm text-gray-600">100,000원 이상 결제 시 추가 인증</p>
                    </div>
                  </div>
                  <input type="checkbox" className="toggle" defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Shipping Addresses Tab */}
        {activeTab === "shipping" && (
          <div className="space-y-6">
            {/* Shipping Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Truck className="w-5 h-5 text-blue-600" />
                  Apple 배송 서비스
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Truck className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">무료 배송</p>
                      <p className="text-sm text-gray-600">모든 주문 무료 배송</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">빠른 배송</p>
                      <p className="text-sm text-gray-600">1-2일 내 배송</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">정확한 배송</p>
                      <p className="text-sm text-gray-600">실시간 배송 추적</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Addresses List */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">배송지 목록</CardTitle>
                <Dialog open={isAddingAddress} onOpenChange={setIsAddingAddress}>
                  <DialogTrigger asChild>
                    <Button className="bg-[#0071e3] hover:bg-[#0077ed]">
                      <Plus className="w-4 h-4 mr-2" />
                      배송지 추가
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>새 배송지 추가</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address-name">받는 사람</Label>
                        <Input id="address-name" placeholder="김애플" />
                      </div>
                      <div>
                        <Label htmlFor="address-street">주소</Label>
                        <Input id="address-street" placeholder="테헤란로 123" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="address-city">도시</Label>
                          <Input id="address-city" placeholder="서울특별시 강남구" />
                        </div>
                        <div>
                          <Label htmlFor="address-postal">우편번호</Label>
                          <Input id="address-postal" placeholder="06234" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="address-phone">전화번호</Label>
                        <Input id="address-phone" placeholder="010-1234-5678" />
                      </div>
                      <Button 
                        className="w-full bg-[#0071e3] hover:bg-[#0077ed]"
                        onClick={() => {
                          toast.success("배송지가 추가되었습니다.");
                          setIsAddingAddress(false);
                        }}
                      >
                        추가하기
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent className="space-y-4">
                {shippingAddresses.map((address) => (
                  <div
                    key={address.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{address.name}</p>
                          {address.isDefault && (
                            <Badge variant="secondary" className="text-xs">
                              기본
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">
                          {address.address}, {address.city} {address.postalCode}
                        </p>
                        <p className="text-sm text-gray-600">{address.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {!address.isDefault && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setDefaultAddress(address.id)}
                        >
                          기본으로 설정
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteAddress(address.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}