import { ContentTypeEnum } from "../enums/ContentTypeEnum.enum";
import { IWord } from "../interfaces/IWord.interface";
import { AbstractTranslation } from "./AbstractTranslation.model";

export class Word extends AbstractTranslation {
  gender: string;

  constructor(translation: IWord) {
    super(translation);
    this.gender = translation.gender;
  }

  getType(): ContentTypeEnum {
    return ContentTypeEnum.Words;
  }
}
