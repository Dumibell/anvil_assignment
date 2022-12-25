import * as style from "../Components/Styled";

export const Nav = () => {
  return (
    <style.NavBar>
      <div>이미지</div>
      {NAV_LIST.map((list) => {
        return <style.NavList key={list.id}>{list.name}</style.NavList>;
      })}
      <div>아이콘 들어갈 자리</div>
    </style.NavBar>
  );
};

const NAV_LIST = [
  { id: 1, name: "알라카르테" },
  { id: 2, name: "유라" },
  { id: 3, name: "알라카르테" },
  { id: 4, name: "공지사항" },
  { id: 5, name: "멤버십" },
];
