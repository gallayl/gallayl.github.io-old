import { IHasLocation } from "./ihaslocation"
import { Tag } from "./../models/tag"
import { Project } from "./project"
import { LocalizedString } from "./types"
import { Employer } from "./employer"

export interface Job extends IHasLocation {
  Employer: Employer
  FromDate: Date
  UntilDate?: Date
  Title: LocalizedString
  Responsibilities: LocalizedString

  Projects: Project[]
  Tags: Tag[]

  Address: string
  LocationQuery: string
}
