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
  MapPin, 
  Phone, 
  RefreshCw,
  ExternalLink,
  Navigation
} from "lucide-react";

interface TrackingOrderProps {
  orderId?: string;
}

export function TrackingOrder({ orderId }: TrackingOrderProps) {
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
            <Button 
              className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3 rounded-full"
              onClick={() => navigateTo("/orders")}
            >
              주문 내역으로 돌아가기
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // 배송 중이 아닌 경우
  if (order.status !== "배송중" && order.status !== "배송완료") {
    return (
      <div className="min-h-screen bg-[#f5f5f7] py-20">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <div className="bg-white rounded-3xl p-12">
            <Clock className="w-16 h-16 text-[#86868b] mx-auto mb-6" />
            <h1 className="text-4xl mb-4">배송 추적 불가</h1>
            <p className="text-xl text-[#86868b] mb-8">
              이 주문은 아직 배송이 시작되지 않았습니다.<br/>
              현재 상태: <span className="text-[#0071e3]">{order.status}</span>
            </p>
            <div className="space-y-4">
              <Button 
                className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3 rounded-full"
                onClick={() => navigateTo(`/order/${order.id}`)}
              >
                주문 상세보기
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 rounded-full"
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

  const trackingEvents = [
    {
      time: "2024-01-15 14:30",
      location: "서울 중구 배송센터",
      status: "배송 시작",
      description: "상품이 배송을 위해 출발했습니다.",
      icon: <Truck className="w-5 h-5" />,
      completed: true
    },
    {
      time: "2024-01-15 16:45",
      location: "서울 강남구 배송센터",
      status: "배송센터 도착",
      description: "상품이 지역 배송센터에 도착했습니다.",
      icon: <Package className="w-5 h-5" />,
      completed: true
    },
    {
      time: "2024-01-16 09:20",
      location: "배송 차량",
      status: "배송 중",
      description: "상품이 최종 배송지로 이동 중입니다.",
      icon: <Navigation className="w-5 h-5" />,
      completed: order.status === "배송중" || order.status === "배송완료",
      current: order.status === "배송중"
    },
    {
      time: order.status === "배송완료" ? "2024-01-16 14:00" : "예상: 오늘 18:00",
      location: "서울시 강남구 테헤란로 123",
      status: "배송 완료",
      description: order.status === "배송완료" ? "상품이 성공적으로 배송되었습니다." : "배송 예정 시간입니다.",
      icon: <CheckCircle className="w-5 h-5" />,
      completed: order.status === "배송완료"
    }
  ];

  const estimatedDelivery = new Date();
  estimatedDelivery.setHours(18, 0, 0, 0);

  return (
    <div className="min-h-screen bg-[#f5f5f7] py-20">
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigateTo(`/order/${order.id}`)}
            className="mb-6 text-[#0066cc] hover:text-[#0077ed] p-0 h-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            주문 상세로 돌아가기
          </Button>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h1 className="text-5xl mb-2">배송 추적</h1>
              <p className="text-xl text-[#86868b]">주문번호: {order.id}</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <Badge className="bg-purple-100 text-purple-800 flex items-center space-x-1 text-base px-4 py-2">
                <Truck className="w-4 h-4" />
                <span>{order.status}</span>
              </Badge>
              <Button
                variant="outline"
                className="flex items-center space-x-2 border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white rounded-full px-6"
                onClick={() => window.location.reload()}
              >
                <RefreshCw className="w-4 h-4" />
                <span>업데이트</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Status */}
            <Card className="border-0 shadow-sm bg-white rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Truck className="w-5 h-5 text-[#0071e3]" />
                    <span>실시간 배송 현황</span>
                  </div>
                  <span className="text-sm text-[#86868b]">
                    마지막 업데이트: {new Date().toLocaleTimeString('ko-KR')}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {order.status === "배송중" && (
                  <div className="bg-[#e8f4fd] rounded-2xl p-6 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <div>
                        <p className="text-lg text-blue-800">배송 기사가 고객님의 상품을 배송 중입니다</p>
                        <p className="text-sm text-blue-600">
                          예상 도착 시간: 오늘 오후 6시경
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {order.status === "배송완료" && (
                  <div className="bg-[#e8f5e8] rounded-2xl p-6 mb-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <div>
                        <p className="text-lg text-green-800">배송이 완료되었습니다!</p>
                        <p className="text-sm text-green-600">
                          받으신 분: 홍길동 (2024-01-16 14:00)
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tracking Timeline */}
                <div className="space-y-6">
                  {trackingEvents.map((event, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        event.completed 
                          ? event.current 
                            ? 'bg-blue-500 text-white ring-4 ring-blue-100' 
                            : 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}>
                        {event.icon}
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className={`text-lg ${event.completed ? 'text-black' : 'text-gray-400'}`}>
                            {event.status}
                          </h3>
                          <span className={`text-sm ${event.completed ? 'text-[#86868b]' : 'text-gray-400'}`}>
                            {event.time}
                          </span>
                        </div>
                        <p className={`text-sm mb-1 ${event.completed ? 'text-[#86868b]' : 'text-gray-400'}`}>
                          {event.description}
                        </p>
                        <div className="flex items-center space-x-1 text-sm text-[#86868b]">
                          <MapPin className="w-3 h-3" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      {event.current && (
                        <div className="hidden sm:block">
                          <Badge className="bg-blue-100 text-blue-800">현재 위치</Badge>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Delivery Map (Mock) */}
            <Card className="border-0 shadow-sm bg-white rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Navigation className="w-5 h-5 text-[#0071e3]" />
                  <span>배송 경로</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-[#f5f5f7] rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#86868b] mx-auto mb-4" />
                    <p className="text-[#86868b] mb-4">실시간 배송 경로</p>
                    <Button
                      variant="outline"
                      className="border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white rounded-full"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      지도에서 보기
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Delivery Info */}
            <Card className="border-0 shadow-sm bg-white rounded-3xl">
              <CardHeader>
                <CardTitle>배송 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-[#86868b] mb-1">배송지</p>
                  <p>서울시 강남구 테헤란로 123<br/>삼성동 456-789</p>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm text-[#86868b] mb-1">받는 분</p>
                  <p>홍길동</p>
                </div>
                
                <div>
                  <p className="text-sm text-[#86868b] mb-1">연락처</p>
                  <p>010-1234-5678</p>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-sm text-[#86868b] mb-1">택배사</p>
                  <p>Apple 전용 배송</p>
                </div>
                
                <div>
                  <p className="text-sm text-[#86868b] mb-1">운송장 번호</p>
                  <p className="font-mono">AP{order.id.slice(-8)}</p>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card className="border-0 shadow-sm bg-white rounded-3xl">
              <CardHeader>
                <CardTitle>배송 상품</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-grow min-w-0">
                        <p className="text-sm truncate">{item.name}</p>
                        <p className="text-xs text-[#86868b]">수량: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Options */}
            <Card className="border-0 shadow-sm bg-white rounded-3xl">
              <CardHeader>
                <CardTitle>배송 문의</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white rounded-full"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  배송 기사 연락하기
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-gray-300 hover:border-gray-400 rounded-full"
                  onClick={() => navigateTo("/support")}
                >
                  고객 서비스 센터
                </Button>
                
                <div className="text-center pt-3">
                  <p className="text-xs text-[#86868b]">
                    배송 관련 문의사항이 있으시면<br/>
                    언제든 연락해주세요.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}