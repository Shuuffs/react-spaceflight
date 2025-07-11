import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NewsList.css";

function NewsList({ searchQuery }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((res) => res.json())
      .then((data) => setNews(data.results))
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Spaceflight News</h1>
      {filteredNews.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image_url} alt={item.title} />
          <div className="card-content">
            <div className="card-title">{item.title}</div>
            <div className="card-body">{item.summary.slice(0, 100)}...</div>

            {/* Flex container for buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link to={`/news/${item.id}`} className="read-more-btn">
                Read more
              </Link>

              <Link to={`/edit/${item.id}`}>
                <button
                  style={{
                    padding: "6px 10px",
                    cursor: "pointer",
                    backgroundColor: "green",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  Edit or Delete this post
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
