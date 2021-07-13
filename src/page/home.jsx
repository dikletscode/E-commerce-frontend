import React, { useContext } from "react";
import { GlobContext } from "../App";
import { GlobalProduct } from "../components/product/globalproduct";

const Home = () => {
  const { stateAuth, dispatchAuth } = useContext(GlobContext);
  console.log(stateAuth);
  return (
    <main>
      <GlobalProduct />
    </main>
  );
};
export default Home;
