import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import Logo from "../img/star 1.png";

const navigation = [
  { name: "직무능력계좌", href: "/mypage/Account" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "마이페이지", href: "/MyPage" },
];

const MainPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false); // State to manage chat window
  const [messages, setMessages] = useState([]); // State to manage chat messages
  const [input1, setInput1] = useState(""); // State to manage input value
  const [input2, setInput2] = useState(""); // State to manage input value

  const handleChatButtonClick = () => {
    setChatOpen(!chatOpen);
  };

  const handleSendMessage = async () => {
    if (input1.trim() === "" || input2.trim() === "") return;

    const combinedMessage = `${input1}에서 ${input2}와 관련된 교육 추천해줘`;
    const newMessage = { text: combinedMessage, sent: true };
    setMessages([...messages, newMessage]);
    setInput1("");
    setInput2("");

    try {
      const response = await fetch(`http://10.125.121.212:5000/api/chat/${encodeURIComponent(combinedMessage)}`);
      const data = await response.json();
      const formattedResponse = formatResponse(data.reply);
      const receivedMessage = { text: formattedResponse, sent: false };
      setMessages(prevMessages => [...prevMessages, receivedMessage]);
    } catch (error) {
      console.error('에러 메세지:', error);
      const errorMessage = { text: '잘못된 메세지가 전달되었습니다.', sent: false };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    }
  };

  const formatResponse = (response) => {
    const coursePattern = /output:\s(.*?)\s\((.*?)\)\s(.*?)\s(.*?)\s(\d{3}-\d{3}-\d{4})\s(.*?)\s(\d+,\d+\s원)\s(총\d+시간)/g;
    let formatted = '';
    let match;
    let courses = [];

    while ((match = coursePattern.exec(response)) !== null) {
      courses.push(match);
      if (courses.length === 5) break;
    }

    courses.forEach(([_, title, code, address, institution, phone, email, cost, duration], index) => {
      formatted += `\n교육과정 ${index + 1}\n\n`;
      formatted += `1. 교육과정명: ${title}\n`;
      formatted += `2. NCS코드: ${code}\n`;
      formatted += `3. 위치: ${address}\n`;
      formatted += `4. 상세주소: ${institution}\n`;
      formatted += `5. 연락처: ${phone}\n`;
      formatted += `6. E-mail: ${email}\n`;
      formatted += `7. 교육비용: ${cost}\n`;
      formatted += `8. 교육기간: ${duration}\n\n`;

    });

    return formatted || '일치하는 교육과정이 없습니다.';
  };

  return (
    <div className="bg-white">
      {/* 헤더 */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-10 w-auto" src={Logo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex flex-1 justify-end ">
            <a href="/signup" className="px-5 text-sm font-semibold leading-6 text-white">
              회원가입
            </a>
            <a href="/signin" className="text-sm font-semibold leading-6 text-white">
              Login
            </a>
            <a href="/AdminSignin" className="px-5 text-sm font-semibold leading-6 text-white">
              관리자 로그인
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-10 w-auto" src={Logo} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="py-6 ">
              <a href="/signup" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                회원가입
              </a>
              <a href="/signin" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Login
              </a>
            </div>
            <div className="flow-root">
              <div className="divide-y divide-gray-500/10">
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/AdminSignin"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    관리자 로그인
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* 헤더 부분 */}
      <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center font-bold">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                국비지원의 모든 것을 알고 싶다면{" "}
                <a href="#" className="font-semibold text-white px-3">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                국비 나침반
              </h1>
              <p className="mt-6 text-2xl leading-8 text-gray-300">
                Super 이끌림이 당신의 꿈을 응원합니다.
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      {/* Floating 채팅창 */}
      <button
        onClick={handleChatButtonClick}
        className="fixed bottom-5 left-5 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 z-50"
      >
        <ChatBubbleLeftRightIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* 채팅 로그기록 */}
      {chatOpen && (
        <div className="fixed bottom-20 left-5 bg-slate-100 p-6 rounded-lg shadow-lg w-80 z-50">
          <h2 className="text-xl font-semibold mb-4">국비 나침반 AI 상담</h2>
          <div className="h-48 overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 my-2 rounded-lg ${
                  message.sent
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-200 text-black self-start"
                }`}
              >
                {message.text.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ))}
          </div>
          <div>
            <textarea
              className="w-20 h-10 p-2 border border-gray-300 rounded-md mb-2"
              placeholder="지역"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />
            에서
          </div>
          <div>
            <textarea
              className="w-20 h-10 mr-3 p-2 border border-gray-300 rounded-md mb-2"
              placeholder="키워드"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />
            관련한 국비교육 추천해줘
          </div>
          <button
            className="w-full mt-5 bg-blue-500 text-white p-2 rounded-md"
            onClick={handleSendMessage}
          >
            전송
          </button>
        </div>
      )}
    </div>
  );
};

export default MainPage;
