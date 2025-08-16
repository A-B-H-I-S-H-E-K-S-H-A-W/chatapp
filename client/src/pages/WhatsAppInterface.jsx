import React, { useState } from "react";
import {
  Search,
  MoreVertical,
  Phone,
  Video,
  Paperclip,
  Smile,
  Mic,
  Send,
} from "lucide-react";
import { initialData } from "../data";
import { Avatar } from "../components/Avatar";
import { ContactItem } from "../components/ContactItem";
import { Message } from "../components/Message";
import { ChatHeader } from "../components/ChatHeader";
import { MessageInput } from "../components/MessageInput";

const WhatsAppInterface = () => {
  const [data, setData] = useState(initialData);
  const [selectedContactId, setSelectedContactId] = useState(2);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const selectedContact = data.contacts.find((c) => c.id === selectedContactId);
  const currentMessages = data.messages[selectedContactId] || [];

  const filteredContacts = data.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = (messageText) => {
    const newMsg = {
      id: Date.now(),
      senderId: data.currentUser.id,
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "delivered",
    };

    setData((prevData) => ({
      ...prevData,
      messages: {
        ...prevData.messages,
        [selectedContactId]: [
          ...(prevData.messages[selectedContactId] || []),
          newMsg,
        ],
      },
      contacts: prevData.contacts.map((contact) =>
        contact.id === selectedContactId
          ? {
              ...contact,
              lastMessage: `You: ${messageText}`,
              timestamp: newMsg.timestamp,
            }
          : contact
      ),
    }));
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-1/3 bg-background border-r border-primary flex flex-col">
        {/* Sidebar Header */}
        <div className="bg-primary px-4 py-3 flex items-center justify-between">
          <Avatar src={data.currentUser.avatar} name={data.currentUser.name} />
          <div className="flex items-center space-x-3">
            <MoreVertical className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-4 py-3 bg-secondary/20">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search or start new chat"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background rounded-lg border border-primary focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Contact List */}
        <div className="flex-1 overflow-y-auto">
          {filteredContacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              isSelected={selectedContactId === contact.id}
              onClick={() => setSelectedContactId(contact.id)}
              currentUserId={data.currentUser.id}
            />
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedContact ? (
          <>
            <ChatHeader contact={selectedContact} />

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-4 bg-background"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            >
              {currentMessages.map((message) => (
                <Message
                  key={message.id}
                  message={message}
                  isOwn={message.senderId === data.currentUser.id}
                  senderName={
                    message.senderId === data.currentUser.id
                      ? "You"
                      : selectedContact.name
                  }
                />
              ))}
            </div>

            <MessageInput
              onSendMessage={handleSendMessage}
              newMessage={newMessage}
              setNewMessage={setNewMessage}
            />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-primary/20">
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-8 opacity-10">
                <svg viewBox="0 0 303 172" className="w-full h-full">
                  <path
                    fill="#DDD"
                    d="M229.565 160.229c-6.045-0.484-11.137-2.694-17.193-7.448l-10.13-7.956c-5.488-4.326-9.616-6.693-15.802-9.072-7.518-2.887-14.334-3.848-22.866-3.218-4.717 0.349-20.056 2.928-33.136 5.74-8.171 1.758-20.275 6.717-32.794 13.447-2.287 1.229-9.955 5.438-10.269 5.76l-0.084 0.084c-0.62 0.637-0.62 1.663 0 2.3l12.267 12.644c7.948 8.186 13.666 11.87 23.02 14.833 5.487 1.737 13.158 2.685 19.879 2.457 11.406-0.387 19.006-3.366 29.431-11.528l6.028-4.722c10.695-8.379 18.014-11.398 31.206-12.877 5.504-0.617 9.34-0.133 14.293 1.804 4.953 1.937 8.47 4.542 13.182 9.756l7.351 8.133c4.348 4.811 7.627 7.253 12.581 9.36 10.831 4.607 22.722 3.452 31.896-3.096l4.272-3.047c1.313-0.936 1.594-2.773 0.628-4.103l-12.644-17.402c-4.628-6.372-9.204-11.067-17.193-17.551-7.183-5.831-17.193-10.647-28.607-13.843z"
                  />
                </svg>
              </div>
              <h3 className="text-lg text-secondary mb-2">WhatsApp Web</h3>
              <p className="text-sm text-primary">
                Select a chat to start messaging
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsAppInterface;
