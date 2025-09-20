import { Layout } from "./components/Layout";
import { Router } from "./components/Router";
import { CartProvider } from "./components/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Layout>
        <Router />
      </Layout>
    </CartProvider>
  );
}