export enum Status {
  "success",
  "error",
}

export interface PropInt {
  status: Status.success | Status.error;
  label: string;
  text: string;
  setStateNotification: (v: null | boolean) => void;
}
