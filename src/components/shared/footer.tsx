import Link from "next/link";
import Image from "next/image";

// const footerLinks = [
//   {
//     title: "Platform",
//     links: [
//       { label: "Courses", href: "/courses" },
//       { label: "Pricing", href: "/pricing" },
//       { label: "Instructors", href: "/instructors" },
//       { label: "Enterprise", href: "/enterprise" },
//     ],
//   },
//   {
//     title: "Resources",
//     links: [
//       { label: "Blog", href: "/blog" },
//       { label: "Community", href: "/community" },
//       { label: "Events", href: "/events" },
//       { label: "Help Center", href: "/help" },
//     ],
//   },
//   {
//     title: "Company",
//     links: [
//       { label: "About Us", href: "/about" },
//       { label: "Careers", href: "/careers" },
//       { label: "Partners", href: "/partners" },
//       { label: "Contact", href: "/contact" },
//     ],
//   },
//   {
//     title: "Legal",
//     links: [
//       { label: "Terms", href: "/terms" },
//       { label: "Privacy", href: "/privacy" },
//       { label: "Cookies", href: "/cookies" },
//       { label: "Licenses", href: "/licenses" },
//     ],
//   },
// ]

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-12 px-16">
      <div className="container flex flex-col md:flex-row justify-between gap-8 ">
        <div className="flex flex-col gap-2 md:gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/tlks-black.png"
              width={180}
              height={50}
              alt="TLS"
              priority
            />
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            Empowering learners with world-class digital courses and skills for
            the future.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/courses"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/instructors"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Instructors
                </Link>
              </li>
              <li>
                <Link
                  href="/enterprise"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/licenses"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Licenses
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-8 border-t pt-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 TLS - The Learning Space. All rights reserved. Lagos,
            Nigeria.
          </p>
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
