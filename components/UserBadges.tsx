import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import {
  BadgeCheck,
  Candy,
  Citrus,
  Shield,
  type LucideIcon,
} from "lucide-react";

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

const UserBadges = ({ badges }: { badges: string[] }) => (
  <div className="flex gap-4 mt-4">
    {userBadges
      .filter((badge) => badges.includes(badge.id))
      .map((badge) => {
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
              <h3 className="font-bold mb-2">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">
                {badge.description}
              </p>
            </HoverCardContent>
          </HoverCard>
        );
      })}
  </div>
);

export default UserBadges;
