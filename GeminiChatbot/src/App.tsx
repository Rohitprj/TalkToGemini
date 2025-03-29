// import axios from "axios";
// import { useState, useRef, useEffect } from "react";
// import { Bot, Send, User } from "lucide-react";

// interface Message {
//   role: "user" | "bot";
//   content: string;
// }

// function App(): JSX.Element {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);

//   const messageListRef = useRef<HTMLDivElement | null>(null);
//   const textareaRef = useRef<HTMLTextAreaElement | null>(null);

//   useEffect(() => {
//     if (messageListRef.current) {
//       messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
//     }
//   }, [messages, loading]);

//   const handleSendMessage = async (): Promise<void> => {
//     if (!newMessage.trim() || loading) return;

//     const userMessage: Message = { role: "user", content: newMessage };
//     setMessages((prev) => [...prev, userMessage]);
//     setNewMessage("");

//     setLoading(true);

//     try {
//       const response = await axios({
//         url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${
//           import.meta.env.VITE_API_KEY
//         }`,
//         method: "post",
//         data: {
//           contents: [
//             {
//               parts: [
//                 {
//                   text: userMessage.content,
//                 },
//               ],
//             },
//           ],
//         },
//       });

//       const botResponse = response.data.candidates[0].content.parts[0].text;
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { role: "bot", content: botResponse },
//       ]);
//     } catch (error) {
//       console.error("Error:", error);
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         {
//           role: "bot",
//           content: "Sorry, something went wrong. Please try again.",
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     handleSendMessage();
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col">
//       {/* ✅ Header Section */}
//       <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-4 shadow-md fixed top-0 w-full z-10">
//         <h1 className="text-2xl font-bold tracking-wider animate-pulse">
//           TalkToGemini
//         </h1>
//       </header>

//       {/* ✅ Chat Messages Section */}
//       <div className="flex-1 mt-16 overflow-y-auto p-4" ref={messageListRef}>
//         <div className="max-w-4xl mx-auto">
//           {messages.map((message, index) => (
//             <div key={index} className="flex items-center mb-4 animate-fade-in">
//               <div
//                 className={`w-10 h-10 flex items-center justify-center rounded-full ${
//                   message.role === "user" ? "bg-blue-100" : "bg-purple-100"
//                 }`}
//               >
//                 {message.role === "user" ? (
//                   <User className="w-5 h-5 text-blue-600" />
//                 ) : (
//                   <Bot className="w-5 h-5 text-purple-600" />
//                 )}
//               </div>

//               <div className="ml-4">
//                 <div
//                   className={`${
//                     message.role === "user" ? "bg-blue-50" : "bg-purple-50"
//                   } rounded-lg p-4 shadow-md`}
//                 >
//                   <p className="text-gray-700 whitespace-pre-wrap">
//                     {message.content}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {loading && (
//             <div className="flex items-start gap-4 animate-fade-in">
//               <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1.5">
//                 <Bot className="w-4 h-4 text-purple-600 animate-spin" />
//               </div>
//               <div className="flex-1">
//                 <div className="bg-purple-50 rounded-lg p-4 shadow-md">
//                   <p>Thinking...</p>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ✅ TextArea at Bottom */}
//       <form
//         onSubmit={handleSubmit}
//         className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4"
//       >
//         <div className="max-w-4xl mx-auto flex items-center border border-gray-300 rounded-lg overflow-hidden">
//           <textarea
//             ref={textareaRef}
//             value={newMessage}
//             onChange={(e) => setNewMessage(e.target.value)}
//             onKeyDown={handleKeyDown}
//             placeholder="Ask me anything... (Press Enter to send)"
//             rows={1}
//             className="w-full px-4 py-3 resize-none focus:outline-none"
//             style={{ minHeight: "60px" }}
//           />
//           <button
//             type="submit"
//             disabled={loading || !newMessage.trim()}
//             className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             <Send className="w-5 h-5" />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;

import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { Bot, Send, User } from "lucide-react";

interface Message {
  role: "user" | "bot";
  content: string;
}

function App(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const messageListRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSendMessage = async (): Promise<void> => {
    if (!newMessage.trim() || loading) return;

    const userMessage: Message = { role: "user", content: newMessage };
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    setLoading(true);

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${
          import.meta.env.VITE_API_KEY
        }`,
        method: "post",
        data: {
          contents: [
            {
              parts: [
                {
                  text: userMessage.content,
                },
              ],
            },
          ],
        },
      });

      const botResponse = response.data.candidates[0].content.parts[0].text;
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "bot", content: botResponse },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "bot",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleSendMessage();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col">
      {/* ✅ Header Section */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-4 shadow-md fixed top-0 w-full z-10">
        <h1 className="text-2xl font-bold tracking-wider animate-pulse">
          TalkToGemini
        </h1>
      </header>

      {/* ✅ Chat Section */}
      <div className="flex-1 mt-16 overflow-y-auto p-4" ref={messageListRef}>
        <div className="max-w-4xl mx-auto">
          {messages.map((message, index) => (
            <div key={index} className="flex items-center mb-4 animate-fade-in">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  message.role === "user" ? "bg-blue-100" : "bg-purple-100"
                }`}
              >
                {message.role === "user" ? (
                  <User className="w-5 h-5 text-blue-600" />
                ) : (
                  <Bot className="w-5 h-5 text-purple-600" />
                )}
              </div>

              <div className="ml-4">
                <div
                  className={`${
                    message.role === "user" ? "bg-blue-50" : "bg-purple-50"
                  } rounded-lg p-4 shadow-md`}
                >
                  <p className="text-gray-700 whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-start gap-4 animate-fade-in">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1.5">
                <Bot className="w-4 h-4 text-purple-600 animate-spin" />
              </div>
              <div className="flex-1">
                <div className="bg-purple-50 rounded-lg p-4 shadow-md">
                  <p>Thinking...</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ✅ Fixed Textarea at Bottom */}
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 z-20"
      >
        <div className="max-w-4xl mx-auto flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-lg">
          <textarea
            ref={textareaRef}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything... (Press Enter to send)"
            rows={1}
            className="w-full px-4 py-3 resize-none focus:outline-none rounded-lg"
            style={{
              minHeight: "60px",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          />
          <button
            type="submit"
            disabled={loading || !newMessage.trim()}
            className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed rounded-r-lg"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
