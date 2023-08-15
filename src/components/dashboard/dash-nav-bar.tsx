'use client';

import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarItem, Button} from "@nextui-org/react";
import Logo from "../logo";
import { usePathname } from "next/navigation";
import { dashboarItems } from "@/utils/constants";
import { UserButton } from "@clerk/nextjs";

export default function DashNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean | undefined>(false);
  const url = usePathname();

  return (
    <Navbar 
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden dark:text-white text-black"
        />
        <NavbarBrand>
          <Link href="/dashboard" className="flex gap-2 dark:text-white text-black">
            <Logo className="w-[35px]" />
            <div className=" font-normal">Lake Buena Vista</div>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-1" justify="end">
        {dashboarItems.map((item) => (
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
          <UserButton afterSignOutUrl="/"/>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {dashboarItems.map((item) => (
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
