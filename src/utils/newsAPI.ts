'use server';

import { Article } from "@/models/article";
import { cookies } from "next/headers";

/* eslint-disable @typescript-eslint/no-explicit-any */
const API_KEY = "30230aea539b49eaaa421a2e3946cc42";
const API_URL = "https://newsapi.org/v2";

export const getArticle = () => {
  return new Promise((resolve) => {
    const cookie = cookies().get('article');
    const value = cookie?.value ? JSON.parse(cookie.value) : null;
    resolve(value);
    return value;
  })
};

export const setArticle = (article: Article) => {
  cookies().set('article', JSON.stringify(article));
};

export const fetchNewsByCategory = async (category: string): Promise<any[]> => {
  const response = await fetch(
    `${API_URL}/top-headlines?category=${category}&apiKey=${API_KEY}`
  );
  const data = await response.json();
  return data.articles;
};