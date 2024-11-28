import { ThemeProviderState } from "@/types"
import { createContext } from "react"

const initialState: ThemeProviderState = {
    theme: "dark",
    setTheme: () => null,
  }
   
  export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)