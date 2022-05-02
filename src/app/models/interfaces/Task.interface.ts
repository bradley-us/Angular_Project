export enum Levels {
  "Info",
  "Urgent",
  "Blocking"
}

export interface ITask {
  title: string,
  description?: string,
  done: boolean,
  level: Levels
}
