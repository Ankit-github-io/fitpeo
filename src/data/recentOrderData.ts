
export interface ColumnsProps {
  name: string,
  uid: string,
}
export interface UserProps {
  id: number,
  name: string,
  orderNumber: number,
  amount: string,
  status: string,
  avatar:string,  
}
export const columns:ColumnsProps[] = [
    { name: "Customer", uid: "customer" },
    { name: "Order Number", uid: "ordernumber" },
    { name: "Amount", uid: "amount" },
    { name: "Status", uid: "status" },
  ];
export const users = [
    {
      id: 1,
      name: "Tony Reichert",
      orderNumber: "A001",
      amount: "$150.00",
      status: "delivered",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
      id: 2,
      name: "Zoey Lang",
      orderNumber: "B002",
      amount: "$200.00",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
      id: 3,
      name: "Jane Fisher",
      orderNumber: "C003",
      amount: "$120.00",
      status: "delivered",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    },
    {
      id: 4,
      name: "William Howard",
      orderNumber: "D004",
      amount: "$180.00",
      status: "cancelled",
      avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    },
    {
      id: 5,
      name: "Kristen Copper",
      orderNumber: "E005",
      amount: "$210.00",
      status: "delivered",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
  },]
