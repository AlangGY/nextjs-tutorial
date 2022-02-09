import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  return (
    <nav>
      <Image
        src="/vercel.svg"
        width={100}
        height={50}
        layout="fixed"
        alt="logo"
      />
      <div className="nav_links">
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/movies">
          <a className={router.pathname.includes("/movies") ? "active" : ""}>
            Movies
          </a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.6);
          padding-bottom: 10px;
        }
        .nav_links {
          display: flex;
          justify-content: center;
          gap: 5px;
        }
        a {
          font-size: 18px;
        }
        a:hover {
          transform: scale(1.05);
          opacity: 0.7;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
