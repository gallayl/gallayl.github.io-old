import { Link, LocalizedString } from "./types"

export interface Employer {
  Name: string
  Description: LocalizedString
  HomePage: Link
  LogoUrl: Link
}
