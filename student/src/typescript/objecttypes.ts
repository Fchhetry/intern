// Basic object type
export interface Address {
  street: string;
  city: string;
  zipCode: string;
}

// Nested object type
export interface UserProfile {
  id: number;
  name: string;
  email: string;
  address: Address;
}

// Object with optional and readonly properties
export interface Product {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
}