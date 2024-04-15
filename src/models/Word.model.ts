import { IWord } from "../interfaces/IWord";

export class Word {
  index: number;
  german: string;
  english: string;
  gender: string;
  category: string;

  constructor(data: IWord) {
    this.index = data.index;
    this.german = data.german;
    this.english = data.english;
    this.gender = data.gender;
    this.category = data.category;
  }
}
