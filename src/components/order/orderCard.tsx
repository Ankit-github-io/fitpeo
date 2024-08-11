import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import {
  IconBxsUpArrow,
  IconBxsDownArrow,
  IconBox,
  IconBagXFill,
  IconSackDollar,
  IconBagCheckSharp,
} from "@/components/icons";
import React from "react";

type CardItem = {
  customClass: string;
  name: string;
  icon: React.ReactNode;
  growthIndicator: "increased" | "decreased";
  value: string;
};

const OrderCard: React.FC = () => {
  const cardItems: CardItem[] = [
    {
      customClass: "bg-indigo-600",
      name: "Total Order",
      icon: <IconBox size={26} />,
      growthIndicator: "increased",
      value: "05",
    },
    {
      customClass: "bg-green-600",
      name: "Total Delivered",
      icon: <IconBagCheckSharp size={26} />,
      growthIndicator: "decreased",
      value: "05",
    },
    {
      customClass: "bg-red-600",
      name: "Total Cancelled",
      icon: <IconBagXFill size={26} />,
      growthIndicator: "increased",
      value: "05",
    },
    {
      customClass: "bg-pink-600",
      name: "Total Revenue",
      icon: <IconSackDollar size={26} />,
      growthIndicator: "decreased",
      value: "$05K",
    },
  ];

  return (
    <>
      {cardItems.map((item, index) => (
        <Card className="p-4 gap-1" key={index}>
          <CardHeader>
            <Button
              isIconOnly
              className={`${item.customClass} bg-opacity-45 text-default-500`}
            >
              {item.icon}
            </Button>
          </CardHeader>
          <CardBody>
            <p className="text-tiny text-default-500">{item.name}</p>
          </CardBody>
          <CardFooter className="flex justify-between items-center">
            <p className="text-3xl font-bold inline-block text-default-600">
              {item.value}
            </p>
            <p className="inline-flex items-center text-xs">
              {item.growthIndicator === "increased" ? (
                <IconBxsUpArrow className="mr-1 text-green-600" />
              ) : (
                <IconBxsDownArrow className="mr-1 text-red-600" />
              )}
              <span
                className={`${
                  item.growthIndicator === "increased"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                3%
              </span>
            </p>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default OrderCard;
