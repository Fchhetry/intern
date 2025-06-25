// Basic object type
export interface Address { //defines an object type named Address
  street: string;
  city: string;
  zipCode: string;
}

// Nested object type
export interface UseProfile {//Includes a nested object: address, which must match the structure of the Address interface defined above
  id: number;
  name: string;
  email: string;
  address: Address;
}

// Object with optional and readonly properties
export interface Prod {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
}