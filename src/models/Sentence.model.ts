import { ContentTypeEnum } from "../enums/ContentTypeEnum.enum";
import { ISentence } from "../interfaces/ISentence.interface";
import { AbstractTranslation } from "./AbstractTranslation.model";

export class Sentence extends AbstractTranslation {
  constructor(translation: ISentence) {
    super(translation);
  }

  getType(): ContentTypeEnum {
    return ContentTypeEnum.Sentences;
  }
}
