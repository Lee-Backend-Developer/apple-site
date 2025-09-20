import { useState } from "react";
import { useAuth } from "../components/AuthContext";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { toast } from "sonner@2.0.3";
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  Edit3, 
  Save, 
  X, 
  Shield,
  CreditCard,
  Bell,
  Smartphone,
  Globe
} from "lucide-react";
import { navigateTo } from "../components/Router";

export function AccountManagement() {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "+82 10-1234-5678",
    birthday: "1990-01-01",
    address: "서울특별시 강남구 테헤란로 123"
  });

  if (!user) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h1 className="text-6xl mb-8">로그인이 필요합니다</h1>
          <p className="text-2xl text-gray-600 mb-12">
            계정 관리 페이지에 접근하려면 로그인해주세요.
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

  const handleSave = () => {
    // 실제로는 API 호출
    toast.success("정보가 성공적으로 업데이트되었습니다.");
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      name: user?.name || "",
      email: user?.email || "",
      phone: "+82 10-1234-5678",
      birthday: "1990-01-01",
      address: "서울특별시 강남구 테헤란로 123"
    });
    setIsEditing(false);
  };

  const getUserInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-[1200px] mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl mb-2">내 계정</h1>
              <p className="text-gray-600">계정 정보를 관리하고 개인정보를 업데이트하세요.</p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                onClick={() => navigateTo("/account/payment-shipping")}
                variant="outline"
                className="border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white"
              >
                결제 및 배송
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 사용자 프로필 카드 */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <Avatar className="w-24 h-24">
                    <AvatarFallback className="text-2xl bg-[#0071e3] text-white">
                      {getUserInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-2xl">{user.name}</CardTitle>
                <p className="text-gray-600">{user.email}</p>
                <Badge variant="secondary" className="mt-2">
                  <Shield className="w-3 h-3 mr-1" />
                  인증된 계정
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={() => setIsEditing(!isEditing)}
                  variant="outline"
                  className="w-full"
                >
                  <Edit3 className="w-4 h-4 mr-2" />
                  {isEditing ? "편집 취소" : "프로필 편집"}
                </Button>
                <Button
                  onClick={logout}
                  variant="outline"
                  className="w-full text-red-600 border-red-200 hover:bg-red-50"
                >
                  로그아웃
                </Button>
              </CardContent>
            </Card>

            {/* 빠른 액세스 */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">빠른 액세스</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <button
                  onClick={() => navigateTo("/orders")}
                  className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <CreditCard className="w-5 h-5 text-gray-500" />
                  <span>주문 내역</span>
                </button>
                <button
                  onClick={() => navigateTo("/account/payment-shipping")}
                  className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <CreditCard className="w-5 h-5 text-gray-500" />
                  <span>결제 및 배송</span>
                </button>
                <button
                  onClick={() => navigateTo("/support")}
                  className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Bell className="w-5 h-5 text-gray-500" />
                  <span>고객 지원</span>
                </button>
              </CardContent>
            </Card>
          </div>

          {/* 계정 정보 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 개인 정보 */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">개인 정보</CardTitle>
                {!isEditing && (
                  <Button
                    onClick={() => setIsEditing(true)}
                    variant="ghost"
                    size="sm"
                  >
                    <Edit3 className="w-4 h-4" />
                  </Button>
                )}
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      이름
                    </Label>
                    {isEditing ? (
                      <Input
                        id="name"
                        value={editData.name}
                        onChange={(e) => setEditData({...editData, name: e.target.value})}
                      />
                    ) : (
                      <p className="p-3 bg-gray-50 rounded-lg">{editData.name}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      이메일
                    </Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        type="email"
                        value={editData.email}
                        onChange={(e) => setEditData({...editData, email: e.target.value})}
                      />
                    ) : (
                      <p className="p-3 bg-gray-50 rounded-lg">{editData.email}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      전화번호
                    </Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        value={editData.phone}
                        onChange={(e) => setEditData({...editData, phone: e.target.value})}
                      />
                    ) : (
                      <p className="p-3 bg-gray-50 rounded-lg">{editData.phone}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="birthday" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      생년월일
                    </Label>
                    {isEditing ? (
                      <Input
                        id="birthday"
                        type="date"
                        value={editData.birthday}
                        onChange={(e) => setEditData({...editData, birthday: e.target.value})}
                      />
                    ) : (
                      <p className="p-3 bg-gray-50 rounded-lg">{editData.birthday}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    주소
                  </Label>
                  {isEditing ? (
                    <Input
                      id="address"
                      value={editData.address}
                      onChange={(e) => setEditData({...editData, address: e.target.value})}
                    />
                  ) : (
                    <p className="p-3 bg-gray-50 rounded-lg">{editData.address}</p>
                  )}
                </div>

                {isEditing && (
                  <div className="flex gap-4 pt-4">
                    <Button onClick={handleSave} className="bg-[#0071e3] hover:bg-[#0077ed]">
                      <Save className="w-4 h-4 mr-2" />
                      저장
                    </Button>
                    <Button onClick={handleCancel} variant="outline">
                      <X className="w-4 h-4 mr-2" />
                      취소
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 계정 보안 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">계정 보안</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium">2단계 인증</p>
                      <p className="text-sm text-gray-600">계정 보안을 강화하세요</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-green-600">
                    활성화됨
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">신뢰할 수 있는 기기</p>
                      <p className="text-sm text-gray-600">iPhone, MacBook Pro</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    관리
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="font-medium">로그인 활동</p>
                      <p className="text-sm text-gray-600">최근 로그인: 오늘 오후 2:30</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    확인
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 개인정보 설정 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">개인정보 설정</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">마케팅 이메일 수신</p>
                    <p className="text-sm text-gray-600">새로운 제품 및 이벤트 정보를 받아보세요</p>
                  </div>
                  <input type="checkbox" className="toggle" defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">앱 사용 분석</p>
                    <p className="text-sm text-gray-600">Apple이 서비스 개선을 위해 사용 데이터를 수집</p>
                  </div>
                  <input type="checkbox" className="toggle" />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">맞춤형 광고</p>
                    <p className="text-sm text-gray-600">관심사에 맞는 광고를 표시</p>
                  </div>
                  <input type="checkbox" className="toggle" defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}