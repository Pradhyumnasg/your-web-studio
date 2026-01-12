interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const StatCard = ({ value, label, icon }: StatCardProps) => {
  return (
    <div className="card-elevated flex flex-col items-center justify-center rounded-xl bg-card p-6 text-center">
      {icon && <div className="mb-3 text-secondary">{icon}</div>}
      <span className="font-serif text-3xl font-bold text-primary md:text-4xl">
        {value}
      </span>
      <span className="mt-1 text-sm text-muted-foreground">{label}</span>
    </div>
  );
};

export default StatCard;
