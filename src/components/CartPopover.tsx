import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { ShoppingBag, User, Package, Plus, Minus, X } from "lucide-react";
import { useCart } from "./CartContext";
import { useAuth } from "./AuthContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { navigateTo } from "./Router";
import { toast } from "sonner@2.0.3";

interface CartPopoverProps {
  children: React.ReactNode;
}

export function CartPopover({ children }: CartPopoverProps) {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();
  const { user, orders, login, logout, isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    try {
      await login(loginForm.email, loginForm.password);
      toast.success("로그인되었습니다.");
      setLoginForm({ email: "", password: "" });
    } catch (error) {
      toast.error("로그인에 실패했습니다.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    logout();
    toast.success("로그아웃되었습니다.");
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("장바구니가 비어있습니다.");
      return;
    }
    setIsOpen(false);
    navigateTo("/checkout");
  };

  const handleViewAllOrders = () => {
    setIsOpen(false);
    navigateTo("/orders");
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0" align="end" side="bottom">
        <Tabs defaultValue={isLoggedIn ? "cart" : "login"} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="login" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {isLoggedIn ? "계정" : "로그인"}
            </TabsTrigger>
            <TabsTrigger value="cart" className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              장바구니
              {getTotalItems() > 0 && (
                <span className="bg-[#0071e3] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center ml-1">
                  {getTotalItems() > 99 ? '99+' : getTotalItems()}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2" disabled={!isLoggedIn}>
              <Package className="w-4 h-4" />
              주문내역
            </TabsTrigger>
          </TabsList>

          {/* Login/Account Tab */}
          <TabsContent value="login" className="p-6">
            {!isLoggedIn ? (
              <div>
                <h3 className="text-lg mb-4">Apple ID로 로그인</h3>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@icloud.com"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">비밀번호</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="비밀번호를 입력하세요"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#0071e3] hover:bg-[#0077ed]"
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? "로그인 중..." : "로그인"}
                  </Button>
                </form>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    계정이 없으시나요?{" "}
                    <button 
                      onClick={() => {
                        setIsOpen(false);
                        navigateTo("/signup");
                      }}
                      className="text-[#0071e3] hover:underline"
                    >
                      Apple ID 만들기
                    </button>
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg">{user?.name}님, 안녕하세요!</h3>
                    <p className="text-sm text-gray-600">{user?.email}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                    className="text-xs"
                  >
                    로그아웃
                  </Button>
                </div>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => {
                      setIsOpen(false);
                      navigateTo("/account");
                    }}
                  >
                    내 계정 관리
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => {
                      setIsOpen(false);
                      navigateTo("/account/payment-shipping");
                    }}
                  >
                    결제 및 배송
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => {
                      setIsOpen(false);
                      navigateTo("/account/apple-id");
                    }}
                  >
                    Apple ID 설정
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>

          {/* Cart Tab */}
          <TabsContent value="cart" className="p-0">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg">장바구니</h3>
                <span className="text-sm text-gray-600">{getTotalItems()}개 상품</span>
              </div>
              
              {items.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">장바구니가 비어있습니다</p>
                  <Button 
                    onClick={() => {
                      setIsOpen(false);
                      navigateTo("/store");
                    }}
                    className="bg-[#0071e3] hover:bg-[#0077ed]"
                  >
                    쇼핑하러 가기
                  </Button>
                </div>
              ) : (
                <div>
                  <div className="space-y-4 max-h-80 overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-grow min-w-0">
                          <p className="text-sm truncate">{item.name}</p>
                          <p className="text-sm text-gray-600">₩{item.price.toLocaleString()}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                              className="h-6 w-6 p-0"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="text-sm w-8 text-center">{item.quantity}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-6 w-6 p-0"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">₩{(item.price * item.quantity).toLocaleString()}</p>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeFromCart(item.id)}
                            className="h-6 w-6 p-0 text-gray-400 hover:text-red-500"
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>소계</span>
                      <span>₩{getTotalPrice().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>배송비</span>
                      <span className="text-green-600">무료</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span>총 금액</span>
                      <span>₩{getTotalPrice().toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <Button 
                      onClick={handleCheckout}
                      className="w-full bg-[#0071e3] hover:bg-[#0077ed]"
                    >
                      결제하기
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setIsOpen(false);
                        navigateTo("/cart");
                      }}
                      className="w-full"
                    >
                      장바구니 페이지로
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg">주문 내역</h3>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleViewAllOrders}
                className="text-[#0071e3]"
              >
                전체보기
              </Button>
            </div>
            
            {orders.length === 0 ? (
              <div className="text-center py-8">
                <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">주문 내역이 없습니다</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {orders.slice(0, 3).map((order) => (
                  <div key={order.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-sm">주문번호: {order.id}</p>
                        <p className="text-xs text-gray-600">{order.date}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        order.status === "배송완료" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <ImageWithFallback
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 object-cover rounded"
                          />
                          <div className="flex-grow">
                            <p className="text-sm truncate">{item.name}</p>
                            <p className="text-xs text-gray-600">수량: {item.quantity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between text-sm">
                      <span>총 금액</span>
                      <span>₩{order.total.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
}