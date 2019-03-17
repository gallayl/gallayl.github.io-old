import { Tag } from "./tag"
import { Link } from "./types"

export interface Hobby {
  Name: string
  ImageUrl: Link
  Tags: Tag[]
}
