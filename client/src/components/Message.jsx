export const Message = ({ message, isOwn, senderName }) => {
  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          isOwn ? "bg-green-500 text-white" : "bg-white text-gray-800 shadow-sm"
        }`}
      >
        <p className="text-sm">{message.text}</p>
        <div
          className={`flex items-center justify-end mt-1 ${
            isOwn ? "text-green-100" : "text-gray-500"
          }`}
        >
          <span className="text-xs">{message.timestamp}</span>
          {isOwn && (
            <span className="ml-1 text-xs">
              {message.status === "read"
                ? "✓✓"
                : message.status === "delivered"
                ? "✓✓"
                : "✓"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
