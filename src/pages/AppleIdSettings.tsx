import { useState } from "react";
import { useAuth } from "../components/AuthContext";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { Switch } from "../components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Alert, AlertDescription } from "../components/ui/alert";
import { toast } from "sonner@2.0.3";
import { 
  Shield, 
  Smartphone, 
  Globe, 
  Key, 
  Lock, 
  Eye, 
  EyeOff,
  AlertTriangle,
  CheckCircle,
  Clock,
  Download,
  Trash2,
  Settings
} from "lucide-react";
import { navigateTo } from "../components/Router";

interface TrustedDevice {
  id: string;
  name: string;
  type: "iphone" | "ipad" | "mac" | "browser";
  lastActive: string;
  location: string;
  isCurrentDevice: boolean;
}

interface LoginActivity {
  id: string;
  timestamp: string;
  device: string;
  location: string;
  status: "success" | "failed" | "suspicious";
}

export function AppleIdSettings() {
  const { user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [iCloudSyncEnabled, setICloudSyncEnabled] = useState(true);
  const [findMyEnabled, setFindMyEnabled] = useState(true);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const [trustedDevices] = useState<TrustedDevice[]>([
    {
      id: "dev-1",
      name: "김애플의 iPhone",
      type: "iphone",
      lastActive: "지금",
      location: "서울, 대한민국",
      isCurrentDevice: true
    },
    {
      id: "dev-2",
      name: "김애플의 MacBook Pro",
      type: "mac",
      lastActive: "2시간 전",
      location: "서울, 대한민국",
      isCurrentDevice: false
    },
    {
      id: "dev-3",
      name: "Safari (Chrome)",
      type: "browser",
      lastActive: "1일 전",
      location: "서울, 대한민국",
      isCurrentDevice: false
    }
  ]);

  const [loginActivities] = useState<LoginActivity[]>([
    {
      id: "act-1",
      timestamp: "2024-01-22 14:30",
      device: "iPhone",
      location: "서울, 대한민국",
      status: "success"
    },
    {
      id: "act-2",
      timestamp: "2024-01-22 09:15",
      device: "MacBook Pro",
      location: "서울, 대한민국",
      status: "success"
    },
    {
      id: "act-3",
      timestamp: "2024-01-21 22:45",
      device: "알 수 없는 기기",
      location: "부산, 대한민국",
      status: "suspicious"
    }
  ]);

  if (!user) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h1 className="text-6xl mb-8">로그인이 필요합니다</h1>
          <p className="text-2xl text-gray-600 mb-12">
            Apple ID 설정에 접근하려면 로그인해주세요.
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

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "iphone":
        return "📱";
      case "ipad":
        return "📱";
      case "mac":
        return "💻";
      case "browser":
        return "🌐";
      default:
        return "📱";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "text-green-600";
      case "failed":
        return "text-red-600";
      case "suspicious":
        return "text-orange-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "failed":
        return <AlertTriangle className="w-4 h-4 text-red-600" />;
      case "suspicious":
        return <AlertTriangle className="w-4 h-4 text-orange-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-[1200px] mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl mb-2">Apple ID 설정</h1>
              <p className="text-gray-600">보안, 개인정보 보호 및 Apple 서비스를 관리하세요.</p>
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
                onClick={() => navigateTo("/account/payment-shipping")}
                variant="outline"
                className="border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white"
              >
                결제 및 배송
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Security Alert */}
        <Alert className="mb-6 border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800">
            최근 의심스러운 로그인 시도가 감지되었습니다. 
            <button className="ml-2 underline font-medium">자세히 보기</button>
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 로그인 및 보안 */}
          <div className="space-y-6">
            {/* 계정 보안 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  로그인 및 보안
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Apple ID */}
                <div>
                  <Label className="text-sm text-gray-600">Apple ID</Label>
                  <p className="text-lg font-medium">{user.email}</p>
                </div>

                {/* 비밀번호 변경 */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Key className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">비밀번호</p>
                      <p className="text-sm text-gray-600">마지막 변경: 6개월 전</p>
                    </div>
                  </div>
                  <Dialog open={isChangingPassword} onOpenChange={setIsChangingPassword}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        변경
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>비밀번호 변경</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="current-password">현재 비밀번호</Label>
                          <div className="relative">
                            <Input
                              id="current-password"
                              type={showPassword ? "text" : "password"}
                              placeholder="현재 비밀번호를 입력하세요"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            >
                              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="new-password">새 비밀번호</Label>
                          <Input
                            id="new-password"
                            type="password"
                            placeholder="새 비밀번호를 입력하세요"
                          />
                        </div>
                        <div>
                          <Label htmlFor="confirm-password">비밀번호 확인</Label>
                          <Input
                            id="confirm-password"
                            type="password"
                            placeholder="새 비밀번호를 다시 입력하세요"
                          />
                        </div>
                        <Button 
                          className="w-full bg-[#0071e3] hover:bg-[#0077ed]"
                          onClick={() => {
                            toast.success("비밀번호가 성공적으로 변경되었습니다.");
                            setIsChangingPassword(false);
                          }}
                        >
                          비밀번호 변경
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* 2단계 인증 */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium">2단계 인증</p>
                      <p className="text-sm text-gray-600">
                        {twoFactorEnabled ? "활성화됨" : "비활성화됨"}
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={twoFactorEnabled}
                    onCheckedChange={(checked) => {
                      setTwoFactorEnabled(checked);
                      toast.success(
                        checked 
                          ? "2단계 인증이 활성화되었습니다." 
                          : "2단계 인증이 비활성화되었습니다."
                      );
                    }}
                  />
                </div>

                {/* 복구 키 */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Download className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">복구 키</p>
                      <p className="text-sm text-gray-600">계정 복구를 위한 백업 키</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    생성
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 신뢰할 수 있는 기기 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-purple-600" />
                  신뢰할 수 있는 기기
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {trustedDevices.map((device) => (
                  <div
                    key={device.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getDeviceIcon(device.type)}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{device.name}</p>
                          {device.isCurrentDevice && (
                            <Badge variant="secondary" className="text-xs">
                              현재 기기
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">
                          {device.lastActive} • {device.location}
                        </p>
                      </div>
                    </div>
                    {!device.isCurrentDevice && (
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Apple 서비스 및 활동 */}
          <div className="space-y-6">
            {/* Apple 서비스 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-600" />
                  Apple 서비스
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* iCloud */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">iCloud 동기화</p>
                    <p className="text-sm text-gray-600">데이터를 모든 기기에서 동기화</p>
                  </div>
                  <Switch
                    checked={iCloudSyncEnabled}
                    onCheckedChange={setICloudSyncEnabled}
                  />
                </div>

                <Separator />

                {/* Find My */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">나의 찾기</p>
                    <p className="text-sm text-gray-600">분실한 기기를 찾고 위치를 공유</p>
                  </div>
                  <Switch
                    checked={findMyEnabled}
                    onCheckedChange={setFindMyEnabled}
                  />
                </div>

                <Separator />

                {/* 저장 공간 */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">iCloud 저장 공간</p>
                    <p className="text-sm text-gray-600">15.2GB / 200GB</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#0071e3] h-2 rounded-full" style={{ width: "7.6%" }}></div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    저장 공간 관리
                  </Button>
                </div>

                <Separator />

                {/* 미디어 및 구입 */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">미디어 및 구입</p>
                    <p className="text-sm text-gray-600">App Store, iTunes Store 설정</p>
                  </div>
                  <Button variant="outline" size="sm">
                    관리
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 로그인 활동 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Globe className="w-5 h-5 text-green-600" />
                  최근 로그인 활동
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {loginActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      {getStatusIcon(activity.status)}
                      <div>
                        <p className="font-medium text-sm">{activity.device}</p>
                        <p className="text-xs text-gray-600">
                          {activity.timestamp} • {activity.location}
                        </p>
                      </div>
                    </div>
                    {activity.status === "suspicious" && (
                      <Button variant="outline" size="sm" className="text-xs">
                        신고
                      </Button>
                    )}
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4">
                  모든 활동 보기
                </Button>
              </CardContent>
            </Card>

            {/* 개인정보 보호 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">개인정보 보호</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">분석 및 개선사항</p>
                    <p className="text-sm text-gray-600">Apple과 진단 데이터 공유</p>
                  </div>
                  <input type="checkbox" className="toggle" />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Apple 광고</p>
                    <p className="text-sm text-gray-600">맞춤형 광고 수신</p>
                  </div>
                  <input type="checkbox" className="toggle" defaultChecked />
                </div>
                
                <Separator />
                
                <Button variant="outline" className="w-full">
                  데이터 다운로드 요청
                </Button>
                
                <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50">
                  계정 삭제 요청
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}