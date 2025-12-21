import { getData } from "@/utils/getPayments";
import { columns } from "@/app/payments/columns";
import { DataTable } from "@/app/payments/data-table";

const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentsPage;
