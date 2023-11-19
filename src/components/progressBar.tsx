type ProgressBarType = {
  text?: string;
  steps?: { current: number; total: number };
};

export const ProgressBar = ({ text, steps }: ProgressBarType) => (
  <div className="flex items-center text-sm text-regent-gray mr-2">
    <span className="w-16 h-1.5 rounded-lg bg-shamrock inline-block mr-2" />{" "}
    {steps?.current}/{steps?.total} {text}
  </div>
);
