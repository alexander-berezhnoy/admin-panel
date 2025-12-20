const UserInfoRow = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <div className="flex items-center gap-2">
    <span className="font-bold">{label}:</span>
    <span>{value}</span>
  </div>
);
export default UserInfoRow;
