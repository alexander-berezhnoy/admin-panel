import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import React from "react";
import UserInfoRow from "@/components/UserInfoRow";
import type { User } from "@/app/users/[username]/page";

type UserInformationProps = {
  user: User;
};
const UserInformation = ({ user }: UserInformationProps) => {
  return (
    <div className="space-y-4 mt-4">
      <div className="flex flex-col gap-2 mb-8">
        <p className="text-sm text-muted-foreground">Profile completion</p>
        <Progress value={user.profileCompletion} />
      </div>
      <UserInfoRow label="Username" value={user.username} />
      <UserInfoRow label="Email" value={user.email} />
      <UserInfoRow label="Phone" value={user.phone} />
      <UserInfoRow label="Location" value={user.location} />
      <UserInfoRow label="Role" value={<Badge>{user.role}</Badge>} />
      <p className="text-sm text-muted-foreground mt-4">
        Joined on {user.joinedAt}
      </p>
    </div>
  );
};

export default UserInformation;
