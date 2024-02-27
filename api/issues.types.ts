export enum IssueLevel {
  info = "info",
  warning = "warning",
  error = "error",
}

export enum IssueStatus {
  open = "open",
  resolved = "resolved",
}

export type IssueFilters = {
  status?: IssueStatus;
  level?: IssueLevel;
  project?: string;
};

export type Issue = {
  id: string;
  projectId: string;
  name: string;
  message: string;
  stack: string;
  level: IssueLevel;
  numEvents: number;
  numUsers: number;
};
