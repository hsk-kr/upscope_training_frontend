import { Outlet } from "react-router";
import Header from "./Header";

const Template = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Template;
