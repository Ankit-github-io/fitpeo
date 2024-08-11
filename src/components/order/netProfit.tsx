"use client";
import React from "react";
import { subtitle } from "../primitives";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CircularProgress,
} from "@nextui-org/react";
import { IconBxsUpArrow } from "../icons";

const NetProfit = () => {
  return (
    <>
      <Card
        className="gap-1 bg-inherit h-full flex justify-between flex-nowrap"
        radius="none"
        shadow="none"
      >
        <CardBody className="flex flex-row justify-between items-start">
          <div className="flex gap-1 flex-col">
            <h2 className="text-default-600">Net Profit</h2>

            <span className="text-3xl font-bold text-default-600">
              $6795.56K
            </span>
          </div>
          <div>
            <CircularProgress
              size="sm"
              value={70}
              strokeWidth={4}
              showValueLabel={true}
              aria-label="revenu value"
              classNames={{
                svg: "w-20 h-20 drop-shadow-md",
                indicator: "stroke-primary",
                track: "stroke-default",
                value: "text-xl font-semibold text-default-600",
              }}
            />
          </div>
        </CardBody>
        <CardFooter className="flex justify-between items-center">
          <p className="inline-flex items-center text-xs">
            <IconBxsUpArrow className="mr-1 text-green-600" />
            <span className="text-green-600">3%</span>
          </p>
          <p className="text-xs">*The values here has been rounded of</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default NetProfit;
