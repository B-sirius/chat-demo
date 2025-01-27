import { useEffect, useRef } from "react";

const ChatBubble = ({
  from,
  message,
}: {
  from: "user" | "bot";
  message: string;
}) => {
  return (
    <div
      className={`flex ${
        from === "user" ? "justify-end" : "justify-start"
      } mb-[20px]`}
    >
      <div
        className={`p-[10px] rounded-lg ${
          from === "user" ? "bg-gray-700" : ""
        }`}
      >
        {message}
      </div>
    </div>
  );
};

const ChatPage: React.FC = () => {
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="h-full flex flex-col pb-[50px]">
      {/* Chats */}
      <div className="overflow-scroll grow px-[80px] pt-[50px]">
        {/* display user input and chatgpt response */}
        <ChatBubble from="user" message="Can I ask you something" />
        <ChatBubble from="bot" message="Of course! what do you wnat to know?" />
        <ChatBubble
          from="user"
          message="What is the most famous IP in the world?"
        />
        <ChatBubble
          from="bot"
          message="Pokémon is often cited as the most successful and globally recognizable IP based on its multi-faceted success and revenue. Other franchises like Marvel, Mario, and Star Wars dominate in specific categories and regions."
        />
        <ChatBubble from="user" message="Can I ask you something" />
        <ChatBubble from="bot" message="Of course! what do you wnat to know?" />
        <ChatBubble
          from="user"
          message="What is the most famous IP in the world?"
        />
        <ChatBubble
          from="bot"
          message="Pokémon is often cited as the most successful and globally recognizable IP based on its multi-faceted success and revenue. Other franchises like Marvel, Mario, and Star Wars dominate in specific categories and regions."
        />
        <ChatBubble from="user" message="Can I ask you something" />
        <ChatBubble from="bot" message="Of course! what do you wnat to know?" />
        <ChatBubble
          from="user"
          message="What is the most famous IP in the world?"
        />
        <ChatBubble
          from="bot"
          message="Pokémon is often cited as the most successful and globally recognizable IP based on its multi-faceted success and revenue. Other franchises like Marvel, Mario, and Star Wars dominate in specific categories and regions."
        />
        <ChatBubble from="user" message="Can I ask you something" />
        <ChatBubble from="bot" message="Of course! what do you wnat to know?" />
        <ChatBubble
          from="user"
          message="What is the most famous IP in the world?"
        />
        <ChatBubble
          from="bot"
          message="Pokémon is often cited as the most successful and globally recognizable IP based on its multi-faceted success and revenue. Other franchises like Marvel, Mario, and Star Wars dominate in specific categories and regions."
        />
        <div ref={chatEndRef} />
      </div>
      {/* Input */}
      <div className="relative shrink-0 h-[50px] mx-[80px] px-[15px] flex items-center rounded-[20px] bg-gray-800">
        {/* Fadeout Layer above input */}
        <div className="absolute left-0 h-[40px] w-full top-[-40px] bg-gradient-to-t from-black" />
        {/* Attachment button */}
        <div className="shrink-0 flex items-center justify-center w-[35px] h-[35px] bg-gray-600 rounded-full">
          <img
            src="/attachment.png"
            alt="attachment"
            className="w-[20px] h-[20px]"
          />
        </div>
        {/* Input box */}
        <input
          className="bg-transparent outline-none grow px-[10px]"
          placeholder="Ask anything"
        />
        {/* Send message button */}
        <div className="shrink-0 flex items-center justify-center w-[35px] h-[35px] mr-[10px] bg-gray-500 rounded-full cursor-pointer">
          <img
            src="/arrow.png"
            alt="send message"
            className="w-[15px] h-[15px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
