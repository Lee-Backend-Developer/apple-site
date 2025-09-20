import { Header } from "./Header";
import { Footer } from "./Footer";
import { Toaster } from "./ui/sonner";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
}