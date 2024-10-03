"use client";

import { Article } from "@/models/article";
import { setArticle } from "@/utils/newsAPI";
import Link from "next/link";
import React from "react";
import Card from "./Card";

interface NewsCardProps {
  article: Article;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const saveItem = () => {
    setArticle(article);
  };
  return (
    <Card className="cursor-pointer">
      <h3 className="text-lg font-semibold u">{article.title}</h3>
      <p className="text-sm text-textSubtle">{article.description}</p>
      <Link
        onClick={saveItem}
        href={`article`}
        className="text-secondary underline"
      >
        Read more
      </Link>
    </Card>
  );
};

export default NewsCard;
