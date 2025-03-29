// // import axios from "axios";
// // import { useState, useRef } from "react";
// // import { Bot, Send, User } from "lucide-react";

// // interface Message {
// //   role: "user" | "bot";
// //   content: string;
// // }

// // function App(): JSX.Element {
// //   const [messages, setMessages] = useState<Message[]>([]);
// //   const [newMessage, setNewMessage] = useState<string>("");
// //   const [loading, setLoading] = useState<boolean>(false);
// //   const messageListRef = useRef<HTMLDivElement | null>(null);

// //   const handleSubmit = async (
// //     e: React.FormEvent<HTMLFormElement>
// //   ): Promise<void> => {
// //     e.preventDefault();
// //     if (!newMessage.trim()) return;

// //     const userMessage: Message = { role: "user", content: newMessage };
// //     setMessages([...messages, userMessage]);
// //     setNewMessage("");

// //     setLoading(true);
// //     try {
// //       const response = await axios({
// //         url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${
// //           import.meta.env.VITE_API_KEY
// //         }`,
// //         method: "post",
// //         data: {
// //           contents: [
// //             {
// //               parts: [
// //                 {
// //                   text: newMessage,
// //                 },
// //               ],
// //             },
// //           ],
// //         },
// //       });

// //       const botResponse = response.data.candidates[0].content.parts[0].text;
// //       setMessages([
// //         ...messages,
// //         userMessage,
// //         { role: "bot", content: botResponse },
// //       ]);
// //     } catch (error) {
// //       console.error("Error:", error);
// //       setMessages([
// //         ...messages,
// //         userMessage,
// //         {
// //           role: "bot",
// //           content: "Sorry, something went wrong. Please try again.",
// //         },
// //       ]);
// //     } finally {
// //       setLoading(false);
// //       // Scroll to the bottom after the response
// //       if (messageListRef.current) {
// //         messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
// //       }
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 md:p-8">
// //       <div className="max-w-4xl mx-auto">
// //         <div className="text-center mb-8 animate-fade-in">
// //           {/* Title remains the same */}
// //         </div>

// //         <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 animate-slide-up">
// //           <div
// //             className="min-h-[200px] mb-6 overflow-y-auto"
// //             ref={messageListRef}
// //           >
// //             {messages.map((message, index) => (
// //               <div key={index} className="flex gap-4 mb-2 animate-fade-in">
// //                 <div
// //                   className={`w-8 h-8 rounded-full ${
// //                     message.role === "user" ? "bg-blue-100" : "bg-purple-100"
// //                   } flex items-center justify-center flex-shrink-0`}
// //                 >
// //                   {message.role === "user" ? (
// //                     <User className="w-4 h-4 text-blue-600" />
// //                   ) : (
// //                     <Bot className="w-4 h-4 text-purple-600" />
// //                   )}
// //                 </div>
// //                 <div className="flex-1">
// //                   <div
// //                     className={`${
// //                       message.role === "user" ? "bg-blue-50" : "bg-purple-50"
// //                     } rounded-lg p-4`}
// //                   >
// //                     <p className="text-gray-700 whitespace-pre-wrap">
// //                       {message.content}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //             {loading && (
// //               <div className="flex gap-4 animate-fade-in">
// //                 <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
// //                   <Bot className="w-4 h-4 text-purple-600 animate-spin" />
// //                 </div>
// //                 <div className="flex-1">
// //                   <div className="bg-purple-50 rounded-lg p-4">
// //                     <p>Thinking...</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           <form onSubmit={handleSubmit} className="relative">
// //             <textarea
// //               value={newMessage}
// //               onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
// //                 setNewMessage(e.target.value)
// //               }
// //               placeholder="Ask me anything..."
// //               rows={3}
// //               className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-400 focus:ring focus:ring-purple-100 transition-all outline-none resize-none pr-12"
// //             />
// //             <button
// //               type="submit"
// //               disabled={loading || !newMessage.trim()}
// //               className="absolute right-2 bottom-2 p-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
// //             >
// //               <Send className="w-5 h-5" />
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// import axios from "axios";
// import { useState, useRef } from "react";
// import { Bot, Send, User } from "lucide-react";

// // Define message interface
// interface Message {
//   role: "user" | "bot";
//   content: string;
// }

// function App(): JSX.Element {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);
//   const messageListRef = useRef<HTMLDivElement | null>(null);

//   const handleSendMessage = async (): Promise<void> => {
//     if (!newMessage.trim() || loading) return;

