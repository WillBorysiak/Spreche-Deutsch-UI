import { CategoryEnum } from "../enums/CategoryEnum";

export interface ICategory {
  index: number;
  name: string;
  type: CategoryEnum;
  route: string;
}
