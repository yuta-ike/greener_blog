import { DateTime } from 'luxon'

class Article {
  constructor(
    readonly id: string,
    readonly slag: string,
    readonly hs: string,
    readonly title: string,
    readonly body: string,
    readonly createdAt: DateTime,
    readonly updatedAt: DateTime,
    readonly folder: string,
    readonly tags: string[]
  ) {}
}

export default Article
