// Union of string or number
export type StringOrNumber = string | number;

// Union for status
export type Status = "loading" | "success" | "error";

// Interface using union types
export interface Notification {
  message: string;
  type: "info" | "warning" | "error"; // union of string literals
}

// Union type for form value
export type FormValue = string | number | boolean;