import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const UserCard = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <Avatar className="size-12">
          <AvatarImage src="https://avatars.githubusercontent.com/u/28560214" />
          <AvatarFallback>OB</AvatarFallback>
        </Avatar>
        <h2 className="text-lg font-semibold">Oleksandr Berezhnyi</h2>
      </div>
      <p className="text-sm text-muted-foreground">
        Bacon ipsum dolor amet pig ribeye spare ribs jerky shankle. Chicken pig
        porchetta, pancetta drumstick strip steak frankfurter picanha meatloaf
        kevin turducken landjaeger tail. Drumstick shankle pork loin, salami
        hamburger frankfurter biltong porchetta tenderloin chicken sirloin pork
        chop pastrami. Biltong beef ribs sirloin jerky bresaola short loin ball
        tip.
      </p>
    </>
  );
};

export default UserCard;
