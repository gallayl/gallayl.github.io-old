import { IHasLocation } from "./ihaslocation"
import { Link, LocalizedString } from "./types"

export interface Owner extends IHasLocation {
  Name: string
  Title: LocalizedString
  Email: string
  Phone: string
  BirthDate: Date
  BirthPlace: string
  PhotoURL: Link

  LinkedinProfileUrl: Link
  GithubProfileUrl: Link
  StackOwerflowProfileUrl: Link
  GooglePlusProfileUrl: Link
  FacebookProfileUrl: Link

  Address: LocalizedString
  LocationQuery: Link
}
