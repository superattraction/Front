import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WelcomeSignup from "./WelcomeSignup";
import Logo from "./img/star 1.png";
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.id) newErrors.id = "ID를 올바르게 입력해주세요.";
    if (!formData.password)
      newErrors.password = "패스워드를 올바르게 입력해주세요.";
    if (formData.password !== formData.confirmPasssword)
      newErrors.confirmPasssword = "패스워드를 올바르게 입력해주세요.";
    if (!formData.name) newErrors.name = "이름을 올바르게 입력해주세요.";
    if (!formData.email) newErrors.email = "E-Mail을 올바르게 입력해주세요.";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "전화번호를 올바르게 입력해주세요.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://10.125.121.212:8080/api/auth/signUp", formData)
      .then((response) => {
        console.log("데이터가 성공적으로 전송되었습니다.", response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <h2 className="mt-8 mb-8 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
          회원가입
        </h2>
        <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
          <div className="flex items-center justify-center flex-col">
            <img className="mx-auto w-auto" src={Logo} />
            <p className="font-medium text-xl mb-4">Super 이끌림</p>
          </div>
          <label
            htmlFor="id"
            className="block text-lg font-medium leading-6 text-gray-900 mt-2"
          >
            ID
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className={`mt-2 block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
              errors.id ? "ring-red-500" : "ring-gray-300"
            } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          />
          {errors.id && (
            <p className="mt-2 text-sm text-red-600">{errors.id}</p>
          )}
          <div className="mt-2"></div>
          <div>
            <label
              htmlFor="password"
              className="text-lg block font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-2 block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                errors.password ? "ring-red-500" : "ring-gray-300"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-lg font-medium text-gray-900 mt-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`mt-2 placeholder:block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                errors.confirmPassword ? "ring-red-500" : "ring-gray-300"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {errors.confirmPassword && (
              <p className="mt-2 text-sm text-red-600">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-900 mt-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-2 block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                errors.name ? "ring-red-500" : "ring-gray-300"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-900 mt-2"
            >
              E-Mail
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-2 block w-4/5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                errors.email ? "ring-red-500" : "ring-gray-300"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-lg font-medium text-gray-900 mt-2"
            >
              전화번호
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`mt-2 block w-3/5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                errors.phoneNumber ? "ring-red-500" : "ring-gray-300"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
            {errors.phoneNumber && (
              <p className="mt-2 text-sm text-red-600">{errors.phoneNumber}</p>
            )}
          </div>

          <div className="relative mt-10">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm font-medium leading-6">
              <span className="bg-white px-6 text-gray-900"></span>
            </div>
          </div>

          <div className="mt-6 grid"></div>
          <div className="grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
            <div>
              <h2 className="text-lg font-semibold leading-7 text-gray-900">
                알림 설정
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600 mb-5">
                국비나침반에서 지원하는 알림을 받고 싶으시다면 체크 해주세요.
              </p>
            </div>

            <div className="max-w-2xl space-y-10 md:col-span-2">
              <fieldset>
                <legend className="text-sm font-semibold text-gray-900">
                  이메일 알림
                </legend>
                <div className="mt-6 space-y-6">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-900"
                      >
                        알림 1
                      </label>
                      <p className="text-gray-500">설명 1</p>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="candidates"
                        className="font-medium text-gray-900"
                      >
                        알림 2
                      </label>
                      <p className="text-gray-500">설명 2</p>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-900"
                      >
                        알림 3
                      </label>
                      <p className="text-gray-500">설명 3</p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend className="text-sm font-semibold text-gray-900">
                  알림 범위 설정
                </legend>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-everything"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      모두 받기
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-kakaotalk"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-kakaotalk"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      카카오톡
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-sms"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-sms"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      SMS
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-nothing"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-nothing"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      알림 받지 않음
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign Up
          </button>
        </form>

        <div className="relative mt-5">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm font-medium leading-6">
            <span className="bg-white px-6 text-gray-900"></span>
          </div>
        </div>

        <a
          href="https://google.com"
          className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
        >
          <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
            <path
              d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
              fill="#EA4335"
            />
            <path
              d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
              fill="#4285F4"
            />
            <path
              d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
              fill="#FBBC05"
            />
            <path
              d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
              fill="#34A853"
            />
          </svg>
          <span className="text-sm font-semibold leading-6">Google</span>
        </a>
        <div className="m-5 flex items-center justify-center gap-x-6">
          <a
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            href="/"
          >
            뒤로 가기
          </a>
        </div>
      </div>
    </div>
  );
}
