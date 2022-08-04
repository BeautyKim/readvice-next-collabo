import { kakaoBook } from ".";

export class BookController {
  constructor() {}
  async search(query: string) {
    try {
      const response = await kakaoBook.get(
        `/v3/search/book?sort=accuracy&size=15&query=${query}&target=title`
      );
      const docs = response.data;
      const t2 = Promise.resolve(docs.documents);
      return t2;
    } catch (err) {
      return err;
    }
  }
}
