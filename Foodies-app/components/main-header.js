import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
const mainHeader = () => {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="A plate with food on it" />
        NextLevel Food
      </Link>
      <nav>
        <ul>
          <li><Link href="/meals">Browse Meals</Link></li>
          <li><Link href="/community">Foodies Community</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default mainHeader;
