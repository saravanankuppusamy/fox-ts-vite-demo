export type Demo = {
  id: string;
  title: string;
  objective: string;
  render: () => HTMLElement;
};

export interface Policy {
  id: number;
  customerName: string;
  insuranceType: "Auto" | "Home" | "Health" | "Travel";
  coverageAmount: number;
  active: boolean;
  readonly createdAt: Date;
}

export type AppState =
  | { status: "loading" }
  | { status: "success"; data: Policy[] }
  | { status: "error"; message: string };

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
