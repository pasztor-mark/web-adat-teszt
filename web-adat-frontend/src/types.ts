export type Theme = "dark" | "light" | "system";
export type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
  }
   
export type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
  }
export interface User {
  id: number;
  email: string;
  name?: string;
  vehicles?: Vehicle[];
  purchases?: Purchase[];
}
export interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  startingPrice: number;
  auctionEndDate: Date;
  vin: string;
  horsepower: number;
  fuelConsumption: number;
  sellerId: number;
  buyerId?: number;
  buyer?: User;
  // purchase?: Purchase;
}
export interface Purchase {
  id: number;
  buyerId: number;
  vehicleId: number;
  purchasePrice: number;
  purchaseDate: Date;
  buyer: User;
  vehicle: Vehicle;
}
export interface EndpointAverage {
  endpoint: string;
  atlag: number;
  count: number;
}