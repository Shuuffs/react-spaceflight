import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setSummary(data.summary);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch article:", err);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated post:", { id, title, summary });
    alert("Changes saved (simulated).");
    navigate(`/news/${id}`);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmDelete) {
      console.log(`Post ${id} deleted (simulated)`);
      alert("Post deleted (simulated).");
      navigate("/");
    }
  };

  if (loading) return <p>Loading article...</p>;

  return (
    <div style={{ padding: "20px" }}>
      {/* Header and delete button container */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Edit Post</h2>
        <button
          onClick={handleDelete}
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            padding: "8px 12px",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          🗑️ Delete Post
        </button>
      </div>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <label>Title:</label>
        <br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", padding: "8px" }}
        />
        <br />
        <br />

        <label>Summary:</label>
        <br />
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          rows="5"
          style={{ width: "100%", padding: "8px" }}
        />
        <br />
        <br />

        <button type="submit">💾 Save Changes</button>
      </form>
    </div>
  );
}

export default EditPost;
