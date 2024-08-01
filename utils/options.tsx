import { IssueLevel, IssueStatus } from "@api/issues.types";

export const statusOptions = [
  { value: "", label: "Status" },
  { value: IssueStatus.open, label: "Open" },
  { value: IssueStatus.resolved, label: "Resolved" },
];

export const errorOptions = [
  { value: "", label: "Level" },
  { value: IssueLevel.error, label: "Error" },
  { value: IssueLevel.warning, label: "Warning" },
  { value: IssueLevel.info, label: "Info" },
];
