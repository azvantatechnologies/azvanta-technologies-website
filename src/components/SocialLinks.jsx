import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import PropTypes from "prop-types";

const socialLinks = [
  {
    name: "LinkedIn",
    // TODO: replace with actual LinkedIn profile URL
    href: "https://www.linkedin.com/in/azvantatechnologies/",
    icon: FaLinkedinIn,
    hoverClass: "hover:border-[#0A66C2] hover:bg-[#0A66C2]",
  },
  {
    name: "Instagram",
    // TODO: replace with actual Instagram profile URL
    href: "https://www.instagram.com/azvantatechnologies/",
    icon: FaInstagram,
    hoverClass: "hover:border-[#E4405F] hover:bg-[#E4405F]",
  },
  {
    name: "Facebook",
    // TODO: replace with actual Facebook page URL
    href: "https://www.facebook.com/profile.php?id=61592101902827",
    icon: FaFacebookF,
    hoverClass: "hover:border-[#1877F2] hover:bg-[#1877F2]",
  },
  {
    name: "YouTube",
    // TODO: replace with actual YouTube channel URL
    href: "https://www.youtube.com/channel/UCGeMW61F_EMIXbWebvXJTfw",
    icon: FaYoutube,
    hoverClass: "hover:border-[#FF0000] hover:bg-[#FF0000]",
  },
  {
    name: "TikTok",
    // TODO: replace with actual TikTok profile URL
    href: "https://www.tiktok.com/@azvanta.technologies",
    icon: FaTiktok,
    hoverClass: "hover:border-slate-950 hover:bg-slate-950",
  },
];

// Renders accessible social links with recognizable containers and hover tooltips.
function SocialLinks({ theme = "light", size = "default" }) {
  const isDark = theme === "dark";
  const sizeClass = size === "small" ? "size-10" : "size-12";

  const handlePlaceholderClick = (event, href) => {
    if (href === "#") event.preventDefault();
  };

  return (
    <div className="flex flex-wrap gap-3" aria-label="Azvanta social media links">
      {socialLinks.map(({ name, href, icon: Icon, hoverClass }) => (
        <a
          key={name}
          href={href}
          onClick={(event) => handlePlaceholderClick(event, href)}
          target={href === "#" ? undefined : "_blank"}
          rel={href === "#" ? undefined : "noreferrer"}
          aria-label={name}
          className={[
            "focus-ring group relative grid place-items-center rounded-full border",
            sizeClass,
            isDark
              ? "border-white/15 bg-white/5 text-white"
              : "border-slate-200 bg-white text-slate-700",
            "shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:text-white",
            hoverClass,
          ].join(" ")}
        >
          <Icon size={size === "small" ? 16 : 19} aria-hidden="true" />
          <span
            className={[
              "pointer-events-none absolute bottom-[calc(100%+0.55rem)] left-1/2 z-20",
              "-translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg px-2.5 py-1.5",
              "bg-slate-950 text-[11px] font-bold text-white shadow-lg",
              "opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100",
              "group-focus-visible:translate-y-0 group-focus-visible:opacity-100",
            ].join(" ")}
            role="tooltip"
          >
            {name}
          </span>
        </a>
      ))}
    </div>
  );
}

SocialLinks.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]),
  size: PropTypes.oneOf(["default", "small"]),
};

export default SocialLinks;
