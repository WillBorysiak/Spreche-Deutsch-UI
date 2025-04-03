"use client";

import TranslationContainer from "../../../components/content/translations/TranslationContainer";
import { ContentTypeEnum } from "../../../enums/ContentTypeEnum.enum";
import { useWordsStore } from "../../../store/words-store.store";

const WordCategoryPage = () => {
  const { setWords, hasWordsCategory, getWordsByCategory } = useWordsStore();

  return (
    <TranslationContainer
      contentType={ContentTypeEnum.Words}
      addTranslationToStore={setWords}
      hasCategory={hasWordsCategory}
      getItemsByCategory={getWordsByCategory}
    />
  );
};

export default WordCategoryPage;
