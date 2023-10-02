import React, { useState } from "react";
import { SiteConfig } from "@/config/site";
import { NavbarItem } from "@nextui-org/navbar";
import {
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import NextLink from "next/link";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import { ChevronDown } from "./icons";
import "@/styles/globalComponent.css";

type DropdownItemData = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  dropdownItems: DropdownItemData[];
};

const NavbarDropdown = ({ siteConfig }: { siteConfig: SiteConfig }) => {
  return (
    <>
      {siteConfig.navItems.map((item, index) => {
        if (item.dropdownItems) {
          return (
            <DropdownList
              dropdownItems={item.dropdownItems}
              label={item.label}
              key={`${item}-${index}`}
            />
          );
        } else {
          return (
            <NavbarItem
              key={item.href}
              className={clsx(
                linkStyles({ color: "foreground", size: "lg" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
            >
              <NextLink href={item.href}>{item.label}</NextLink>
            </NavbarItem>
          );
        }
      })}
    </>
  );
};

const DropdownList = ({
  dropdownItems,
  label,
}: {
  dropdownItems: DropdownItemData[];
  label: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const ChevronArrow = ({ isOpen }: { isOpen: boolean }) => {
    return (
      <div>
        {!isOpen ? (
          <ChevronDown />
        ) : (
          <div style={{ transform: `rotate(90deg)` }}>
            <ChevronDown />
          </div>
        )}
      </div>
    );
  };

  return (
    <Dropdown
      showArrow={true}
      classNames={{
        arrow: "bg-default-200",
      }}
    >
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className="p-0 bg-transparent data-[hover=true]:bg-transparent text-lg"
            radius="none"
            variant="light"
            endContent={<ChevronDown isOpen={isOpen} />}
          >
            {label}
          </Button>
        </DropdownTrigger>
      </NavbarItem>

      <DropdownMenu
        aria-label={`Dropdown menu for ${label}`}
        className="h-unit-7xl overflow-auto custom-scrollbar"
        itemClasses={{ base: "gap-4" }}
      >
        {dropdownItems.map((item, index) => (
          <DropdownItem key={`${item}-${index}`} description="">
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground", size: "lg" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              href={item.href}
            >
              {item.label}
            </NextLink>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarDropdown;
