"use client";

import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { FC } from "react";
import { ProductColumm, columns } from "../[productId]/components/columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiLists } from "@/components/ui/api-lists";

interface ProductsClientProps {
  data: ProductColumm[];
}

const ProductsClient: FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products (${data.length})`}
          description="Manage products for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable
        columns={columns}
        data={data}
        searchKey="name"
        searchColumn="name"
      />
      <Heading title="API" description="API Calls for products" />
      <Separator />
      <ApiLists entityName="products" entityIdName="productsId" />
    </>
  );
};

export default ProductsClient;
