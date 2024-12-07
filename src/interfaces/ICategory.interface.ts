import { ContentTypeEnum } from "../enums/ContentTypeEnum";

export interface ICategory {
  index: number;
  name: string;
  type: ContentTypeEnum;
  route: string;
}
