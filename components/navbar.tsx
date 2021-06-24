import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

const Navbar = () => {

  const router = useRouter();

  const [brands, setBrands] = useState<(string|number)[]>([])

  useEffect(() => {
    axios.get('/api/brands')
      .then(({data}) => {
        console.log(data.results)
        setBrands(data.results)
      })
      .catch(err => console.error(err))
  }, [])

  const handleBrandRoute = (brand: any) => {

    let lowercaseBrand = brand.toLowerCase()

    router.push({
      pathname: '/brand',
      query: { brand: lowercaseBrand }
    })
  };

  return(
    <nav className="relative bg-white border-b-2 border-gray-300 text-gray-900">
      <div className="container mx-auto flex  justify-between">
        <a href = "/">
          <Image
            src = "/shoe-logo.png"
            alt = "Shoe Brand"
            width = {100}
            height = {100}
          />
        </a>
        <ul className = "flex">
          <li className = "toggleable hover:bg-green-900 hover:text-white">
            <input type="checkbox" value="selected" id="toggle-one" className="toggle-input" />
              <label htmlFor="toggle-one" className="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold">Brands</label>
              <div role="toggle" className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-green-900">
                <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    {brands.map((brand: (string|number), index: number) => {
                      while (index < 7){
                        return(
                          <li key = {index}>
                            <p
                              className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white"
                              onClick = {() => handleBrandRoute(brand)}
                            >
                              {brand}
                            </p>
                          </li>
                        )
                      }
                    })}
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    {brands.map((brand: (string|number), index: number) => {
                      if (index >= 7 && index < 14 ){
                        return(
                          <li key = {index}>
                            <p
                              className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white"
                              onClick = {() => handleBrandRoute(brand)}
                            >
                              {brand}
                            </p>
                          </li>
                        )
                      }
                    })}
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    {brands.map((brand: (string|number), index: number) => {
                      if (index >= 14 && index < 21 ){
                        return(
                          <li key = {index}>
                            <p
                              className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white"
                              onClick = {() => handleBrandRoute(brand)}
                            >
                              {brand}
                            </p>
                          </li>
                        )
                      }
                    })}
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    {brands.map((brand: (string|number), index: number) => {
                      if (index >= 21 && index < 29 ){
                        return(
                          <li key = {index}>
                            <p
                              className="block p-3 hover:bg-blue-600 text-gray-300 hover:text-white"
                              onClick = {() => handleBrandRoute(brand)}
                            >
                              {brand}
                            </p>
                          </li>
                        )
                      }
                    })}
                  </ul>
                </div>
              </div>
          </li>
          <Link href = '/about'>
            <li className = "relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold hover:bg-green-900 hover:text-white">About</li>
          </Link>
          <li className = "relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold hover:bg-green-900 hover:text-white">Login</li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;