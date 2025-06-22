// // Navbar.jsx

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import { menuItems } from './siteData';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   return (
//     <div className="fixed top-0 left-0 right-0 z-50 w-full bg-white">
//       <div className="mx-auto container flex w-full items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
//         <Link to="/" className="inline-flex items-center space-x-2 cursor-pointer">
//           <span>
//             <img
//               src="/logo/sign.png"
//               alt="site logo"
//               className="w-30 h-10"
//             />
//           </span>
//         </Link>
//         <div className="hidden lg:block">
//           <ul className="inline-flex space-x-8">
//             {menuItems.map((item) => (
//               <li key={item.name}>
//                 <Link
//                   to={item.href}
//                   className="text-md font-myfont font-semibold text-gray-500 hover:text-gray-900"
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <Link to='/contact' className="hidden lg:block">
//           <button
//             type="button"
//             className="font-myfont rounded-sm border border-black px-4 py-2 text-md font-bold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//           >
//             Contact Me
//           </button>
//         </Link>
//         <div className="lg:hidden">
//           <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
//         </div>
//         {isMenuOpen && (
//           <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
//             <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
//               <div className="px-5 pb-6 pt-5">
//                 <div className="flex items-center justify-between">
//                   <div className="inline-flex items-center space-x-2 pl-2">
//                     <span>
//                       <img
//                         src="/logo/Me.jpg"
//                         alt="site logo"
//                         className="rounded-full w-10 h-10 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
//                       />
//                     </span>
//                   </div>
//                   <div className="-mr-2">
//                     <button
//                       type="button"
//                       onClick={toggleMenu}
//                       className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                     >
//                       <span className="sr-only">Close menu</span>
//                       <X className="h-6 w-6" aria-hidden="true" />
//                     </button>
//                   </div>
//                 </div>
//                 <div className="mt-6">
//                   <nav className="grid gap-y-4">
//                     {menuItems.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
//                       >
//                         <span className="ml-3 text-base font-myfont font-medium text-gray-900">
//                           {item.name}
//                         </span>
//                       </a>
//                     ))}
//                   </nav>
//                 </div>
//                 <Link to='/contact'>
//                   <button
//                     type="button"
//                     className="mt-4 w-full rounded-sm bg-black px-3 py-2 text-sm font-myfont font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                     onClick={toggleMenu}
//                   >
//                     Contact Me
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Navbar;

// Navbar.jsx

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuLeftAlt, CgClose } from "react-icons/cg";
import { menuItems } from './siteData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`shadow-md fixed top-0 left-0 right-0 z-50 w-full bg-white transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="mx-auto container flex w-full items-center justify-between pl-4 pr-6 py-4 xl:px-0">
        <Link to="/" className="inline-flex items-center space-x-2 cursor-pointer">
          <span className="flex items-center">
            <img
              src="/logo/logo.png"
              alt="site logo"
              className="w-20 h-10"
            />
            <span className="text-base font-myfont font-bold text-red-900">Sourav Halder</span>
          </span>
        </Link>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="text-md font-myfont font-semibold text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to='/contact' className="hidden lg:block">
          <button
            type="button"
            className="font-myfont rounded-sm border border-black px-4 py-2 text-md font-bold text-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Contact Me
          </button>
        </Link>
        <div className="lg:hidden">
          <CgMenuLeftAlt onClick={toggleMenu} className="h-6 w-6 cursor-pointer opacity-50" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2 pl-2">
                    <Link to="/" onClick={toggleMenu}>
                      <span>
                        <img
                          src="/logo/Me.jpg"
                          alt="site logo"
                          className="rounded-full w-10 h-10 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                        />
                      </span>
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <CgClose className="h-6 w-6 text-red-500" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-myfont font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <Link to='/contact'>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-sm bg-black px-3 py-2 text-sm font-myfont font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={toggleMenu}
                  >
                    Contact Me
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;