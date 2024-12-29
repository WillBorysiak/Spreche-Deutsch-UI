import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBook,
  faBriefcase,
  faCalculator,
  faClockRotateLeft,
  faFamily,
  faForkKnife,
  faHiking,
  faLocationDot,
  faMessageDots,
  faPalette,
  faPerson,
  faQuoteLeft,
  faRankingStar,
  faSpellCheck,
  faSunCloud,
} from "@fortawesome/sharp-duotone-light-svg-icons";

export const getCategoryIcon = (category: string): IconProp => {
  let categoryIcon: IconProp = faMessageDots;

  switch (category) {
    case "General":
      categoryIcon = faMessageDots;
      break;
    case "Numbers":
      categoryIcon = faCalculator;
      break;
    case "Colours":
      categoryIcon = faPalette;
      break;
    case "Family":
      categoryIcon = faFamily;
      break;
    case "Food":
      categoryIcon = faForkKnife;
      break;
    case "Places":
      categoryIcon = faLocationDot;
      break;
    case "Body":
      categoryIcon = faPerson;
      break;
    case "Hobbies":
      categoryIcon = faHiking;
      break;
    case "Work":
      categoryIcon = faBriefcase;
      break;
    case "Weather":
      categoryIcon = faSunCloud;
      break;
    case "Top Tips":
      categoryIcon = faRankingStar;
      break;
    case "Grammar":
      categoryIcon = faSpellCheck;
      break;
    case "Tenses":
      categoryIcon = faClockRotateLeft;
      break;
    case "Cases":
      categoryIcon = faBook;
      break;
    case "Phrases":
      categoryIcon = faQuoteLeft;
      break;
    default:
      categoryIcon = faMessageDots;
      break;
  }

  return categoryIcon;
};
