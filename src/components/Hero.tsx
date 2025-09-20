import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-[1024px] mx-auto px-6 py-16 text-center">
        <div className="space-y-4 mb-12">
          <h1 className="text-6xl tracking-tight">iPhone 15 Pro</h1>
          <p className="text-2xl text-gray-300">티타늄. 강력하다. 가볍다. Pro답다.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0071e3] text-white rounded-full hover:bg-[#0077ed] transition-colors"
            >
              더 알아보기
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#0071e3] text-[#0071e3] rounded-full hover:bg-[#0071e3] hover:text-white transition-colors"
            >
              구입하기
            </a>
          </div>
        </div>
        <div className="relative mx-auto max-w-4xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1652721367098-0ecad4cc0370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGlwaG9uZSUyMG1vZGVybiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4Mjg1NjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="iPhone 15 Pro"
            className="w-full h-auto object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}