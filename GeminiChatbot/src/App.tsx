import axios from "axios";
import { useState, useRef } from "react";
import { Bot, Send, Sparkles, User } from "lucide-react";

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const messageListRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setMessages([...messages, { role: "user", content: newMessage }]);
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
                  text: newMessage,
                },
              ],
            },
          ],
        },
      });

      const botResponse = response.data.candidates[0].content.parts[0].text;
      setMessages([
        ...messages,
        { role: "user", content: newMessage },
        { role: "bot", content: botResponse },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...messages,
        {
          role: "bot",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
      // Scroll to the bottom after the response
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
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
            className="min-h-[200px] mb-6 overflow-y-auto"
            ref={messageListRef}
          >
            {messages.map((message, index) => (
              <div key={index} className="flex gap-4 mb-2 animate-fade-in">
                <div
                  className={`w-8 h-8 rounded-full bg-${
                    message.role === "user" ? "blue" : "purple"
                  }-100 flex items-center justify-center flex-shrink-0`}
                >
                  {message.role === "user" ? (
                    <User className="w-4 h-4 text-blue-600" />
                  ) : (
                    <Bot className="w-4 h-4 text-purple-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div
                    className={`bg-${
                      message.role === "user" ? "blue" : "purple"
                    }-50 rounded-lg p-4`}
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
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
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
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Ask me anything..."
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
