import React from "react";

const DashBoardButton = ({
  iconPath,
  title,
  onClick,
}: {
  iconPath: string;
  title: string;
  onClick: () => void;
}) => {
  return (
    <div
      className="w-[200px] h-[100px] rounded-lg flex flex-col border justify-center p-[20px] cursor-pointer hover:bg-gray-700 transition duration-300 ease-in-out"
      onClick={onClick}
    >
      <img src={iconPath} alt="chat" className="w-[20px] h-[20px]" />
      {title}
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-full justify-center">
      <div className="flex items-center mb-[80px] opacity-30">
        <img src="/logo.png" alt="logo" className="w-[50px] mr-[10px]" />
        <h1 className="text-5xl font-bold bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-transparent">
          LAMA AI
        </h1>
      </div>
      <div className="flex justify-space-between gap-[40px]">
        <DashBoardButton
          iconPath="/chat.png"
          title="Create a New Chat"
          onClick={() => {}}
        />
        <DashBoardButton
          iconPath="/analyze.png"
          title="Analyze Images"
          onClick={() => {}}
        />
        <DashBoardButton
          iconPath="/code.png"
          title="Help me with my Code"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Dashboard;
