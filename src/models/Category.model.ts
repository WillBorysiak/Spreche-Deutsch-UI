import { ContentTypeEnum } from "../enums/ContentTypeEnum";
import { ICategory } from "../interfaces/ICategory.interface";

export class Category {
  index: number;
  name: string;
  type: ContentTypeEnum;
  route: string;

  constructor(data: ICategory) {
    this.index = data.index;
    this.name = data.name;
    this.type = data.type;
    this.route = data.route;
  }
}
