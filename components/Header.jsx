import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";


export async function Header({ data }) {
  const { logoText, loginButton, ctaButton, searchButton, accountButton, cartButton } = data;
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white shadow-md dark:bg-gray-800">
      <Logo text={logoText.text}/>
      <div className="flex items-center gap-4">
        <Link href={loginButton.url}><Button>{loginButton.text}</Button></Link>
        <Link href={ctaButton.url}><Button>{ctaButton.text}</Button></Link>
        <Link href={searchButton.url}><Button>{searchButton.text}</Button></Link>
        <Link href={accountButton.url}><Button>{accountButton.text}</Button></Link>
        <Link href={cartButton.url}><Button>{cartButton.text}</Button></Link>
      </div>
    </div>
  );
}