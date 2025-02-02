import axios from "axios";
import { useState } from "react";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

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
    console.log(data);
  }
  return (
    <>
      <h1>Ask me something</h1>
      <br />
      <button onClick={chatBot}>Generate response</button>
      <textarea
        value={question}
        onChange={(event) => {
          setQuestion(event.target.value);
        }}
        placeholder={"Enter your text"}
        rows={5}
        cols={80}
      ></textarea>
      <br />
      <br />
      <p>{answer}</p>
    </>
  );
}

export default App;
