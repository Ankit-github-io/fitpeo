"use client";
import React from "react";
import { subtitle } from "../primitives";
import {
  Chip,
  ChipProps,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from "@nextui-org/react";

import { users, columns } from "@/data/recentOrderData";

const statusColorMap: Record<string, ChipProps["color"]> = {
  delivered: "success",
  cancelled: "danger",
};
type User = (typeof users)[number];

const RecentOrder: React.FC = () => {
  const renderCell = React.useCallback((user: User, columnKey: string) => {
    const cellValue = user[columnKey as keyof User];
    switch (columnKey) {
      case "customer":
        return (
          <User
            name={user.name}
            className="text-xs text-default-500"
            avatarProps={{ radius: "full", src: user.avatar }}
          />
        );
      case "ordernumber":
        return (
          <div>
            <p className="text-xs text-default-500">{user.orderNumber}</p>
          </div>
        );
      case "amount":
        return <p className="text-xs text-default-500">{cellValue}</p>;
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="overflow-y-auto scrollbar-thin ">
      <h2 className="text-default-600 py-2">Recent Order</h2>
      <Table
        selectionMode="single"
        color="primary"
        radius="none"
        shadow="none"
        layout="fixed"
        isCompact
        aria-label="Recent Order"
        removeWrapper
      >
        <TableHeader className="border-b-divider border-b">
          {columns.map((column, i) => (
            <TableColumn key={i}>{column.name}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="border-b-divider border-b">
              {columns.map((column) => (
                <TableCell key={column.uid}>
                  {renderCell(user, column.uid)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentOrder;
