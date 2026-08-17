export type ApplicationForm = {
  href: string;
  ariaLabel: string;
  status: "open" | "closed";
  closedMessage: string;
};

export const applicationForms = {
  mentee: {
    href: "https://tally.so/r/rj9eaX",
    ariaLabel: "Apply as a mentee — opens the application form",
    status: "open",
    closedMessage:
      "Mentee applications are currently closed. Check back here for the next cohort.",
  },
  mentor: {
    href: "https://tally.so/r/obNq7e",
    ariaLabel: "Join as a mentor — opens the application form",
    status: "open",
    closedMessage:
      "Mentor applications are currently closed. Check back here for the next cohort.",
  },
} as const;
