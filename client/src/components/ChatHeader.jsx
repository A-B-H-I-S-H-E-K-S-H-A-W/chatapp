import { MoreVertical, Phone, Video } from "lucide-react";
import { Avatar } from "./Avatar";

export const ChatHeader = ({ contact }) => {
  if (!contact) return null;

  return (
    <div className="bg-gray-100 px-4 py-3 flex items-center justify-between border-b">
      <div className="flex items-center">
        <Avatar
          src={contact.avatar}
          name={contact.name}
          online={contact.online}
          isGroup={contact.isGroup}
        />
        <div className="ml-3">
          <h3 className="text-sm font-medium text-gray-900">{contact.name}</h3>
          <p className="text-xs text-gray-600">
            {contact.online ? "Online" : "Last seen recently"}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Phone className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
        <Video className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
        <MoreVertical className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
      </div>
    </div>
  );
};
