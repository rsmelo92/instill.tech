import cn from "clsx";

export type HeadlineProps = {
  marginBottom?: string;
};

export const Headline = ({ marginBottom }: HeadlineProps) => {
  return (
    <h1
      className={cn(
        "mb-5 w-full text-left font-mono text-[32px] font-semibold uppercase text-instillNeonBlue word-spacing-tight xl:text-instill-h1 xl:word-spacing-super-tight",
        marginBottom
      )}
    >
      The backbone for Versatile ai
    </h1>
  );
};
