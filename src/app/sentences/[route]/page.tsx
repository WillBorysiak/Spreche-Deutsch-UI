"use client";

import type { NextPage } from "next";

import TranslationContainer from "../../../components/content/translations/TranslationContainer";
import { ContentTypeEnum } from "../../../enums/ContentTypeEnum.enum";
import { useSentencesStore } from "../../../store/sentences-store.store";

const SentenceCategoryPage: NextPage = () => {
  const { setSentences, hasSentencesCategory, getSentencesByCategory } =
    useSentencesStore();

  return (
    <TranslationContainer
      contentType={ContentTypeEnum.Sentences}
      addTranslationToStore={setSentences}
      hasCategory={hasSentencesCategory}
      getItemsByCategory={getSentencesByCategory}
    />
  );
};

export default SentenceCategoryPage;
