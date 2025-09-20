import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface Order {
  id: string;
  date: string;
  items: any[];
  total: number;
  status: string;
}

interface AuthContextType {
  user: User | null;
  orders: Order[];
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  addOrder: (order: Order) => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([
    // 샘플 주문 데이터
    {
      id: "ORD-001",
      date: "2024-01-15",
      items: [
        {
          id: "iphone-15-pro",
          name: "iPhone 15 Pro",
          price: 1550000,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1696446702071-6d3324532346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBwcm8lMjBtYXh8ZW58MXx8fHwxNzU4Mjg2NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        }
      ],
      total: 1705000,
      status: "배송완료"
    },
    {
      id: "ORD-002",
      date: "2024-01-20",
      items: [
        {
          id: "airpods-pro-2nd",
          name: "AirPods Pro (2세대)",
          price: 329000,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1574920162043-b872873f19c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGFpcnBvZHMlMjB3aXJlbGVzc3xlbnwxfHx8fDE3NTgyODYyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        }
      ],
      total: 361900,
      status: "배송중"
    }
  ]);

  const login = async (email: string, password: string) => {
    // 실제로는 API 호출을 하겠지만, 여기서는 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 간단한 로그인 검증 (실제로는 서버에서)
    if (email && password) {
      setUser({
        id: "user-1",
        name: "김애플",
        email: email
      });
    } else {
      throw new Error("이메일과 비밀번호를 확인해주세요.");
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    // 실제로는 API 호출을 하겠지만, 여기서는 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 간단한 회원가입 검증 (실제로는 서버에서)
    if (name && email && password) {
      // 이메일 중복 체크 시뮬레이션
      if (email === "existing@example.com") {
        throw new Error("이미 사용 중인 이메일입니다.");
      }
      
      setUser({
        id: `user-${Date.now()}`,
        name: name,
        email: email
      });
    } else {
      throw new Error("모든 필드를 입력해주세요.");
    }
  };

  const logout = () => {
    setUser(null);
  };

  const addOrder = (order: Order) => {
    setOrders(prev => [order, ...prev]);
  };

  const value: AuthContextType = {
    user,
    orders: user ? orders : [], // 로그인한 사용자만 주문 내역 표시
    login,
    signup,
    logout,
    addOrder,
    isLoggedIn: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}