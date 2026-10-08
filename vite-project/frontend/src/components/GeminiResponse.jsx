import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useAppContext } from "./../context/UserContext";

const GeminiResponse = () => {
  const { response, loading } = useAppContext();
  return (
    <div className="h-[100vh] flex flex-col items-center text-center justify-center">
      {loading === true ? (
        <div className="flex flex-col items-center text-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue-600 border-t-transparent"></div>
          <h1 className="mt-2 font-semibold">Asking Gemini...</h1>
        </div>
      ) : null}
      <ReactMarkdown>{response}</ReactMarkdown>
    </div>
  );
};

export default GeminiResponse;
