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
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center sm:mt-8 md:mt-0">
          STORIES
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          FEATURES
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          PRICING
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="mx-auto max-w-screen-3xl py-2 px-4 lg:px-8 lg:py-4 rounded-none shadow-none">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <img src={Logo} alt='logo' className='h-3 md:h-5 lg:ml-20'/>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button variant="" color='brown' size="md" className="rounded-none w-40 hidden lg:mr-20 lg:inline-block">
          <span>GET AN INVITE</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
        <div className="divide-y divide-solid divide-black w-full flex justify-center">
        <Button variant="" color="brown" size="sm" fullWidth className=" rounded-none w-5/6 mb-4">
          <span>GET AN INVITE</span>
        </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}