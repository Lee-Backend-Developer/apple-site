import { Layout } from "./components/Layout";
import { Router } from "./components/Router";
import { CartProvider } from "./components/CartContext";
import { AuthProvider } from "./components/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Layout>
          <Router />
        </Layout>
      </CartProvider>
    </AuthProvider>
  );
}