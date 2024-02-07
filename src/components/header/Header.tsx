import CTA from "./CTA";
import "./header.css";
import { info } from "../../models/info";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I&apos;m</h5>
        <h1>
          {info.firstName}
          &nbsp;
          {info.lastName}
        </h1>
        <h5
          className="text-light"
          style={{
            fontSize: "1.5rem",
            fontWeight: "lighter",
          }}
        >
          {info.position}
        </h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
