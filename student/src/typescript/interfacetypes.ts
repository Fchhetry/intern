import React from "react";

export interface Pagination<T> { //generic interface for paginating any type of item
  items: T[]; //T[]: Generic type array
  currentPage: number; //Which page is currently shown
  totalPages: number; //How many total pages exist
  itemsPerPage: number; //Number of items on each page
  totalItems: number; //Total number of items overall
}

export interface ApiResponse<T> { //defines the shape of an API response
  data: T; //actual data returned
  status: number; //HTTP status code
  message?: string; //Optional success or info message
  error?: string; //Optional error message
}

export interface FormField<T> { //defines the state of a form input field
  value: T; //the input value
  error?: string; //optional string error
  touched: boolean; //was the field interacted with?
}

export interface AsyncState<T> { //used to handle loading states when making async API calls
  loading: boolean; //request in progress
  data?: T; //data from the server
  error?: string; //optional error string
}

export interface ModalProps { //defines props for a Modal component
  isOpen: boolean; //the modal is shown
  onClose: () => void; //Function to close the modal
  title?: string; //Optional title of the modal
  children?: React.ReactNode; //React elements inside the modal
}

export enum SortOrder { //an enum for sort direction
  ASC = "asc",
  DESC = "desc",
}

export interface SelectOption<T = string | number> { //defines options for a dropdown/select component
  label: string; //text shown to user
  value: T; //value behind the option
  disabled?: boolean; //this option is disabled
}
