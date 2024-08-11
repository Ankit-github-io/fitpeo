"use client";
import React, { useState } from "react";
import ChartComponent from "../Chart";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { IconBxsDownArrow } from "../icons";
import { activityData } from "@/data/activityData";

type TimePeriod = "daily" | "weekly" | "monthly";

const Activity: React.FC = () => {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("weekly");

  const handleSectionChange = (key: React.Key) => {
    if (typeof key === "string" && key in activityData) {
      setTimePeriod(key as TimePeriod);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-default-500 mb-2">Activity</h2>
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="faded"
              radius="full"
              className="capitalize text-default-500"
              endContent={<IconBxsDownArrow size={12} />}
            >
              {timePeriod}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Select Time Period"
            onAction={(key) => handleSectionChange(key)}
          >
            <DropdownItem key="daily">Daily</DropdownItem>
            <DropdownItem key="weekly">Weekly</DropdownItem>
            <DropdownItem key="monthly">Monthly</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <ChartComponent data={activityData[timePeriod]} />
    </>
  );
};

export default Activity;
