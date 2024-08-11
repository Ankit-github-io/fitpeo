"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Button,
  Divider,
} from "@nextui-org/react";
import Rating from "../RatingStar";
import { feedbackData } from "@/data/data";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

const CustomerFeedback = () => {
  const [readMore, setReadMore] = useState<{ [key: number]: boolean }>({});

  const handleReadMoreToggle = (id: number) => {
    setReadMore((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <ScrollShadow
      key={1}
      size={40}
      className="w-full h-[400px] scrollbar-thin scrollbar-thumb-default-500 scrollbar-track-transparent"
    >
      <h2 className="text-default-600 pb-1">{`Customer's Feedback`}</h2>
      <div>
        {feedbackData.map((feedback) => {
          const isReadMore = readMore[feedback.id] || false;
          const shouldShowReadMore = feedback.message.length > 100;

          return (
            <Card key={feedback.id} className="w-full p-2" shadow="none">
              <CardHeader className="justify-between flex-col items-start">
                <div className="flex justify-between items-center gap-5">
                  <Avatar
                    isBordered
                    radius="full"
                    size="sm"
                    src={feedback.avatar}
                  />
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    {feedback.name}
                  </h4>
                </div>
                <Rating
                  initialRating={feedback.rating}
                  totalStars={5}
                  key={feedback.id}
                  size={16}
                  className="my-1 flex gap-1"
                />
              </CardHeader>
              <CardBody className="py-1 text-small text-default-400">
                <p>
                  {isReadMore
                    ? feedback.message
                    : `${feedback.message.slice(0, 100)}...`}
                </p>
                <span className="self-center">
                  {shouldShowReadMore && (
                    <Button
                      size="sm"
                      radius="full"
                      fullWidth={false}
                      variant="ghost"
                      className="mt-1 text-default-500 text-[10px] h-5"
                      onClick={() => handleReadMoreToggle(feedback.id)}
                    >
                      {isReadMore ? "Read Less" : "Read More"}
                    </Button>
                  )}
                </span>
              </CardBody>
              <Divider />
            </Card>
          );
        })}
      </div>
    </ScrollShadow>
  );
};

export default CustomerFeedback;
