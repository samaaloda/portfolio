import { Fraunces, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Sama Al-Oda",
  description:
    "Software & biomedical engineering student building ML systems across infrastructure, health, and on-device intelligence.",
};

const themeScript = `
  (function () {
    var stored = localStorage.getItem("theme");
    var theme = stored || "dark";
    if (theme === "dark") document.documentElement.classList.add("dark");
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="ambient-bg min-h-screen text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
