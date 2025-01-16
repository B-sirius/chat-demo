import { Link } from "react-router";

const SubMenu = ({
  title,
  menuList,
}: {
  title: string;
  menuList: {
    title: string;
    url: string;
  }[];
}) => {
  return (
    <div className="pb-[20px]">
      <div className="text-xs font-bold mb-[10px]">{title}</div>
      <div className="flex flex-col mb-[10px]">
        {menuList.map((menu) => (
          <Link
            key={menu.url}
            to={menu.url}
            className="hover:bg-gray-800 px-[10px] py-[5px] rounded-md"
          >
            {menu.title}
          </Link>
        ))}
      </div>
      <hr className="border-gray-800" />
    </div>
  );
};

const Menu = () => {
  return (
    <div className="px-[50px] py-[20px] w-[300px]">
      <SubMenu
        title="DASHBOARD"
        menuList={[
          { title: "Create a new Chat", url: "/dashboard" },
          { title: "Explore Lama AI", url: "/" },
        ]}
      />
      <SubMenu
        title="RECENT CHATS"
        menuList={[
          { title: "My chat title", url: "/" },
          { title: "My chat title", url: "/" },
          { title: "My chat title", url: "/" },
          { title: "My chat title", url: "/" },
        ]}
      />
    </div>
  );
};

export default Menu;
