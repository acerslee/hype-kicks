import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return(
    <header className = "bg-teal-500 md:bg-teal-500 lg:bg-teal-500">
      <Link href = "/">
        <Image
          src = "/shoe-logo.png"
          alt = "Shoe Brand"
          width = {100}
          height = {100}
        />
      </Link>
    </header>
  )
};

export default Navbar;