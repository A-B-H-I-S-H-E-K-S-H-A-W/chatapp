import { Mic, Paperclip, Send, Smile } from "lucide-react";

export const MessageInput = ({ onSendMessage, newMessage, setNewMessage }) => {
  const handleSubmit = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="bg-secondary/30 px-4 py-3 border-t">
      <div className="flex items-center space-x-3">
        <Paperclip className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
        <div className="flex-1 relative">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <Smile className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
        </div>
        {newMessage.trim() ? (
          <button
            onClick={handleSubmit}
            className="p-2 bg-primary hover:bg-primary rounded-full text-white transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        ) : (
          <Mic className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
        )}
      </div>
    </div>
  );
};
