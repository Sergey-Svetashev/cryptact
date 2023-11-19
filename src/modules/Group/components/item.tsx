import { Title } from "@components/title";
import { CheckCircle, CircleDashed, Info } from "@phosphor-icons/react";
import TEXT from "@src/TEXT";
import { Button } from "@src/components/button";
import { LayoutTopSpaceBetween } from "@src/components/layouts/layoutTopSpaceBetween";
import { StepStatus } from "@src/context/TransactionContext";
import { ReactNode } from "react";

export type ItemType = {
  id: string;
  title: string;
  text: string;
  content?: ReactNode;
  info?: string;
};

export const Item = ({
  id,
  status,
  title,
  text,
  onClick,
  content,
  info,
}: { status?: StepStatus; onClick: (id: string) => void } & ItemType) => {
  return (
    <div
      className={`flex flex-col p-4 mt-4 border border-solid border-iron rounded-lg ${status}`}
    >
      <Title
        title={title}
        icon={
          status === "active" ? (
            <CheckCircle size={24} color="#38C97C" weight="fill" />
          ) : (
            <CircleDashed size={24} />
          )
        }
        level="h4"
        className="mb-2"
      ></Title>
      <LayoutTopSpaceBetween
        className="pl-8"
        left={
          <div className="max-w-3xl pr-4">
            {content && (
              <span className="inline-block text-xs leading-4/5 py-1 px-1 mb-2 rounded text-fun-blue bg-selago">
                {content}
              </span>
            )}
            <p className="text-sm">{text}</p>
            {info && (
              <span className="text-xs">
                <Info color="#276EF1" size={13} className="inline-block" />
                {info}
              </span>
            )}
          </div>
        }
        right={<Button text={TEXT.Select} onClick={() => onClick(id)} />}
      />
    </div>
  );
};
