import CTA from "./CTA";
import "./header.css";
import { info } from "../../models/info";

const Header = () => {
  return (
    <header id="home" className="flex justify-center w-full">
      <div className=" bg-black bg-opacity-30 rounded-lg lg:w-1/2 sm:w-1/1 h-auto p-4 ">
        <h5>Hello I&apos;m</h5>
        <h1 className="flex justify-center">
          {info.firstName}&nbsp;{info.lastName}
        </h1>
        <h5 className="text-xl text">{info.position}</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
