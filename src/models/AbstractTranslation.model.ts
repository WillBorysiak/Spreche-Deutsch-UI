export abstract class AbstractTranslation {
  index: number;
  german: string;
  english: string;
  category: string;

  constructor(data: {
    index: number;
    german: string;
    english: string;
    category: string;
  }) {
    this.index = data.index;
    this.german = data.german;
    this.english = data.english;
    this.category = data.category;
  }

  abstract getType(): string;
}
