import Link from "next/link";

type FooterLink = { label: string; href: string };

const QUICK_LINKS_1: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Cricket", href: "/cricket" },
  { label: "Football", href: "/football" },
  { label: "Basketball", href: "/basketball" },
  { label: "Schedule", href: "/schedule" },
  { label: "Highlights", href: "/highlights" },
  { label: "News", href: "/news" },
];

const QUICK_LINKS_2: FooterLink[] = [
  { label: "Community", href: "/community" },
  { label: "Broadcast Schedule", href: "/schedule" },
  { label: "Featured Event", href: "/events" },
  { label: "Short Video", href: "/shorts" },
  { label: "Present", href: "/present" },
  { label: "Game Show", href: "/games" },
  { label: "Match Schedule", href: "/match-schedule" },
  { label: "Customer Service", href: "/support" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-footer-bg border-t border-footer-border">
      {/* Top content */}
      <div className="px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand block */}
          <div className="relative">
            {/* Logo */}
            <img
              src="/images/footer/8jj.png"
              alt="8jj"
              className="w-19.5 h-19.5 object-contain"
              draggable={false}
            />

            {/* SPORT STREAM */}
            <div className="mt-3 leading-none">
              <div className="text-white text-[27.4px] font-bold font-['Inter'] leading-8">
                SPORT
              </div>
              <div className="text-brand text-[27.4px] font-bold font-['Inter'] leading-8">
                STREAM
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-footer-muted text-[11.9px] font-normal font-['Inter'] leading-5.5 max-w-107.5">
              The ultimate destination for sports fans. Watch live matches, get
              real-time scores, and join the conversation with millions of fans
              worldwide.
            </p>

            {/* Social icons (use your exported SVGs) */}
            <div className="mt-6 flex items-center gap-4">
              {[
                "/images/footer/Frame-6.svg",
                "/images/footer/Frame-5.svg",
                "/images/footer/Frame-3.svg",
                "/images/footer/Frame-4.svg",
              ].map((src) => (
                <a
                  key={src}
                  href="#"
                  aria-label="Social"
                  className="w-8 h-8 rounded-full bg-footer-icon-bg grid place-items-center"
                >
                  <img src={src} alt="" className="w-4 h-4" draggable={false} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-[13.6px] font-bold font-['Inter'] leading-6">
              Quick Links
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2">
              <div className="space-y-2">
                {QUICK_LINKS_1.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block text-footer-muted text-[11.9px] font-normal font-['Inter'] leading-5 hover:text-white transition"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                {QUICK_LINKS_2.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block text-footer-muted text-[11.9px] font-normal font-['Inter'] leading-5 hover:text-white transition"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white text-[13.6px] font-bold font-['Inter'] leading-6">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4">
              {/* Location */}
              <div className="flex items-start gap-3">
                <img
                  src="/images/footer/Frame-2.svg"
                  alt=""
                  className="w-5 h-5 mt-px"
                  draggable={false}
                />
                <p className="text-footer-muted text-[11.9px] font-normal font-['Inter'] leading-5">
                  123 Sports Avenue, Stadium District, NY 10001
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <img
                  src="/images/footer/Frame-1.svg"
                  alt=""
                  className="w-5 h-5 mt-px"
                  draggable={false}
                />
                <p className="text-footer-muted text-[11.9px] font-normal font-['Inter'] leading-5">
                  +1 (555) 123-4567
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <img
                  src="/images/footer/Frame.svg"
                  alt=""
                  className="w-5 h-5 mt-px"
                  draggable={false}
                />
                <p className="text-footer-muted text-[11.9px] font-normal font-['Inter'] leading-5">
                  support@streamsocial.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-footer-border">
        <div className="px-6 py-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-footer-dim text-[11.9px] font-normal font-['Inter'] leading-5">
            © {year} StreamSocial. All rights reserved.
          </div>

          <div className="text-footer-dim text-[11.9px] font-normal font-['Inter'] leading-5">
            English (US)
          </div>
        </div>
      </div>
    </footer>
  );
}
