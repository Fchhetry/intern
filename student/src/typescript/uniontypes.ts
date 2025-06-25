// Union of string or number
export type StringOrNumber = string | number;

// Union for status
export type Status = "loading" | "success" | "error"; //a union of string literals

// Interface using union types
export interface Notification {
  message: string;
  type: "info" | "warning" | "error"; // union of string literals
}

// Union type for form value
export type FormValue = string | number | boolean; //FormValue is a union type that can be a string, number, or boolean