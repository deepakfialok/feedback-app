function EmojiDisplay({ emoji }) {
  if (!emoji) return <p>Select an emoji above to give feedback!</p>;

  return (
    <div className="emoji-display">
      <h2>You selected:</h2>
      <div className="big-emoji">{emoji}</div>
    </div>
  );
}

export default EmojiDisplay;
