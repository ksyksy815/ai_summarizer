import { useEffect, useState } from "react";
import { copy, linkIcon, loader, tick } from "../assets";

import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { useLazyGetSummaryQuery } from "../services/article";

type Article = {
  summary: string;
  url: string;
};

const Demo = () => {
  const [article, setArticle] = useState<Article>({ url: "", summary: "" });

  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [copied, setCopied] = useState<string>("");

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = localStorage.getItem("articles")
      ? JSON.parse(localStorage.getItem("articles") as string)
      : null;

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data } = await getSummary({ articleUrl: article.url });
    /* data = {summary: string, url: string} */

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };

      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  const handleCopy = (copyUrl: string) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <section className="w-full max-w-xl mt-16">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex items-center justify-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link icon"
            className="absolute left-0 w-5 my-2 ml-3"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer text-background"
          />

          <button
            type="submit"
            className="ml-2 h-[42px] rounded-md w-[125px] bg-[#005f8f] peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            Enter
          </button>
        </form>

        <div className="flex flex-col gap-1 overflow-y-auto max-h-60">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                <img
                  src={copied === item.url ? tick : copy}
                  alt="Copy icon"
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
              <p className="flex-1 text-sm font-medium truncate font-satoshi text-blu-700">
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center max-w-full my-10">
        {isFetching ? (
          <img src={loader} alt="loader" className="object-contain w-20 h-20" />
        ) : error ? (
          <p className="font-bold text-center font-inter">
            Well, that was not supposed to happen...
            <br />
            <span className="font-normal text-gray-700 font-satoshi">
              {
                (error as FetchBaseQueryError & { data: { error: string } })
                  ?.data?.error
              }
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold font-satoshi">
                Article <span className="blue_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p className="text-sm font-medium font-inter">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
