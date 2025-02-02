// import axios from "axios";
// import { useState } from "react";

// function App() {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");

//   async function chatBot() {
//     console.log("Loading...");
//     const response = await axios({
//       url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${
//         import.meta.env.VITE_API_KEY
//       }`,
//       method: "post",
//       data: {
//         contents: [
//           {
//             parts: [
//               {
//                 text: question,
//               },
//             ],
//           },
//         ],
//       },
//     });

//     const data =
//       response["data"]["candidates"]["0"]["content"]["parts"]["0"].text;

//     setAnswer(data);
//     console.log(data);
//   }
//   return (
//     <>
//       <h1>Ask me something</h1>
//       <br />
//       <button onClick={chatBot}>Generate response</button>
//       <textarea
//         value={question}
//         onChange={(event) => {
//           setQuestion(event.target.value);
//         }}
//         placeholder={"Enter your text"}
//         rows={5}
//         cols={80}
//       ></textarea>
//       <br />
//       <br />
//       <p>{answer}</p>
//     </>
//   );
// }

// export default App;

// import axios from "axios";
// import { useState } from "react";

// function App() {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function chatBot() {
//     setLoading(true); // Set loading to true before making the API call
//     setAnswer(""); // Clear previous answer
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
//                   text: question,
//                 },
//               ],
//             },
//           ],
//         },
//       });

//       const data =
//         response["data"]["candidates"]["0"]["content"]["parts"]["0"].text;
//       setAnswer(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setAnswer("Error fetching response. Please try again.");
//     } finally {
//       setLoading(false); // Set loading to false after the API call, regardless of success or failure
//     }
//   }

//   return (
//     <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center justify-center font-sans">
//       <div className="bg-white rounded-lg shadow-md p-8 w-2/3 md:w-1/2 lg:w-1/3  animate-pulse ">
//         {" "}
//         {/* Added width and animation */}
//         <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
//           Ask Gemini
//         </h1>
//         <textarea
//           value={question}
//           onChange={(event) => setQuestion(event.target.value)}
//           placeholder="Enter your question..."
//           rows={5}
//           className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         ></textarea>
//         <button
//           onClick={chatBot}
//           disabled={loading} // Disable button while loading
//           className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ${
//             loading ? "opacity-50 cursor-not-allowed" : "" // Visual feedback for loading state
//           }`}
//         >
//           {loading ? (
//             <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div> // Loading spinner
//           ) : (
//             "Generate Response"
//           )}
//         </button>
//         <div className="mt-6">
//           <p className="font-medium text-gray-700">Answer:</p>
//           <div className="prose lg:prose-xl mt-2 bg-gray-100 p-4 rounded-md shadow-inner min-h-[5rem]">
//             {" "}
//             {/* Added min-h-[5rem] */}
//             {answer ? (
//               <p className=" break-words">{answer}</p>
//             ) : (
//               <p className="text-gray-500">No answer yet.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import axios from "axios";
// import { useState } from "react";

// function App() {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function chatBot() {
//     setLoading(true);
//     console.log("Loading...");

//     try {
//       const response = await axios({
//         url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${
//           import.meta.env.VITE_API_KEY
//         }`,
//         method: "post",
//         data: {
//           contents: [{ parts: [{ text: question }] }],
//         },
//       });

//       const data = response.data.candidates[0].content.parts[0].text;
//       setAnswer(data);
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setAnswer("An error occurred while fetching the response.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x">
//       <div className="container mx-auto px-4 py-12">
//         {/* Main content container with glass effect */}
//         <div
//           className="max-w-4xl mx-auto backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-2xl
//                       transform transition-all duration-500 hover:scale-[1.02]"
//         >
//           {/* Animated title */}
//           <h1
//             className="text-5xl font-bold text-white text-center mb-12
//                        animate-fade-in-down tracking-wide"
//           >
//             AI Chat Assistant
//             <div
//               className="h-1 w-24 bg-white mx-auto mt-4 rounded-full
//                           animate-pulse"
//             ></div>
//           </h1>

//           {/* Animated textarea container */}
//           <div className="transform transition-all duration-300 hover:scale-[1.01]">
//             <textarea
//               value={question}
//               onChange={(event) => setQuestion(event.target.value)}
//               placeholder="What would you like to know?"
//               rows={5}
//               className="w-full p-6 rounded-xl bg-white/20 backdrop-blur-md
//                        border border-white/30 text-white placeholder-white/70
//                        focus:ring-2 focus:ring-white/50 focus:outline-none
//                        transition-all duration-300 text-lg resize-none
//                        shadow-lg"
//             />
//           </div>

//           {/* Animated button */}
//           <div className="flex justify-center mt-8">
//             <button
//               onClick={chatBot}
//               disabled={loading}
//               className="group relative px-8 py-4 bg-white rounded-xl text-purple-600 font-bold
//                        transform transition-all duration-300 hover:scale-105
//                        hover:shadow-lg hover:bg-opacity-90 disabled:opacity-70
//                        disabled:cursor-not-allowed"
//             >
//               {/* Button shine effect */}
//               <div
//                 className="absolute inset-0 w-0 bg-white/40 transition-all
//                            duration-300 ease-out group-hover:w-full rounded-xl"
//               ></div>
//               <span className="relative">
//                 {loading ? (
//                   <div className="flex items-center">
//                     <div className="w-5 h-5 border-t-2 border-purple-500 rounded-full animate-spin mr-2"></div>
//                     Generating...
//                   </div>
//                 ) : (
//                   "Generate Response"
//                 )}
//               </span>
//             </button>
//           </div>

//           {/* Animated answer section */}
//           {answer && (
//             <div className="mt-12 animate-fade-in">
//               <div
//                 className="bg-white/20 backdrop-blur-md p-6 rounded-xl
//                            border border-white/30 text-white shadow-lg
//                            transform transition-all duration-500"
//               >
//                 <p className="text-xl leading-relaxed">{answer}</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import axios from "axios";
import { useState } from "react";
import { Bot, Send, Sparkles, User } from "lucide-react";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function chatBot() {
    try {
      setLoading(true);
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
                  text: question,
                },
              ],
            },
          ],
        },
      });

      const data =
        response["data"]["candidates"]["0"]["content"]["parts"]["0"].text;

      setAnswer(data);
    } catch (error) {
      console.error("Error:", error);
      setAnswer("Sorry, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-600" />
            AI Chat Assistant
          </h1>
          <p className="text-gray-600">Powered by Gemini 1.5</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 animate-slide-up">
          <div className="min-h-[200px] mb-6">
            {question && (
              <div className="flex gap-4 mb-6 animate-fade-in">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 bg-blue-50 rounded-lg p-4">
                    {question}
                  </p>
                </div>
              </div>
            )}

            {(answer || loading) && (
              <div className="flex gap-4 animate-fade-in">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="bg-purple-50 rounded-lg p-4">
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                      </div>
                    ) : (
                      <p className="text-gray-700 whitespace-pre-wrap">
                        {answer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <textarea
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask me anything..."
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-400 focus:ring focus:ring-purple-100 transition-all outline-none resize-none pr-12"
            />
            <button
              onClick={chatBot}
              disabled={loading || !question.trim()}
              className="absolute right-2 bottom-2 p-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
