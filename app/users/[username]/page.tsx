import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import CardList from "@/components/CardList";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import SectionCard from "@/components/SectionCard";
import UserBreadcrumbs from "@/components/UserBreadcrumbs";
import UserBadges from "@/components/UserBadges";
import UserInformation from "@/components/UserInformation";

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  location: string;
  role: "admin" | "user";
  profileCompletion: number;
  joinedAt: string;
  badges: string[];
};

const user: User = {
  id: "1",
  name: "John Doe",
  username: "john.doe",
  email: "john.doe@gmail.com",
  phone: "+123 45 67",
  location: "Dnipro, Ukraine",
  role: "admin",
  profileCompletion: 66,
  joinedAt: "01.01.2025",
  badges: ["verified", "awarded", "popular", "admin"],
};

const SingleUserPage = () => {
  return (
    <div className="">
      <UserBreadcrumbs />
      <div className="mt-4 flex flex-col xl:flex-row gap-8 ">
        <div className="w-full xl:w-1/3 space-y-6">
          <SectionCard title="User Badges">
            <UserBadges badges={user.badges} />
          </SectionCard>
          <SectionCard
            title="User Information"
            action={
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            }
          >
            <UserInformation user={user} />
          </SectionCard>
          <SectionCard>
            <CardList title="Latest transactions" />
          </SectionCard>
        </div>
        <div className="w-full xl:w-2/3 space-y-6">
          <SectionCard>user card container</SectionCard>
          <SectionCard>chart container</SectionCard>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
