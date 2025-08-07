import React from "react";
import "../../assets/styles/components/_recentposts.scss";

const posts = [
  {
    id: 1,
    image: "/images/blog-1.jpg",
    date: "11",
    month: "September",
    year: "2020",
    title: "Most Popular Place In This World",
  },
  {
    id: 2,
    image: "/images/blog-2.jpg",
    date: "11",
    month: "September",
    year: "2020",
    title: "Most Popular Place In This World",
  },
  {
    id: 3,
    image: "/images/blog-3.jpg",
    date: "11",
    month: "September",
    year: "2020",
    title: "Most Popular Place In This World",
  },
];

const RecentPosts: React.FC = () => {
  return (
    <section className="recentPosts">
      <h2 className="subtitle">Our Blog</h2>
      <h1 className="title">Recent Post</h1>
      <div className="postGrid">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <div className="imageWrapper">
              <img src={post.image} alt={post.title} />
              <div className="dateBadge">
                <span className="date">{post.date}</span>
                <span className="monthYear">{post.year} <br /> {post.month}</span>
              </div>
            </div>
            <div className="content">
              <h3>{post.title}</h3>
              <button className="readMore">Read more</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
