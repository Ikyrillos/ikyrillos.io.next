import Link from "next/link";
import { info } from "../../models/info";
import { GetSocialIcon } from "./HeaderSocials";

export default function CTA() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        padding: "1rem",
      }}
    >
      <div
        className="cta"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Link href={info.cv} target="_blank" className="btn">
          Download CV
        </Link>
        <Link href="/contact" className="btn btn-primary">
          Let&apos;s talk
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "2rem",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {info.socials.map((social, index) => (
          <Link
            key={index}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            style={{
              scale: "3",
              marginLeft: "1.5rem",
            }}
          >
            {GetSocialIcon({ label: social.label })}
          </Link>
        ))}
      </div>
    </div>
  );
}
