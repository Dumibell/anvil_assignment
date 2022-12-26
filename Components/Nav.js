import { useState } from "react";
import * as style from "../Components/Styled";

export const Nav = () => {
  const [navList, setNavList] = useState("About");
  return (
    <style.NavBar>
      <style.LogoImage>로고</style.LogoImage>
      {NAV_LIST.map((list) => {
        return (
          <style.NavList
            key={list.id}
            onClick={() => setNavList(list.name)}
            primary={list.name === navList}
          >
            {list.name}
          </style.NavList>
        );
      })}
      <div>아이콘 들어갈 자리</div>
    </style.NavBar>
  );
};

const NAV_LIST = [
  { id: 1, name: "About" },
  { id: 2, name: "유라" },
  { id: 3, name: "알라카르테" },
  { id: 4, name: "공지사항" },
  { id: 5, name: "멤버십" },
];
