import Image from "next/image";

import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { Nav } from "../Components/Nav";
import { Main } from "../Components/Main";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // axios
    //   .get("http://localhost:3000/mockdata.json")
    //   .then((res) => {
    //     // console.log(res.data);
    //     setData(res.data());
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    fetch("http://localhost:3000/mockdata.json")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <>
      <Nav />
      <Main data={data} />
    </>
  );
}
