import Image from 'next/image';

const Navbar = () => {
  return(
    <header className = "bg-teal-500 md:bg-teal-500 lg:bg-teal-500">
      <Image
        src = "/nba-logo-transparent.png"
        alt = "NBA Logo"
        width = {70}
        height = {70}
      />
    </header>
  )
};

export default Navbar;