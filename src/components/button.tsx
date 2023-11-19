import { ArrowRight } from "@phosphor-icons/react";

export const Button = ({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) => (
  <button
    className="flex items-center px-3 py-2 rounded bg-picton-blue text-white font-semibold text-sm"
    onClick={onClick}
  >
    {text}
    {"\n"}
    <ArrowRight size={16} color="#ffffff" weight="bold" className="ml-4" />
  </button>
);
