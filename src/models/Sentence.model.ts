import { ISentence } from "../interfaces/ISentence.interface";

export class Sentence {
  index: number;
  german: string;
  english: string;
  category: string;

  constructor(data: ISentence) {
    this.index = data.index;
    this.german = data.german;
    this.english = data.english;
    this.category = data.category;
  }
}
