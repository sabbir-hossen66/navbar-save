import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";


const Home = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Header></Header>
    </div>
  );
};

export default Home;