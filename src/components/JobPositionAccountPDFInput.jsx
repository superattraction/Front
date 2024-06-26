import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function JobPositionAccount() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("files", file);

    if (!file) {
      alert("PDF 파일을 첨부해주세요.");
      return;
    }

    const form = new FormData();
    form.append("files", file);

    try {
      const response = await fetch("http://10.125.121.212:8080/api/account/", {
        method: "POST",
        body: formData,
      });

      console.log(response);

      if (response.ok) {
        const result = await response.json();
        alert("성공적으로 파일이 업로드되었습니다.");
      } else {
        alert("파일 업로드에 실패했습니다.");
      }
    } catch (error) {
      console.error("업로딩 파일 에러:", error);
      alert("업로드 중 문제가 발생했습니다.");
    }
  };

  return (
    <form className="m-10 bg-slate-50" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div className="col-span-full">

            <div className="mt-2 flex justify-center rounded-lg px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>직무능력계좌를 첨부해주세요</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept="application/pdf"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
                {file && (
                  <p className="text-xs leading-5 text-gray-600">
                    첨부된 파일: {file.name}
                  </p>
                )}
                <p className="text-xs leading-5 text-gray-600">
                  PDF 파일만 첨부 가능
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          취소
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          저장
        </button>
      </div>
    </form>
  );
}
