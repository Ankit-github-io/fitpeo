"use client";
import React from "react";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import {
  IconBxsFoodMenu,
  IconFood,
  IconFoodTurkey,
  IconTarget,
} from "../icons";
interface AccordionItemData {
  ariaLabel: string;
  title: string;
  startContent: React.ReactNode;
  defaultContent: string;
}

const Info: React.FC = () => {
  const accordion: AccordionItemData[] = [
    {
      ariaLabel: "accordion",
      title: "Goals",
      startContent: (
        <span className="bg-opacity-45 bg-red-600 h-10 w-10 rounded-full justify-center items-center inline-flex my-1  text-default-500">
          <IconTarget />
        </span>
      ),
      defaultContent:
        "gvfvhjer fuhbbyerf ehfbyuf eefhwyuhf wefuhbwyufb3r ewfubwfhyub wefuybweyf qwebyweufb",
    },
    {
      ariaLabel: "accordion",
      title: "Popular Dishes",
      startContent: (
        <span className="bg-opacity-45 bg-indigo-600 h-10 w-10 rounded-full inline-flex justify-center items-center my-1 text-default-500">
          <IconFood />
        </span>
      ),
      defaultContent:
        "gvfvhjer fuhbbyerf ehfbyuf eefhwyuhf wefubwfhyub wefuybweyf qwebyweufb",
    },
    {
      ariaLabel: "accordion",
      title: "Food",
      startContent: (
        <span className="bg-opacity-45 bg-orange-600 h-10 w-10 inline-flex rounded-full justify-center items-center my-1  text-default-500">
          <IconFoodTurkey />
        </span>
      ),
      defaultContent:
        "gvfvhjer fuhbbyerf ehfbyuf eefhwyuhf wefubwfhyub wefuybweyf qwebyweufb",
    },
    {
      ariaLabel: "accordion",
      title: "Menus",
      startContent: (
        <span className="bg-opacity-45 bg-blue-600 h-10 w-10 inline-flex rounded-full justify-center items-center my-1  text-default-500">
          <IconBxsFoodMenu />
        </span>
      ),
      defaultContent:
        "gvfvhjer fuhbbyerf ehfbyuf eefhwyuhf wefubwfhyub wefuybweyf qwebyweufb",
    },
  ];

  return (
    <Accordion variant="light">
      {accordion.map((item, i) => (
        <AccordionItem
          key={i}
          aria-label={item.ariaLabel}
          title={item.title}
          startContent={item.startContent}
          className="text-default-500"
        >
          {item.defaultContent}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Info;
