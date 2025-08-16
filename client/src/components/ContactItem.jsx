import { Avatar } from "./Avatar";

export const ContactItem = ({
  contact,
  isSelected,
  onClick,
  currentUserId,
}) => {
  const lastMessage = contact.lastMessage;
  const isFromCurrentUser = lastMessage && lastMessage.startsWith("You:");

  return (
    <div
      className={`flex items-center px-4 py-3 hover:bg-primary/30 cursor-pointer ${
        isSelected ? "bg-primary/20" : ""
      }`}
      onClick={onClick}
    >
      <Avatar
        src={contact.avatar}
        name={contact.name}
        online={contact.online}
        isGroup={contact.isGroup}
      />
      <div className="ml-3 flex-1 min-w-0">
        <div className="flex justify-between items-baseline">
          <h3 className="text-sm font-medium text-gray-900 truncate">
            {contact.name}
          </h3>
          <span className="text-xs text-gray-500 ml-2 flex-shrink-0">
            {contact.timestamp}
          </span>
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm text-gray-600 truncate">{lastMessage}</p>
          {contact.unreadCount > 0 && (
            <span className="bg-primary text-white text-xs rounded-full px-2 py-0.5 ml-2 flex-shrink-0">
              {contact.unreadCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
