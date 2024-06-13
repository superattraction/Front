import Logo from "./img/star 1.png";

export default function WelcomeSignup() {
  return (
    <>
    <img
    // src={PatrickStar}
    alt=""
    className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
  />
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto w-auto" src={Logo} />
          <h2 className="text-center text-xl font-sans -mt-2.5 text-gray-900">
            Super 이끌림
          </h2>
          <h2 className="mt-64 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
            회원가입을 환영합니다!
          </h2>
        </div>
      </div>
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
    >
      </div>
      </div>
      </>
  );
}
