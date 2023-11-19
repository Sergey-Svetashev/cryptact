import { ReactNode } from "react";

export const Title = ({
  title,
  icon,
  level = "h1",
  className,
}: {
  title: string;
  icon?: ReactNode;
  level?: "h1" | "h2" | "h3" | "h4" | "h5";
  className?: string;
}) => {
  const CustomTag = level;

  return (
    <div className="flex">
      {icon}
      <CustomTag className={`font-semibold ${icon ? 'pl-2' : ''} ${className}`}>
        {title}
      </CustomTag>
    </div>
  );
};
