import { cn } from "@/lib/utils";
const SectionCard = ({
  title,
  action,
  children,
  className,
}: {
  title?: string;
  action?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) => (
  <div className={cn("primary-foreground p-4 rounded-lg", className)}>
    {(title || action) && (
      <div className="flex items-center justify-between mb-4">
        {title && <h2 className="font-semibold text-xl">{title}</h2>}
        {action}
      </div>
    )}
    {children}
  </div>
);
export default SectionCard;
