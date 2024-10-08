import Form from "./form";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head />
      <body>
        <Form />
        {children}
      </body>
    </html>
  );
}
