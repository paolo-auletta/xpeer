import type { ReactNode } from "react";
import { type ApplicationForm } from "../lib/applicationLinks";
import { cn } from "../lib/cn";

type ApplicationLinkProps = {
  application: ApplicationForm;
  children: ReactNode;
  className?: string;
};

export function ApplicationLink({
  application,
  children,
  className,
}: ApplicationLinkProps) {
  if (application.status === "closed") {
    return (
      <span
        aria-disabled="true"
        aria-label={application.closedMessage}
        className={cn(
          className,
          "cursor-not-allowed opacity-65 pointer-events-none",
        )}
        data-application-form={application.href}
        data-application-status="closed"
      >
        {application.closedMessage}
      </span>
    );
  }

  return (
    <a
      aria-label={application.ariaLabel}
      className={className}
      data-application-form={application.href}
      data-application-status="open"
      href={application.href}
    >
      {children}
    </a>
  );
}
