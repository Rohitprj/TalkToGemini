import axios from "axios";
import { useState } from "react";

function App() {
  const [result, setResult] = useState();

  async function chatBot() {
    console.log("Loading...");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAHoDPmP2TTqt4XCQ69eKVnfQ-3e-XsIig",
      method: "post",
      data: {
        contents: [
          {
            parts: [
              {
                text: "tell me about javascript",
              },
            ],
          },
        ],
      },
    });

    const data =
      response["data"]["candidates"]["0"]["content"]["parts"]["0"].text;

    setResult(data);
    console.log(data);
  }
  return (
    <>
      <h1>hi</h1>
      <button onClick={chatBot}>Generate response</button>
      <p>{result}</p>
    </>
  );
}

export default App;
