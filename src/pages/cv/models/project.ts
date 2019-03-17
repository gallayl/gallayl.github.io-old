import { LocalizedString } from "./types"
import { Tag } from "./tag"

export interface Project {
  Name: LocalizedString
  Description: LocalizedString
  Tags: Tag[]
}
