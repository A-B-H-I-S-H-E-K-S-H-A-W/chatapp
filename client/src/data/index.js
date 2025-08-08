export const initialData = {
  currentUser: {
    id: 1,
    name: "You",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
  },
  contacts: [
    {
      id: 2,
      name: "Alice Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b131?w=40&h=40&fit=crop&crop=face",
      lastMessage: "Hey! How are you doing?",
      timestamp: "2:30 PM",
      unreadCount: 2,
      online: true,
    },
    {
      id: 3,
      name: "Bob Smith",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      lastMessage: "Thanks for the help yesterday",
      timestamp: "1:15 PM",
      unreadCount: 0,
      online: false,
    },
    {
      id: 4,
      name: "Emma Wilson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      lastMessage: "See you tomorrow!",
      timestamp: "Yesterday",
      unreadCount: 1,
      online: true,
    },
    {
      id: 5,
      name: "Team Project",
      avatar: null,
      lastMessage: "John: The deadline is next week",
      timestamp: "Yesterday",
      unreadCount: 0,
      online: false,
      isGroup: true,
    },
  ],
  messages: {
    2: [
      {
        id: 1,
        senderId: 2,
        text: "Hey! How are you doing?",
        timestamp: "2:25 PM",
        status: "delivered",
      },
      {
        id: 2,
        senderId: 2,
        text: "I wanted to catch up with you",
        timestamp: "2:26 PM",
        status: "delivered",
      },
      {
        id: 3,
        senderId: 1,
        text: "I'm doing great! Thanks for asking 😊",
        timestamp: "2:28 PM",
        status: "read",
      },
      {
        id: 4,
        senderId: 1,
        text: "How about you? How's everything going?",
        timestamp: "2:29 PM",
        status: "read",
      },
    ],
    3: [
      {
        id: 5,
        senderId: 3,
        text: "Thanks for the help yesterday",
        timestamp: "1:15 PM",
        status: "delivered",
      },
      {
        id: 6,
        senderId: 1,
        text: "You're welcome! Anytime 👍",
        timestamp: "1:20 PM",
        status: "read",
      },
    ],
    4: [
      {
        id: 7,
        senderId: 4,
        text: "See you tomorrow!",
        timestamp: "Yesterday",
        status: "delivered",
      },
    ],
  },
};

