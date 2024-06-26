import { FaRegFilePdf } from "react-icons/fa6";
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
    <div className="mt-96">
      <div className="mt-2 flex justify-center rounded-lg px-6 py-10">
        <div className="text-center">
          <FaRegFilePdf
            className="mx-auto mb-3 h-20 w-20 text-gray-300"
            aria-hidden="true"
          />
          <div className="flex text-2xl leading-6 text-gray-600 m-3">
            <label
              htmlFor="file-upload"
              className="relative mb-3 cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
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
            <p className="text-lg leading-5 text-stone-50">
              첨부된 파일: {file.name}
            </p>
          )}
          <p className="text-xl font-semibold leading-5 text-stone-50">
            PDF 파일만 첨부 가능
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          저장
        </button>
        <button
          type="button"
          className="text-lg font-semibold leading-6 text-stone-50"
        >
          취소
        </button>
      </div>
    </div>
  );
}
