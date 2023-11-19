import { CaretUp } from "@phosphor-icons/react";

export const IconButton = ({
  onClick,
  color = "fill-regent-gray",
  className,
}: {
  onClick: () => void;
  color?: string;
  className?: string;
}) => (
  <button className={`inline-block ${className}`} onClick={onClick}>
    <CaretUp size={16} color="#141032" weight="bold" className={color} />
  </button>
);
