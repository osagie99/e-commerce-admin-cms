import { UserButton, auth } from "@clerk/nextjs";
import { FC } from "react";
import { MainNav } from "@/components/MainNav";
import { StoreSwitcher } from "@/components/StoreSwitcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

interface navbarProps {}

const navbar: FC<navbarProps> = async ({}) => {
  const { userId } = auth();
  if(!userId) {
    redirect("/sign-in")
  }

  const store = await prismadb.store.findMany({
    where: {
      userId
    }
  });
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={store} />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default navbar;
