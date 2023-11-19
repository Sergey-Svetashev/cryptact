import { useTransactionInfo } from "@src/context/TransactionContext";
import { ReactNode } from "react";
import { Block } from "./components/block";
import { Item, ItemType } from "./components/item";

type GroupType = {
  icon: ReactNode;
  content: {
    title: string;
    text: string;
    items?: Array<ItemType>;
  };
};

export const Group = ({ icon, content }: GroupType) => {
  const { transactionInfo, dispatch } = useTransactionInfo();
  const selectHandler = (id: string) => dispatch({ payload: id });

  const filteredContent = content.items?.map((contentItem) => {
    const status = Object.values(
      transactionInfo.find((item) => {
        const [key] = Object.keys(item);

        return key === contentItem.id;
      }) || {}
    )[0];

    return { ...contentItem, status };
  });

  return (
    <Block icon={icon} title={content.title} text={content.text}>
      {filteredContent?.map((item, index) => (
        <Item
          id={item.id}
          status={item.status}
          title={item.title}
          text={item.text}
          content={item.content}
          info={item.info}
          onClick={selectHandler}
          key={`${item.text}_${index}`}
        />
      ))}
    </Block>
  );
};
