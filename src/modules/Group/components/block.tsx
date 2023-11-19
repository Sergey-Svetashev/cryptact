import { Title } from "@components/title";
import TEXT from "@src/TEXT";
import { IconButton } from "@src/components/iconButton";
import { LayoutTopSpaceBetween } from "@src/components/layouts/layoutTopSpaceBetween";
import { ProgressBar } from "@src/components/progressBar";
import { ReactNode } from "react";

export const Block = ({
  icon,
  title,
  text,
  children,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col rounded-lg p-4 mb-4 bg-white shadow">
      <LayoutTopSpaceBetween
        className="mb-4"
        left={
          <>
            <Title level="h3" title={title} icon={icon} />
            <p className="text-base pt-4">{text}</p>
          </>
        }
        right={
          // TODO: add progress bar & collapse logic
          <div className="flex items-center pt-4 md:pt-0">
            <ProgressBar steps={{ current: 1, total: 2 }} text={TEXT.Step} />
            <IconButton onClick={() => console.log("collapse/expanse")} />
          </div>
        }
      />

      {children}
    </div>
  );
};