//     const userMessage: Message = { role: "user", content: newMessage };
//     setMessages([...messages, userMessage]);
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
//       // Scroll to the bottom after the response
//       setTimeout(() => {
//         if (messageListRef.current) {
//           messageListRef.current.scrollTop =
//             messageListRef.current.scrollHeight;
//         }
//       }, 100);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     handleSendMessage();
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
//     // Send message on Enter (without Shift key)
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 md:p-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-8 animate-fade-in">
//           {/* Title remains the same */}
//         </div>

//         <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 animate-slide-up">
//           <div
//             className="min-h-[200px] max-h-[500px] mb-6 overflow-y-auto"
//             ref={messageListRef}
//           >
//             {messages.map((message, index) => (
//               <div key={index} className="flex gap-4 mb-2 animate-fade-in">
//                 <div
//                   className={`w-8 h-8 rounded-full ${
//                     message.role === "user" ? "bg-blue-100" : "bg-purple-100"
//                   } flex items-center justify-center flex-shrink-0 mt-1`}
//                 >
//                   {message.role === "user" ? (
//                     <User className="w-4 h-4 text-blue-600" />
//                   ) : (
//                     <Bot className="w-4 h-4 text-purple-600" />
//                   )}
//                 </div>
//                 <div className="flex-1">
//                   <div
//                     className={`${
//                       message.role === "user" ? "bg-blue-50" : "bg-purple-50"
//                     } rounded-lg p-4`}
//                   >
//                     <p className="text-gray-700 whitespace-pre-wrap">
//                       {message.content}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             {loading && (
//               <div className="flex gap-4 animate-fade-in">
//                 <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
//                   <Bot className="w-4 h-4 text-purple-600 animate-spin" />
//                 </div>
//                 <div className="flex-1">
//                   <div className="bg-purple-50 rounded-lg p-4">
//                     <p>Thinking...</p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           <form onSubmit={handleSubmit} className="relative">
//             <textarea
//               value={newMessage}
//               onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
//                 setNewMessage(e.target.value)
//               }
//               onKeyDown={handleKeyDown}
//               placeholder="Ask me anything... (Press Enter to send)"
//               rows={3}
//               className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-400 focus:ring focus:ring-purple-100 transition-all outline-none resize-none pr-12"
//             />
//             <button
//               type="submit"
//               disabled={loading || !newMessage.trim()}
//               className="absolute right-2 bottom-2 p-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <Send className="w-5 h-5" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import axios from "axios";
import { useState, useRef } from "react";
import { Bot, Send, User } from "lucide-react";

// Define message interface
interface Message {
  role: "user" | "bot";
  content: string;
}

function App(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const messageListRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = async (): Promise<void> => {
    if (!newMessage.trim() || loading) return;

    const userMessage: Message = { role: "user", content: newMessage };
    setMessages([...messages, userMessage]);
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
      // Scroll to the bottom after the response
      setTimeout(() => {
        if (messageListRef.current) {
          messageListRef.current.scrollTop =
            messageListRef.current.scrollHeight;
        }
      }, 100);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleSendMessage();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    // Send message on Enter (without Shift key)
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          {/* Title remains the same */}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 animate-slide-up">
          <div
            className="min-h-[200px] max-h-[500px] mb-6 overflow-y-auto"
            ref={messageListRef}
          >
            {messages.map((message, index) => (
              <div key={index} className="flex gap-4 mb-2 animate-fade-in">
                <div
                  className={`w-8 h-8 rounded-full ${
                    message.role === "user" ? "bg-blue-100" : "bg-purple-100"
                  } flex items-center justify-center flex-shrink-0 mt-1`}
                >
                  {message.role === "user" ? (
                    <User className="w-4 h-4 text-blue-600" />
                  ) : (
                    <Bot className="w-4 h-4 text-purple-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div
                    className={`${
                      message.role === "user" ? "bg-blue-50" : "bg-purple-50"
                    } rounded-lg p-4`}
                  >
                    <p className="text-gray-700 whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-4 animate-fade-in">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-4 h-4 text-purple-600 animate-spin" />
                </div>
                <div className="flex-1">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p>Thinking...</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="relative">
            <textarea
              value={newMessage}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setNewMessage(e.target.value)
              }
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything... (Press Enter to send)"
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-400 focus:ring focus:ring-purple-100 transition-all outline-none resize-none pr-12"
            />
            <button
              type="submit"
              disabled={loading || !newMessage.trim()}
              className="absolute right-2 bottom-2 p-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
