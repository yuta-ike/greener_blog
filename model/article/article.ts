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

  public toJson() {
    return JSON.stringify(this)
  }

  static fromJson(json: string) {
    const obj = JSON.parse(json)
    return new Article(
      obj.id,
      obj.slag,
      obj.hs,
      obj.title,
      obj.body,
      DateTime.fromISO(obj.createdAt),
      DateTime.fromISO(obj.updatedAt),
      obj.folder,
      obj.tags
    )
  }
}

export default Article
