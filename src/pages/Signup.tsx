import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Checkbox } from "../components/ui/checkbox";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Apple, Eye, EyeOff, ArrowLeft, CheckCircle } from "lucide-react";
import { useAuth } from "../components/AuthContext";
import { navigateTo } from "../components/Router";
import { toast } from "sonner@2.0.3";

export function Signup() {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "이름을 입력해주세요.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "성을 입력해주세요.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식을 입력해주세요.";
    }

    if (!formData.password) {
      newErrors.password = "비밀번호를 입력해주세요.";
    } else if (formData.password.length < 8) {
      newErrors.password = "비밀번호는 8자 이상이어야 합니다.";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    if (!agreeTerms) {
      newErrors.terms = "이용약관에 동의해주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const fullName = `${formData.lastName}${formData.firstName}`;
      await signup(fullName, formData.email, formData.password);
      toast.success("회원가입이 완료되었습니다!");
      navigateTo("/store");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "회원가입에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <Apple className="w-8 h-8 text-[#1d1d1f]" />
          </div>
          <h1 className="text-2xl text-[#1d1d1f] mb-2">Apple ID 만들기</h1>
          <p className="text-[#86868b]">
            하나의 Apple ID로 모든 Apple 서비스를 이용하세요.
          </p>
        </div>

        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigateTo("/")}
          className="mb-6 text-[#0066cc] hover:text-[#0077ed] p-0 h-auto"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          홈으로 돌아가기
        </Button>

        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-xl text-center">계정 정보</CardTitle>
            <CardDescription className="text-center">
              새로운 Apple ID를 만들어보세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">이름</Label>
                  <Input
                    id="firstName"
                    placeholder="이름"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500">{errors.firstName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">성</Label>
                  <Input
                    id="lastName"
                    placeholder="성"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
                <p className="text-xs text-[#86868b]">
                  이메일 주소가 새로운 Apple ID가 됩니다.
                </p>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">비밀번호</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="비밀번호를 입력하세요"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className={errors.password ? "border-red-500 pr-10" : "pr-10"}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 text-[#86868b]" />
                    ) : (
                      <Eye className="w-4 h-4 text-[#86868b]" />
                    )}
                  </Button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
                <p className="text-xs text-[#86868b]">
                  8자 이상의 비밀번호를 사용하세요.
                </p>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">비밀번호 확인</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="비밀번호를 다시 입력하세요"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className={errors.confirmPassword ? "border-red-500 pr-10" : "pr-10"}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4 text-[#86868b]" />
                    ) : (
                      <Eye className="w-4 h-4 text-[#86868b]" />
                    )}
                  </Button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">{errors.confirmPassword}</p>
                )}
              </div>

              <Separator className="my-6" />

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agreeTerms}
                    onCheckedChange={setAgreeTerms}
                    className="mt-0.5"
                  />
                  <div className="space-y-1">
                    <label
                      htmlFor="terms"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      <span className="text-[#1d1d1f]">
                        Apple의{" "}
                        <button type="button" className="text-[#0066cc] hover:underline">
                          이용약관
                        </button>
                        {" "}및{" "}
                        <button type="button" className="text-[#0066cc] hover:underline">
                          개인정보 보호정책
                        </button>
                        에 동의합니다.
                      </span>
                    </label>
                    {errors.terms && (
                      <p className="text-sm text-red-500">{errors.terms}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="marketing"
                    checked={agreeMarketing}
                    onCheckedChange={setAgreeMarketing}
                    className="mt-0.5"
                  />
                  <label
                    htmlFor="marketing"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    <span className="text-[#86868b]">
                      Apple로부터 제품, 서비스 및 소프트웨어 업데이트에 대한 이메일을 받겠습니다. (선택사항)
                    </span>
                  </label>
                </div>
              </div>

              {/* Security Info */}
              <Alert className="bg-[#f0f9ff] border-[#0066cc]/20">
                <CheckCircle className="h-4 w-4 text-[#0066cc]" />
                <AlertDescription className="text-sm text-[#1d1d1f]">
                  Apple ID는 안전하게 보호됩니다. 이중 인증이 자동으로 활성화되어 계정 보안을 강화합니다.
                </AlertDescription>
              </Alert>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-3"
                disabled={isLoading}
              >
                {isLoading ? "Apple ID 생성 중..." : "Apple ID 만들기"}
              </Button>
            </form>

            <Separator className="my-6" />

            {/* Login Link */}
            <div className="text-center">
              <p className="text-sm text-[#86868b]">
                이미 Apple ID가 있으신가요?{" "}
                <button
                  onClick={() => navigateTo("/")}
                  className="text-[#0066cc] hover:underline"
                >
                  로그인하기
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-xs text-[#86868b]">
            Apple ID를 만들면 Apple의 모든 서비스를 하나의 계정으로 이용할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}