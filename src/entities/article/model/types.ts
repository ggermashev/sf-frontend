import type { ITag } from "../../../shared/model/types"


export interface IArticle {
  id: string
  tags: ITag[]
  title: string
  author: string
  img: string
  date: string
  content: string
}