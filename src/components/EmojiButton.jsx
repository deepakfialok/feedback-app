function EmojiButton({ emoji, onClick }) {
  return (
    <button className="emoji-button" onClick={() => onClick(emoji)}>
      {emoji}
    </button>
  );
}

export default EmojiButton; // ✅ FIXED
