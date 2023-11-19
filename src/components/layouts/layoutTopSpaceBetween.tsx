import { ReactNode } from "react";

export const LayoutTopSpaceBetween = ({
  left,
  right,
  className,
  children,
}: {
  left: ReactNode;
  right: ReactNode;
  className?: string;
  children?: ReactNode;
}) => (
  <div className={`block md:flex items-start justify-between ${className}`}>
    <div className="basis-full max-w-5xl">{left}</div>
    {children}
    <div className="shrink-0">{right}</div>
  </div>
);
