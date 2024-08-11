import { title } from "@/components/primitives";

import OrderCard from "@/components/order/orderCard";
import Activity from "@/components/order/activity";
import RecentOrder from "@/components/order/recentOrder";
import NetProfit from "@/components/order/netProfit";
import Info from "@/components/order/info";
import CustomerFeedback from "@/components/order/customerFedback";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <h1 className={title({ size: "sm", className: "text-default-50" })}>
          Dasboard
        </h1>
      </div>
      <section className="grid grid-cols-5 gap-4 md:py-4">
        <div className="sm:col-span-full md:col-span-3 rounded grid grid-cols-4 gap-4">
          <OrderCard />
        </div>
        <div className="sm:col-span-full md:col-span-2 bg-default-50 rounded p-4">
          <NetProfit />
        </div>
        <div className="sm:col-span-full md:col-span-3 bg-default-50 rounded p-4">
          <Activity />
        </div>
        <div className="sm:col-span-full md:col-span-2 bg-default-50 rounded p-4">
          <Info />
        </div>
        <div className="sm:col-span-full md:col-span-3 bg-default-50 rounded p-4">
          <RecentOrder />
        </div>
        <div className="sm:col-span-full md:col-span-2 bg-default-50 rounded p-4">
          <CustomerFeedback />
        </div>
      </section>
    </>
  );
}
