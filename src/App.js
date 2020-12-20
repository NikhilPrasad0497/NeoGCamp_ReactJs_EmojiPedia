import React, { useState } from "react";
import "./styles.css";

const emojiDB = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face"
};

var emojiweKnow = Object.keys(emojiDB);

export default function App() {
  var [meaning, setMeaning] = useState(" ");

  function emojiClickHandler(emoji) {
    var meaning = emojiDB[emoji];
    setMeaning(meaning);
  }

  function emojiInputHandler(event) {
    var emoji = event.target.value;

    var meaning = emojiDB[emoji];

    if (meaning === undefined) {
      meaning = "Sorry we don't have than in our DB Now";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Home</h1>
      <input onChange={emojiInputHandler}></input>
      <div style={{ minHeight: "5vh" }}>
        <h2> {meaning} </h2>
      </div>

      <h3 style={{ margin: "auto", paddingBottom: "2rem" }}>Emojis we Know</h3>
      <>
        <div style={{ display: "inline", maxWidth: "600px" }}>
          {emojiweKnow.map(function (emojis) {
            return (
              <span
                key={emojis}
                onClick={() => emojiClickHandler(emojis)}
                style={{
                  padding: "0.5rem",
                  cursor: "pointer",
                  border: "1px transparent"
                }}
              >
                {emojis}{" "}
              </span>
            );
          })}
        </div>
      </>
    </div>
  );
}
