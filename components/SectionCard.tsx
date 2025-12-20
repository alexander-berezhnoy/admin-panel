const SectionCard = ({
  title,
  action,
  children,
}: {
  title?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="bg-primary-foreground p-4 rounded-lg">
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
