import SocialLinks from "./SocialLinks";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

// Closes the page with brand details, quick links, social links, and copyright.
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="section-shell py-12 sm:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <a href="#home" className="focus-ring group flex w-fit items-center gap-3 rounded-xl">
            <img src="/brand/Navbar.png" alt="" className="h-11 w-11 object-contain sm:h-12 sm:w-12 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105"/>
            <span>
              <span className="block font-extrabold">Azvanta Technologies</span>
              <span className="block text-xs text-slate-400">Your Digital Growth Partner</span>
            </span>
          </a>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="focus-ring rounded-md text-sm font-semibold text-slate-400 transition-colors hover:text-violet-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks theme="dark" size="small" />
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Azvanta Technologies. All rights reserved.</p>
          <p>Built for clarity, performance, and growth.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
