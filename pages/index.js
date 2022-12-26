import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as S from "../Components/Styled";
import { useEffect, useState } from "react";
import { Nav } from "../Components/Nav";
import { Main } from "../Components/Main";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);
  const [dropDown, setDropDown] = useState(false);
  useEffect(() => {
    axios
      // .get("http://localhost:4000/stores")
      .get("http://localhost:3000/mockdata.json")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  return (
    <>
      <Nav />
      <Main data={data} dropDown={dropDown} setDropDown={setDropDown} />
    </>
  );
}
