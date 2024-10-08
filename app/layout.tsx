import Link from "next/link";
import Button from "./button";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head />
      <body>
        <nav style={{ display: "flex", gap: "10px" }}>
          <Link href="/">Home</Link>

          {Array.from(Array(10).keys()).map((i) => (
            <Button key={i} id={i} />
          ))}
        </nav>

        {children}
      </body>
    </html>
  );
}
