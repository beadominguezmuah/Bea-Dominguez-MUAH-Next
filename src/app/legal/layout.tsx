import { Header } from "@/components";

export default function legalLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Header nav={true} />
    <div className="flex flex-col items-center">
      {children}
    </div></>
  );
}