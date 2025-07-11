import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/NewsDetail.css";

function NewsDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data))
      .catch((err) => console.error("Failed to fetch detail:", err));
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{article.title}</h2>
      <img src={article.image_url} alt={article.title} width="600" />
      <p style={{ marginTop: "20px" }}>{article.summary}</p>
      <a href={article.url} target="_blank" rel="noreferrer">
        Read Full Article →
      </a>
      <br />
      <br />
      {/* //css for edit button  */}
    </div>
  );
}

export default NewsDetail;
