import { Title } from "@components/title";
import { Gear, ListChecks, UserCircleGear } from "@phosphor-icons/react";
import { LayoutTopSpaceBetween } from "@src/components/layouts/layoutTopSpaceBetween";
import { TransactionProvider } from "@src/context/TransactionContext";
import { Group } from "@src/modules/Group/Group";
import { Sidebar } from "@src/modules/Sidebar/sidebar";
import TEXT from "@src/TEXT";
import { Noto_Sans_JP } from "next/font/google";

const inter = Noto_Sans_JP({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex max-w-7xl min-h-screen flex-col px-6 py-16 mx-auto ${inter.className}`}
    >
      <Title
        className="text-4/5xl leading-10/1 mb-8"
        title={TEXT["Let's start calculating with Cryptact"]}
      />

      <TransactionProvider>
        <LayoutTopSpaceBetween
          left={
            <>
              <Group
                icon={
                  <UserCircleGear size={26} color="#4299E1" weight="duotone" />
                }
                content={TEXT.transaction}
              />
              <Group
                icon={<Gear size={26} color="#4299E1" weight="duotone" />}
                content={TEXT.additional}
              />
              <Group
                icon={<ListChecks size={26} color="#4299E1" weight="duotone" />}
                content={TEXT.results}
              />
            </>
          }
          right={
            <Sidebar title={TEXT.sidebar.title} items={TEXT.sidebar.items} />
          }
        />
      </TransactionProvider>
    </main>
  );
}
