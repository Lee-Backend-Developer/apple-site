import { useAuth } from "../components/AuthContext";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { navigateTo } from "../components/Router";
import { 
  ArrowLeft, 
  Package, 
  Truck, 
  CheckCircle, 
  Clock, 
  Download, 
  MapPin, 
  Phone, 
  Mail,
  CreditCard,
  User,
  Calendar,
  RefreshCw
} from "lucide-react";

interface OrderDetailProps {
  orderId?: string;
}

export function OrderDetail({ orderId }: OrderDetailProps) {
  const { orders } = useAuth();
  
  // URL에서 orderId를 가져오거나 props에서 가져옴
  const currentOrderId = orderId || window.location.pathname.split('/').pop();
  const order = orders.find(o => o.id === currentOrderId);

  if (!order) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] py-20">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <div className="bg-white rounded-3xl p-12">
            <Package className="w-16 h-16 text-[#86868b] mx-auto mb-6" />
            <h1 className="text-4xl mb-4">주문을 찾을 수 없습니다</h1>
            <p className="text-xl text-[#86868b] mb-8">
              요청하신 주문이 존재하지 않습니다.
            </p>
            <div className="space-y-4">
              <Button 
                className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3 rounded-full"
                onClick={() => navigateTo("/orders")}
              >
                주문 내역으로 돌아가기
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "주문완료":
        return "bg-blue-100 text-blue-800";
      case "처리중":
        return "bg-yellow-100 text-yellow-800";
      case "배송중":
        return "bg-purple-100 text-purple-800";
      case "배송완료":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "주문완료":
        return <Clock className="w-4 h-4" />;
      case "처리중":
        return <Package className="w-4 h-4" />;
      case "배송중":
        return <Truck className="w-4 h-4" />;
      case "배송완료":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 2);

  return (
    <div className="min-h-screen bg-[#f5f5f7] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigateTo("/orders")}
            className="mb-6 text-[#0066cc] hover:text-[#0077ed] p-0 h-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            주문 내역으로 돌아가기
          </Button>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h1 className="text-5xl mb-2">주문 상세</h1>
              <p className="text-xl text-[#86868b]">주문번호: {order.id}</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <Badge className={`${getStatusColor(order.status)} flex items-center space-x-1 text-base px-4 py-2`}>
                {getStatusIcon(order.status)}
                <span>{order.status}</span>
              </Badge>
              <Button
                variant="outline"
                className="flex items-center space-x-2 border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white rounded-full px-6"
                onClick={() => window.location.reload()}
              >
                <RefreshCw className="w-4 h-4" />
                <span>상태 새로고침</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Status Timeline */}
            <Card className="border-0 shadow-sm bg-white rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Truck className="w-5 h-5 text-[#0071e3]" />
                  <span>주문 진행 상황</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-lg">주문 확인</p>
                      <p className="text-sm text-[#86868b]">{order.date} - 주문이 접수되었습니다</p>
                    </div>
                  </div>
                  
                  <div className="ml-4 w-0.5 h-8 bg-green-500"></div>
                  
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 ${order.status !== "주문완료" ? "bg-green-500" : "bg-gray-300"} rounded-full flex items-center justify-center`}>
                      <Package className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-lg">준비 중</p>
                      <p className="text-sm text-[#86868b]">
                        {order.status !== "주문완료" ? "상품을 준비하고 있습니다" : "곧 준비 시작"}
                      </p>
                    </div>
                  </div>
                  
                  <div className={`ml-4 w-0.5 h-8 ${order.status === "배송중" || order.status === "배송완료" ? "bg-green-500" : "bg-gray-300"}`}></div>
                  
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 ${order.status === "배송중" || order.status === "배송완료" ? "bg-blue-500" : "bg-gray-300"} rounded-full flex items-center justify-center`}>
                      <Truck className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-lg">배송 중</p>
                      <p className="text-sm text-[#86868b]">
                        {order.status === "배송중" || order.status === "배송완료" 
                          ? "상품이 배송 중입니다" 
                          : "배송 예정"}
                      </p>
                    </div>
                    {order.status === "배송중" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigateTo(`/tracking/${order.id}`)}
                        className="border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white rounded-full"
                      >
                        배송 추적
                      </Button>
                    )}
                  </div>
                  
                  <div className={`ml-4 w-0.5 h-8 ${order.status === "배송완료" ? "bg-green-500" : "bg-gray-300"}`}></div>
                  
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 ${order.status === "배송완료" ? "bg-green-500" : "bg-gray-300"} rounded-full flex items-center justify-center`}>
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-lg">배송 완료</p>
                      <p className="text-sm text-[#86868b]">
                        {order.status === "배송완료" 
                          ? "상품이 배송되었습니다" 
                          : `예상 배송일: ${estimatedDelivery.toLocaleDateString('ko-KR')}`}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card className="border-0 shadow-sm bg-white rounded-3xl">
              <CardHeader>
                <CardTitle>주문 상품</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-[#f5f5f7] rounded-2xl">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                      />
                      <div className="flex-grow">
                        <h3 className="text-lg mb-2">{item.name}</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm text-[#86868b]">
                          <div>
                            <span className="block">수량</span>
                            <span className="text-black">{item.quantity}개</span>
                          </div>
                          <div>
                            <span className="block">단가</span>
                            <span className="text-black">₩{item.price.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg">₩{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card className="border-0 shadow-sm bg-white rounded-3xl">
              <CardHeader>
                <CardTitle>주문 요약</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>주문일</span>
                    <span>{order.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>소계</span>
                    <span>₩{Math.round(order.total / 1.1).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>배송비</span>
                    <span className="text-green-600">무료</span>
                  </div>
                  <div className="flex justify-between">
                    <span>세금</span>
                    <span>₩{Math.round(order.total * 0.1).toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg">
                    <span>총 금액</span>
                    <span>₩{order.total.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Information */}
            <Card className="border-0 shadow-sm bg-white rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-[#0071e3]" />
                  <span>배송 정보</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <User className="w-4 h-4 text-[#86868b] mt-1" />
                    <div>
                      <p className="text-sm text-[#86868b]">받는 사람</p>
                      <p>홍길동</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-[#86868b] mt-1" />
                    <div>
                      <p className="text-sm text-[#86868b]">주소</p>
                      <p>서울시 강남구 테헤란로 123<br/>삼성동 456-789</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-4 h-4 text-[#86868b] mt-1" />
                    <div>
                      <p className="text-sm text-[#86868b]">연락처</p>
                      <p>010-1234-5678</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card className="border-0 shadow-sm bg-white rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5 text-[#0071e3]" />
                  <span>결제 정보</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-4 h-4 text-[#86868b] mt-1" />
                    <div>
                      <p className="text-sm text-[#86868b]">결제 방법</p>
                      <p>Apple Pay</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-4 h-4 text-[#86868b] mt-1" />
                    <div>
                      <p className="text-sm text-[#86868b]">결제일</p>
                      <p>{order.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-4 h-4 text-[#86868b] mt-1" />
                    <div>
                      <p className="text-sm text-[#86868b]">영수증</p>
                      <p>이메일로 발송됨</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="border-0 shadow-sm bg-white rounded-3xl">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {order.status === "배송중" && (
                    <Button 
                      className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full py-3"
                      onClick={() => navigateTo(`/tracking/${order.id}`)}
                    >
                      <Truck className="w-4 h-4 mr-2" />
                      배송 추적
                    </Button>
                  )}
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-gray-300 hover:border-gray-400 rounded-full py-3"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    영수증 다운로드
                  </Button>
                  
                  {(order.status === "주문완료" || order.status === "처리중") && (
                    <Button 
                      variant="outline" 
                      className="w-full border-2 border-red-300 text-red-600 hover:bg-red-50 rounded-full py-3"
                    >
                      주문 취소
                    </Button>
                  )}
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white rounded-full py-3"
                    onClick={() => navigateTo("/support")}
                  >
                    고객 지원 문의
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}