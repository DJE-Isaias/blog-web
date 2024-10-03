import NewsCard from "@/components/NewsCard";
import { fetchNewsByCategory } from "@/utils/newsAPI";

export default async function Catergory({
  params: { category },
}: {
  params: { category: string };
}) {
  const news = await fetchNewsByCategory(category);
  return (
    <div>
      <h1 className="text-4xl uppercase font-bold mb-8 shadow-lg rounded-lg text-center p-2">
        {category}
      </h1>

      <section key={category} className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
