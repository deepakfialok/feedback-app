import { useState } from "react";
import EmojiButton from "./components/EmojiButton";
import EmojiDisplay from "./components/EmojiDisplay";

const emojiList = ["😃", "😐", "😞"];

function App() {
  const [feedbackCounts, setFeedbackCounts] = useState({
    "😃": 0,
    "😐": 0,
    "😞": 0,
  });

  const handleEmojiClick = (emoji) => {
    setFeedbackCounts((prev) => ({
      ...prev,
      [emoji]: prev[emoji] + 1,
    }));
  };

  // 🧠 Find emoji with the highest count
  const mostVotedEmoji = Object.entries(feedbackCounts).reduce((a, b) =>
    b[1] > a[1] ? b : a
  )[0]; // Returns the emoji (not the count)

  return (
    <div className="app">
      <h1>How was your experience?</h1>

      <div className="emoji-buttons">
        {emojiList.map((emoji) => (
          <EmojiButton key={emoji} emoji={emoji} onClick={handleEmojiClick} />
        ))}
      </div>

      <EmojiDisplay emoji={mostVotedEmoji} />

      <div className="counts">
        <h3>Total Feedback:</h3>
        <ul>
          {emojiList.map((emoji) => (
            <li key={emoji}>
              {emoji}: {feedbackCounts[emoji]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
