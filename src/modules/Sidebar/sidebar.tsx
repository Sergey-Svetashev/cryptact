import { Title } from "@src/components/title";

export const Sidebar = ({
  title,
  items,
}: {
  title: string;
  items: Array<{ title: string; text: string }>;
}) => (
  <div className="w-48 ml-4 hidden md:block">
    <Title
      title={title}
      level="h5"
      className="font-bold text-xs leading-5 text-waikawa-gray"
    />
    {items.map((item, index) => (
      // TODO: add navigate logic
      <div
        onClick={() => console.log(`Navigate to ${item.title}`)}
        key={`${item.title}_${index}`}
        className="bg-white-half-transparent border border-humming-bird rounded-lg p-4 mt-2 mb-4 cursor-pointer"
      >
        <Title title={item.title} level="h4" className="text-sm" />
        <p className="text-xs">{item.text}</p>
      </div>
    ))}
  </div>
);
