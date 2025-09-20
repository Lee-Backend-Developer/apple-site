import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";

export function Support() {
  const [searchQuery, setSearchQuery] = useState("");

  const supportCategories = [
    {
      title: "기술 지원",
      description: "Apple 제품 사용법과 문제 해결",
      icon: "🛠️",
      topics: ["설정 도움말", "문제 해결", "소프트웨어 업데이트", "데이터 복구"]
    },
    {
      title: "서비스 및 수리",
      description: "하드웨어 문제와 수리 서비스",
      icon: "🔧",
      topics: ["수리 예약", "보증 확인", "AppleCare+", "교체 서비스"]
    },
    {
      title: "청구 및 결제",
      description: "구매, 결제, 환불 관련 문의",
      icon: "💳",
      topics: ["주문 상태", "결제 문제", "환불 요청", "청구서 문의"]
    },
    {
      title: "Apple ID 및 계정",
      description: "Apple ID와 계정 관련 지원",
      icon: "👤",
      topics: ["암호 재설정", "2단계 인증", "가족 공유", "계정 보안"]
    },
  ];

  const quickHelp = [
    {
      title: "Apple ID 암호를 잊으셨나요?",
      description: "Apple ID 암호를 재설정하는 방법",
      link: "#reset-password"
    },
    {
      title: "기기가 응답하지 않나요?",
      description: "기기 강제 재시작 방법 알아보기",
      link: "#force-restart"
    },
    {
      title: "데이터를 백업하고 싶으세요?",
      description: "iCloud 백업 설정하는 방법",
      link: "#backup-data"
    },
    {
      title: "새 기기로 데이터 이전",
      description: "기존 기기에서 새 기기로 데이터 옮기기",
      link: "#transfer-data"
    },
  ];

  const contactMethods = [
    {
      title: "전화 상담",
      description: "Apple 전문가와 1:1 통화",
      availability: "월-금 09:00-18:00",
      action: "전화하기",
      icon: "📞"
    },
    {
      title: "채팅 상담",
      description: "실시간 채팅으로 빠른 해결",
      availability: "연중무휴 24시간",
      action: "채팅 시작",
      icon: "💬"
    },
    {
      title: "Apple Store 방문",
      description: "가까운 Apple Store에서 직접 지원",
      availability: "매장별 운영시간 확인",
      action: "예약하기",
      icon: "🏪"
    },
    {
      title: "이메일 지원",
      description: "상세한 문의사항을 이메일로",
      availability: "48시간 내 답변",
      action: "이메일 보내기",
      icon: "📧"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-black text-white py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h1 className="text-6xl mb-4">고객지원</h1>
          <p className="text-2xl text-gray-300 mb-8">
            Apple 제품 사용에 도움이 필요하시면 언제든 문의하세요
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="문제나 질문을 검색해보세요..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-lg rounded-full bg-white text-black border-0"
              />
              <Button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-[#0071e3] hover:bg-[#0077ed]"
              >
                검색
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#support-categories"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0071e3] text-white rounded-full hover:bg-[#0077ed] transition-colors"
            >
              지원받기
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#0071e3] text-[#0071e3] rounded-full hover:bg-[#0071e3] hover:text-white transition-colors"
            >
              연락하기
            </a>
          </div>
        </div>
      </section>

      {/* Quick Help */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">자주 찾는 도움말</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickHelp.map((help, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="text-xl mb-2">{help.title}</h3>
                <p className="text-gray-600 mb-4">{help.description}</p>
                <a href={help.link} className="text-[#0071e3] hover:underline">
                  자세히 보기 →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section id="support-categories" className="bg-white py-20">
        <div className="max-w-[1024px] mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">지원 카테고리</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm text-gray-500 mb-3">주요 주제:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {category.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="text-sm text-gray-700">
                        • {topic}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-3 rounded-full w-full">
                  도움받기
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section id="contact" className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">연락 방법</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{method.description}</p>
                <p className="text-xs text-gray-500 mb-6">{method.availability}</p>
                <Button className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-4 py-2 rounded-full text-sm w-full">
                  {method.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="bg-white py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h2 className="text-4xl mb-8">시스템 상태</h2>
          <p className="text-xl text-gray-600 mb-12">
            Apple 서비스의 현재 상태를 확인하세요
          </p>
          
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                <span className="text-lg">iCloud</span>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">정상</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                <span className="text-lg">App Store</span>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">정상</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                <span className="text-lg">Apple Music</span>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">정상</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                <span className="text-lg">Apple Pay</span>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">정상</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                <span className="text-lg">Apple TV+</span>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">정상</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                <span className="text-lg">Siri</span>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">정상</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button variant="outline" className="border border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white">
                전체 시스템 상태 보기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AppleCare Section */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[1024px] mx-auto px-6 text-center">
          <h2 className="text-4xl mb-8">AppleCare+</h2>
          <p className="text-xl text-gray-600 mb-12">
            Apple 전문가의 기술 지원과 하드웨어 서비스를 받으세요
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl mb-3">의도치 않은 손상 보장</h3>
              <p className="text-gray-600 text-sm">화면 파손, 액체 손상 등에 대한 수리 서비스</p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl mb-3">우선 기술 지원</h3>
              <p className="text-gray-600 text-sm">Apple 전문가와의 직접 연결</p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl mb-3">익스프레스 교체 서비스</h3>
              <p className="text-gray-600 text-sm">빠른 교체 제품 배송</p>
            </div>
          </div>
          
          <div className="mt-12">
            <Button className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-4 rounded-full text-lg">
              AppleCare+ 구입하기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}