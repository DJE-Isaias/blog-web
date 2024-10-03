import { Article } from "@/models/article";
import { getArticle } from "@/utils/newsAPI";
import React from "react";

export default async function NewsPost() {
  
  const newsData = (await getArticle()) as Article;
  console.log(newsData);

  if (!newsData) {
    return <p>News not found</p>;
  }

  console.log(newsData);

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">{newsData.title}</h1>
      <p className="text-lg text-textSubtle">{new Date(newsData.publishedAt).toString()}</p>
      <img src={newsData.urlToImage} alt={newsData.title} className="w-full h-auto rounded-lg" />
      <p className="text-xl">{newsData?.content || newsData.description || 'No content available'}</p>

      <a href={newsData.url} target="_blank" rel="noopener noreferrer" className="text-secondary underline">
        Read full article
      </a>
    </div>
  );
}
