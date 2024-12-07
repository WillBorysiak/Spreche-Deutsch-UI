import { IWord } from "../interfaces/IWord.interface";

export class Word {
  index: number;
  german: string;
  english: string;
  category: string;
  gender: string;

  constructor(data: IWord) {
    this.index = data.index;
    this.german = data.german;
    this.english = data.english;
    this.category = data.category;
    this.gender = data.gender;
  }
}
