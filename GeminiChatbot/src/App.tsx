import axios from "axios";
import { useState } from "react";

function App() {
  const [result, setResult] = useState();

  async function chatBot() {
    console.log("Loading...");
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
                text: "suggest me some javascript questions ?",
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
      <h1>Ask me something</h1>
      <br />
      <button onClick={chatBot}>Generate response</button>
      <br />
      <br />
      <p>{result}</p>
    </>
  );
}

export default App;
