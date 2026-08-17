import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { ArrowIcon } from "./ArrowIcon";

export const actionPressMotion =
  "group transition-[transform] duration-[140ms] ease-xpeer-out active:[transform:scale(0.97)] motion-reduce:duration-[80ms] motion-reduce:active:[transform:scale(0.985)]";

const actionLabelMotion =
  "[transition-property:transform] duration-200 ease-xpeer-out fine-pointer:group-hover:[transform:translateX(0.22rem)] motion-reduce:duration-[0.01ms]";

const actionArrowMotion =
  "[transition-property:transform] duration-200 ease-xpeer-out fine-pointer:group-hover:[transform:rotate(-45deg)_scale(0.94)] motion-reduce:duration-[0.01ms]";

type ActionContentProps = {
  children: ReactNode;
  labelClassName?: string;
  arrowClassName?: string;
  arrowContainerClassName?: string;
};

export function ActionContent({
  children,
  labelClassName,
  arrowClassName,
  arrowContainerClassName,
}: ActionContentProps) {
  const arrow = <ArrowIcon className={cn(actionArrowMotion, arrowClassName)} />;

  return (
    <>
      <span className={cn(actionLabelMotion, labelClassName)}>{children}</span>
      {arrowContainerClassName ? (
        <span className={arrowContainerClassName}>{arrow}</span>
      ) : (
        arrow
      )}
    </>
  );
}
