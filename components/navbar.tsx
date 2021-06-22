import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return(
    <header className = "bg-teal-500 md:bg-teal-500 lg:bg-teal-500">
      <Link href = "/">
        <Image
          src = "/nba-logo-transparent.png"
          alt = "NBA Logo"
          width = {70}
          height = {70}
        />
      </Link>
    </header>
  )
};

export default Navbar;