'use client';

import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import Logo from "../logo";
import { menuItems } from "@/utils/constants";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean | undefined>(false);
  const url = usePathname();

  return (
    <Navbar 
      maxWidth="xl"
      className="backdrop-blur-sm bg-black/50"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden dark:text-white text-black"
        />
        <NavbarBrand>
          <Link href="/" className="flex gap-2 dark:text-white text-black">
            <Logo className="w-[35px]" />
            <div className=" font-normal">Lake Buena Vista</div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-1" justify="end">
        {menuItems.map((item) => (
          <NavbarItem
            key={item.path}
            isActive={ item.path === url }
          >
            <Button
              as={Link} 
              color="default"
              variant={ item.path === url ? 'flat':'light' }
              href={item.path} 
              className="capitalize"
            >
              {item.name}
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            as={Link} 
            href="https://adventistgiving.org/donate/ANTTBV"
            target="_blank" 
            color="warning"
            variant="solid"
          >
            Donación
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem 
            key={item.path}
          >
            <Link 
              href={item.path} 
              className="capitalize w-full"
              size="lg"
              color={ item.path === url ? 'warning':'foreground' }
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
