import Link from "next/link";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <header className="header absolute left-0 right-0 top-0 z-50 h-32 sm:h-36 md:h-40 lg:h-48 px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto,auto] items-center gap-6 md:grid-cols-3">
        <Link href="/" className="justify-self-start">
          <Logo className="text-brand-purple h-12 sm:h-14 md:h-16 lg:h-20" />
        </Link>
        <nav
          className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1"
          aria-label="Main"
        >
          <ul className="flex flex-wrap items-center justify-center gap-8">
            {settings.data.navigation.map((item) => (
              <li key={item.link.text}>
                <PrismicNextLink
                  field={item.link}
                  className="text-lg md:text-xl hover:text-brand-purple"
                >
                  {item.link.text}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="justify-self-end">
          <ButtonLink href="" icon="cart" color="purple" aria-label="Cart (1)">
            <span className="md:hidden">1</span>
            <span className="hidden md:inline">Cart (1)</span>
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
