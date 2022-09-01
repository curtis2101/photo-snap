import { useState, useEffect } from "react";
import Logo from '../assets/shared/desktop/logo.svg'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
 
export default function Header() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className=" flex flex-col gap-2 lg:mb-0 lg:mt-0 md:flex-row md:items-center md:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center font-bold text-xs sm:mt-8 md:mt-0">
          STORIES
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex font-bold text-xs items-center">
          FEATURES
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex font-bold text-xs items-center">
          PRICING
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="mx-auto max-w-screen-3xl py-2 px-4 md:px-8 md:py-4 rounded-none shadow-none">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <img src={Logo} alt='logo' className='h-3 md:h-4 lg:ml-20'/>
        </Typography>
        <div className="hidden md:block">{navList}</div>
        <Button variant="" color='brown' size="md" className="rounded-none w-40 hidden lg:mr-20 md:inline-block">
          <span className="md:font-bold md:text-xs">GET AN INVITE</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav} className='flex flex-col items-center'>
        {navList}
        <hr className='w-5/6 pb-5'></hr>
        <div className="divide-y divide-solid divide-black w-full flex justify-center">
        <Button variant="" color="brown" size="sm" fullWidth className=" rounded-none w-5/6 mb-4">
          <span>GET AN INVITE</span>
        </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}