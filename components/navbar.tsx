import Image from 'next/image';


const Navbar = () => {
  return(
    <header>
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