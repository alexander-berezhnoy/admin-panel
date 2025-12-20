import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import CardList from "@/components/CardList";
import {
  BadgeCheck,
  Candy,
  Citrus,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";

export type UserBadgeConfig = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  className: string;
};

const userBadges: UserBadgeConfig[] = [
  {
    id: "verified",
    icon: BadgeCheck,
    title: "Verified User",
    description: "This user has been verified by the admin",
    className: "bg-blue-500/30 border border-blue-500/50",
  },
  {
    id: "awarded",
    icon: Candy,
    title: "Awarded",
    description: "This user has been awarded for contributions.",
    className: "bg-yellow-500/30 border border-yellow-500/50",
  },
  {
    id: "popular",
    icon: Citrus,
    title: "Popular",
    description: "This user has been popular in the community",
    className: "bg-orange-500/30 border border-orange-500/50",
  },
  {
    id: "admin",
    icon: Shield,
    title: "Admin",
    description:
      "Admin users have access to all features and can manage users.",
    className: "bg-green-800/30 border border-green-800/50",
  },
];

const SingleUserPage = () => {
  return (
    <div className="">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-4 flex flex-col xl:flex-row gap-8 ">
        <div className="w-full xl:w-1/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="font-semibold text-xl">User Badges</h1>
            <div className="flex gap-4 mt-4">
              {userBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <HoverCard key={badge.id}>
                    <HoverCardTrigger>
                      <Icon
                        size={36}
                        className={cn("rounded-full p-2", badge.className)}
                      />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <h1 className="font-bold mb-2">{badge.title}</h1>
                      <p className="text-sm text-muted-foreground">
                        {badge.description}
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                );
              })}
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between gap-4">
              <h1 className="font-semibold text-xl">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={66} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span className="">john.doe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span className="">john.doe@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone:</span>
                <span className="">+123 45 67</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location:</span>
                <span className="">Dnipro, Ukraine</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role: </span>
                <Badge>Admin</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Joined on 01.01.2025
            </p>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Latest transactions" />
          </div>
        </div>
        <div className="w-full xl:w-2/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg">
            user card container
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            chart container
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
