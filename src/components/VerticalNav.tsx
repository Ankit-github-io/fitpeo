"use client";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import {
  IconBagCheck,
  IconDash,
  IconExit,
  IconFileBarGraph,
  IconHome,
  IconVault,
  IconTask,
} from "./icons";

export default function VerticalNav() {
  const [active, setActive] = useState("home");

  const buttons = [
    { id: "home", icon: <IconHome />, href: "#" },
    { id: "fileBarGraph", icon: <IconFileBarGraph />, href: "#" },
    { id: "task", icon: <IconTask />, href: "#" },
    { id: "vault", icon: <IconVault />, href: "#" },
    { id: "bagCheck", icon: <IconBagCheck />, href: "#" },
  ];

  return (
    <div className="relative sm:w-full sm:h-10 md:w-16 sm:mx-1 md:h-screen ">
      <div className="sm:fixed z-40 sm:top-0 sm:flex-row sm:justify-between sm:w-full sm:h-10 sm:px-4 sm:py-0 md:h-screen sm:left-0 flex md:flex-col md:py-4 md:gap-4 md:w-16 items-center bg-transparent backdrop-blur-lg backdrop-saturate-150">
        <Button
          isIconOnly
          as={Link}
          href="#"
          variant="light"
          className="text-primary-500"
        >
          <IconDash />
        </Button>
        <div className="flex sm:flex-row sm:gap-4 md:flex-col justify-between md:h-full">
          <nav className="flex sm:flex-row sm:flex-shrink-0 md:flex-col flex-nowrap">
            {buttons.map((btn) => (
              <Button
                key={btn.id}
                isIconOnly
                as={Link}
                radius="none"
                href={btn.href}
                variant="light"
                className={`relative w-full md:w-16 text-default-500 ${
                  active === btn.id
                    ? "before:block md:before:-inset-0 sm:before:w-full sm:before:h-1 sm:before:inset-y-9 before:absolute md:before:w-1 md:before:h-full before:rounded-full before:bg-blue-500"
                    : ""
                }`}
                onClick={() => setActive(btn.id)}
              >
                {btn.icon}
              </Button>
            ))}
          </nav>
          <Button
            isIconOnly
            variant="light"
            className="w-full text-default-500"
            radius="none"
          >
            <IconExit />
          </Button>
        </div>
      </div>
    </div>
  );
}
