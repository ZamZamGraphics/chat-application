import { useRef } from "react";
import Message from "./Message";
import { useState } from "react";
import { useEffect } from "react";
function ChatBody() {
  const textAreaRef = useRef(null);
  const [singleMessage, setSingleMessage] = useState("");

  const handleChange = (e) => {
    setSingleMessage(e.target.value);
  };

  useEffect(() => {
    console.log(textAreaRef.current.style.height);
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [singleMessage]);

  return (
    <div className="md:pl-[22rem] h-screen fixed inset-0 top-[3.3rem] overflow-y-auto bg-white dark:bg-slate-800">
      <div className="absolute bottom-[3.3rem]">
        <Message />
        <form action="">
          <div className="m-3 relative">
            <textarea
              name="message"
              className="block w-full resize-none max-h-[15rem] break-words overflow-y-auto p-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none bg-gray-50 sm:text-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              value={singleMessage}
              onChange={handleChange}
              ref={textAreaRef}
              rows="1"
              placeholder="Compose Message hare"
            ></textarea>
            <button type="submit" className="absolute end-2.5 bottom-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatBody;
