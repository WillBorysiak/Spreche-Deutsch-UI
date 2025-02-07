import { ContentTypeEnum } from "../enums/ContentTypeEnum.enum";

export interface ICategory {
  index: number;
  name: string;
  type: ContentTypeEnum;
  route: string;
}
