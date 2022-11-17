import cn from "clsx";
import { ReactElement } from "react";

export type SectionHeaderProps = {
  header: string;
  headerTextColor: string;
  headerWidth: string;
  marginBottom?: string;
  subElement?: ReactElement;
};

export const SectionHeader = ({
  header,
  headerWidth,
  headerTextColor,
  subElement,
  marginBottom,
}: SectionHeaderProps) => {
  return (
    <div className="flex w-full flex-col xl:flex-row">
      <h2
        className={cn(
          "align-top font-mono text-3xl font-medium xl:leading-[48px] xl:text-instill-h2",
          headerWidth,
          headerTextColor,
          marginBottom
        )}
      >
        {header}
      </h2>
      <div className="flex flex-1">{subElement}</div>
    </div>
  );
};