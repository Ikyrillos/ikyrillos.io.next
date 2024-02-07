import { BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const HeaderSocials = () => {
  return <div className="header__socials"></div>;
};

export default HeaderSocials;

export function GetSocialIcon({ label }: { label: string }) {
  switch (label) {
    case "linkedin":
      return <BsLinkedin />;
    case "github":
      return <FaGithub />;
    case "twitter":
      return <FaTwitter />;
    case "facebook":
      return <FaFacebook />;
    case "instagram":
      return <FaInstagram />;
    default:
      return "not found";
  }
}
