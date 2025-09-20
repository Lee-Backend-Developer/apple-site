import { useAuth } from "../components/AuthContext";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { navigateTo } from "../components/Router";
import { Package, Truck, CheckCircle, Clock, ArrowLeft, Eye, Download } from "lucide-react";

export function Orders() {
  const { orders, isLoggedIn } = useAuth();

  // 로그인하지 않은 경우
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] py-20">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <div className="bg-white rounded-3xl p-12">
            <Package className="w-16 h-16 text-[#86868b] mx-auto mb-6" />
            <h1 className="text-4xl mb-4">주문 내역</h1>
            <p className="text-xl text-[#86868b] mb-8">
              주문 내역을 확인하려면 로그인이 필요합니다.
            </p>
            <div className="space-y-4">
              <Button 
                className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3 rounded-full"
                onClick={() => navigateTo("/")}
              >
                로그인하기
              </Button>
              <p className="text-sm text-[#86868b]">
                Apple ID가 없으신가요?{" "}
                <button 
                  onClick={() => navigateTo("/signup")}
                  className="text-[#0066cc] hover:underline"
                >
                  Apple ID 만들기
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 주문 내역이 없는 경우
  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] py-20">
        <div className="max-w-[800px] mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigateTo("/")}
              className="mb-6 text-[#0066cc] hover:text-[#0077ed] p-0 h-auto"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              홈으로 돌아가기
            </Button>
            <h1 className="text-5xl mb-4">주문 내역</h1>
          </div>

          <div className="bg-white rounded-3xl p-12 text-center">
            <Package className="w-16 h-16 text-[#86868b] mx-auto mb-6" />
            <h2 className="text-3xl mb-4">주문 내역이 없습니다</h2>
            <p className="text-xl text-[#86868b] mb-8">
              Apple Store에서 첫 주문을 해보세요.
            </p>
            <Button 
              className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-3 rounded-full"
              onClick={() => navigateTo("/store")}
            >
              쇼핑하러 가기
            </Button>
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

  return (
    <div className="min-h-screen bg-[#f5f5f7] py-20">
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigateTo("/")}
            className="mb-6 text-[#0066cc] hover:text-[#0077ed] p-0 h-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            홈으로 돌아가기
          </Button>
          <h1 className="text-5xl mb-4">주문 내역</h1>
          <p className="text-xl text-[#86868b]">
            총 {orders.length}개의 주문이 있습니다.
          </p>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id} className="border-0 shadow-sm bg-white rounded-3xl overflow-hidden">
              <CardHeader className="bg-[#f5f5f7] border-b border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                  <div>
                    <CardTitle className="text-lg">주문번호: {order.id}</CardTitle>
                    <p className="text-sm text-[#86868b]">주문일: {order.date}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge className={`${getStatusColor(order.status)} flex items-center space-x-1`}>
                      {getStatusIcon(order.status)}
                      <span>{order.status}</span>
                    </Badge>
                    <p className="text-lg">₩{order.total.toLocaleString()}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-xl flex-shrink-0"
                      />
                      <div className="flex-grow min-w-0">
                        <p className="truncate text-lg">{item.name}</p>
                        <p className="text-sm text-[#86868b]">수량: {item.quantity}</p>
                      </div>
                      <p className="text-lg">₩{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                {/* Order Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-[#f5f5f7] rounded-2xl p-4">
                    <h4 className="text-sm text-[#86868b] mb-2">배송 정보</h4>
                    <p className="text-sm">
                      무료 배송<br/>
                      예상 배송일: 2-3일
                    </p>
                  </div>
                  
                  <div className="bg-[#f5f5f7] rounded-2xl p-4">
                    <h4 className="text-sm text-[#86868b] mb-2">결제 정보</h4>
                    <p className="text-sm">
                      Apple Pay<br/>
                      **** **** **** 1234
                    </p>
                  </div>
                  
                  <div className="bg-[#f5f5f7] rounded-2xl p-4">
                    <h4 className="text-sm text-[#86868b] mb-2">고객 지원</h4>
                    <p className="text-sm">
                      전화: 080-330-8877<br/>
                      온라인 채팅 가능
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-2 border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white rounded-full py-3"
                    onClick={() => navigateTo(`/order/${order.id}`)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    주문 상세보기
                  </Button>
                  
                  {order.status === "배송중" && (
                    <Button 
                      variant="outline" 
                      className="flex-1 border-2 border-gray-300 hover:border-gray-400 rounded-full py-3"
                      onClick={() => navigateTo(`/tracking/${order.id}`)}
                    >
                      <Truck className="w-4 h-4 mr-2" />
                      배송 추적
                    </Button>
                  )}
                  
                  <Button 
                    variant="outline" 
                    className="flex-1 border-2 border-gray-300 hover:border-gray-400 rounded-full py-3"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    영수증 다운로드
                  </Button>
                  
                  {(order.status === "주문완료" || order.status === "처리중") && (
                    <Button 
                      variant="outline" 
                      className="flex-1 border-2 border-red-300 text-red-600 hover:bg-red-50 rounded-full py-3"
                    >
                      주문 취소
                    </Button>
                  )}
                </div>

                {/* Status Timeline for shipped orders */}
                {(order.status === "배송중" || order.status === "배송완료") && (
                  <div className="mt-6 p-4 bg-[#f0f9ff] rounded-2xl">
                    <h4 className="text-sm text-[#0071e3] mb-3">배송 상태</h4>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-green-600">주문 확인</span>
                      </div>
                      <div className="w-8 h-0.5 bg-green-500"></div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-green-600">준비 중</span>
                      </div>
                      <div className="w-8 h-0.5 bg-green-500"></div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 ${order.status === "배송완료" ? "bg-green-500" : "bg-blue-500"} rounded-full`}></div>
                        <span className={order.status === "배송완료" ? "text-green-600" : "text-blue-600"}>배송 중</span>
                      </div>
                      <div className={`w-8 h-0.5 ${order.status === "배송완료" ? "bg-green-500" : "bg-gray-300"}`}></div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 ${order.status === "배송완료" ? "bg-green-500" : "bg-gray-300"} rounded-full`}></div>
                        <span className={order.status === "배송완료" ? "text-green-600" : "text-gray-400"}>배송 완료</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-white rounded-3xl p-8 text-center">
          <h3 className="text-2xl mb-4">도움이 필요하세요?</h3>
          <p className="text-[#86868b] mb-6">
            주문에 대한 질문이나 문제가 있으시면 언제든 연락해주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline"
              className="border-2 border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white rounded-full px-6"
              onClick={() => navigateTo("/support")}
            >
              고객 지원 센터
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-gray-300 hover:border-gray-400 rounded-full px-6"
            >
              온라인 채팅
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}