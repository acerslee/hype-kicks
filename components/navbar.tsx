import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AuthContext from '../netlify/authContext';
// import { FaBars } from 'react-icons/fa';

const Navbar = () => {

  const router = useRouter();
  const { user, login, logout, authReady } = useContext(AuthContext);

  //there's an API route, but have to hard-code the brands to avoid API call limitation with current plan
  const brands = ["ASICS", "ALEXANDER MCQUEEN", "BALENCIAGA", "BURBERRY", "CHANEL", "COMMON PROJECTS", "CONVERSE", "CROCS", "DIADORA", "DIOR", "GUCCI", "JORDAN", "LI-NING", "LOUIS VUITTON", "NEW BALANCE", "NIKE", "OFF-WHITE", "OTHER", "PRADA", "PUMA", "REEBOK", "SAINT LAURENT", "SAUCONY", "UNDER ARMOUR", "VANS", "VERSACE", "YEEZY", "ADIDAS"]

  const handleBrandRoute = (brand: string) => {
    let lowercaseBrand = brand.toLowerCase()

    router.push({
      pathname: '/brand',
      query: { brand: lowercaseBrand }
    })
  };

  const renderMenuList = (indexOne: number, indexTwo: number) => {
    let menuList = brands.slice(indexOne, indexTwo);

    return(
      <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
        {menuList.map((brand: string, index: number) => (
          <li
            key = {index}
            role = "toggle"
            className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white cursor-pointer menu-item"
            onClick = {() => handleBrandRoute(brand)}
          >
            {brand}
          </li>
        ))}
      </ul>
    )
  };

  return(
    <header className="relative bg-white border-b-2 border-gray-300 text-gray-900">
      <nav className="container mx-auto flex  justify-between">
        <a href = "/">
          <Image
            src = "/shoe-logo.png"
            alt = "Shoe Brand"
            width = {85}
            height = {85}
          />
        </a>
        {authReady &&
          <ul className = "flex lg: mr-10">
            {/*{user &&
              <li className = "relative block py-6 px-2 lg:p-6 text-sm lg:text-base">
                Hello {user.user_metadata.full_name}
              </li>
            } */}
            <li className = "hoverable hover:bg-green-900 hover:text-white">
              {/* <input type="checkbox" value="selected" id="toggle-one" className="toggle-input" /> */}
                {/* <label htmlFor="toggle-one" className="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">Brands</label> */}
                <a href="#" className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-green-900 hover:text-white">Brands</a>
                <div role="toggle" className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-green-900 z-10">
                  <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                    {renderMenuList(0, 7)}
                    {renderMenuList(7, 14)}
                    {renderMenuList(14, 21)}
                    {renderMenuList(21, 28)}
                  </div>
                </div>
            </li>
            <Link href = '/about'>
              <li className = "relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold hover:bg-green-900 hover:text-white cursor-pointer">About</li>
            </Link>
            {!user
              ? <li className = "relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold hover:bg-green-900 hover:text-white cursor-pointer" onClick = {login}>Login</li>
              :
              <li className = "relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold hover:bg-green-900 hover:text-white cursor-pointer" onClick = {logout}>Logout</li>
            }
          </ul>
        }
      </nav>
    </header>
  )
};

export default Navbar;
