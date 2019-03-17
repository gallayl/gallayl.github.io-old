import { Link, LocalizedString } from "./types"
import { Tag } from "./tag"

export interface Certification {
  IssuerName: string
  Description: LocalizedString
  Url: Link
  Tags: Tag[]
}
