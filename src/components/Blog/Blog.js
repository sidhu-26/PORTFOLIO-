import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col, Card, Form, InputGroup } from "react-bootstrap";
import Particle from "../Particle";
import { FiSearch, FiArrowLeft, FiShare2, FiCheck } from "react-icons/fi";
import DjangoBlog from "./DjangoBlog";

const blogData = [
  {
    id: 1,
    uuid: "b7e5a8f2-3c1d-4e9a-8b6f-7c2d1e4f3a9b",
    category: "Engineering",
    title: "Designing Scalable Django Project Structures",
    snippet: "Building a Django app is easy. Scaling it is where things break. A well-structured project acts like a blueprint for scalability.",
    image: "/ChatGPT Image Jun 6, 2026, 10_33_24 PM.png",
    authorName: "Siddaarth",
    date: "June 2026",
    readTime: "8 min read",
    authorImage: "https://ui-avatars.com/api/?name=Siddaarth&background=c770f0&color=fff",
    content: <DjangoBlog />
  },
  /*
  {
    id: 2,
    uuid: "c2d4e6f8-1a3b-4c5d-9e7f-8a6b4c2d0e1f",
    category: "Design",
    title: "UX review presentations",
    snippet: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: blogImg2,
    authorName: "Olivia Rhye",
    date: "20 Jan 2022",
    readTime: "5 min read",
    authorImage: "https://ui-avatars.com/api/?name=Olivia+Rhye&background=c770f0&color=fff",
    content: (
      <>
        <h3 className="purple">Introduction</h3>
        <p>
          Presentations are a core part of design reviews. When done properly, they can turn a boring meeting into an exciting exploration of new ideas.
        </p>
        <p>
          Here are some ways to improve your presentations:
          <ul>
            <li>Know your audience</li>
            <li>Keep it visual</li>
            <li>Tell a story</li>
          </ul>
        </p>
      </>
    )
  },
  {
    id: 3,
    uuid: "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
    category: "Product",
    title: "Migrating to Linear 101",
    snippet: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    image: blogImg3,
    authorName: "Phoenix Baker",
    date: "19 Jan 2022",
    readTime: "4 min read",
    authorImage: "https://ui-avatars.com/api/?name=Phoenix+Baker&background=c770f0&color=fff",
    content: (
      <>
        <h3 className="purple">Introduction to Linear</h3>
        <p>Linear is a great tool for software teams looking for a fast, opinionated project management tool.</p>
        <h3 className="purple" style={{ marginTop: "30px" }}>Why Linear?</h3>
        <p>Unlike other tools, Linear focuses on speed and keyboard shortcuts, making it a favorite among developers.</p>
      </>
    )
  }
  */
];

const getPostSlug = (blog) => {
  const slug = blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  return `${slug}-${blog.uuid}`;
};

function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [copied, setCopied] = useState(false);

  const selectedBlogSlug = searchParams.get("post");
  const selectedBlog = selectedBlogSlug ? blogData.find(b => getPostSlug(b) === selectedBlogSlug) : null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredBlogs = blogData.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    blog.snippet.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container fluid className="project-section" style={{ color: "white", minHeight: "100vh", paddingTop: "80px" }}>
      <Particle />
      
      <style>
        {`
          .blog-body p, .blog-body ul, .blog-body li, .blog-body strong {
            color: white !important;
          }
          .purple {
            color: #c770f0 !important;
          }
          .search-input:focus {
            background-color: transparent !important;
            color: white !important;
            box-shadow: none !important;
            border-color: rgba(199, 112, 240, 0.8) !important;
          }
          .search-input::placeholder {
            color: #a588c0 !important;
          }
          .blog-card-hover {
            transition: all 0.3s ease;
            background: rgba(27, 26, 46, 0.9);
            border: 1px solid rgba(199, 112, 240, 0.2);
            border-radius: 12px;
            overflow: hidden;
            height: 100%;
            cursor: pointer;
            display: flex;
            flex-direction: column;
          }
          .blog-card-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(199, 112, 240, 0.2) !important;
            border: 1px solid rgba(199, 112, 240, 0.6);
          }
          .blog-title {
            color: #ffffff;
            font-weight: 700;
            font-size: 1.4em;
            margin-bottom: 0.8rem;
            line-height: 1.4;
            transition: text-shadow 0.3s ease;
          }
          .blog-card-hover:hover .blog-title {
            text-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
          }
          .read-article-btn {
            margin-top: 1.5rem;
            color: #c770f0;
            font-weight: 600;
            font-size: 0.95em;
            display: flex;
            align-items: center;
            transition: color 0.3s ease;
          }
          .blog-card-hover:hover .read-article-btn {
            color: #be6adf;
          }
          .blog-card-hover:hover .read-arrow {
            transform: translateX(5px);
          }
          .read-arrow {
            margin-left: 6px;
            transition: transform 0.3s ease;
            font-size: 1.1em;
          }
        `}
      </style>

      <Container>
        {selectedBlog ? (
          // Detailed Blog View
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={10} style={{ justifyContent: "center", paddingTop: "10px", paddingBottom: "50px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", position: "relative", zIndex: 10 }}>
                <div 
                  onClick={() => setSearchParams({})} 
                  style={{ display: "inline-flex", alignItems: "center", cursor: "pointer", color: "#c770f0", fontWeight: "600", fontSize: "1.1em", transition: "color 0.3s" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#be6adf"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#c770f0"}
                >
                  <FiArrowLeft style={{ marginRight: "8px" }} size={20} /> Back to blog
                </div>
                
                <div 
                  onClick={handleShare}
                  style={{ display: "inline-flex", alignItems: "center", cursor: "pointer", color: copied ? "#4ade80" : "#c770f0", fontWeight: "600", fontSize: "1em", transition: "all 0.3s", background: "rgba(199, 112, 240, 0.1)", padding: "6px 12px", borderRadius: "8px" }}
                  onMouseEnter={(e) => { if(!copied) e.currentTarget.style.background = "rgba(199, 112, 240, 0.2)" }}
                  onMouseLeave={(e) => { if(!copied) e.currentTarget.style.background = "rgba(199, 112, 240, 0.1)" }}
                >
                  {copied ? <><FiCheck style={{ marginRight: "6px" }} size={18} /> Copied!</> : <><FiShare2 style={{ marginRight: "6px" }} size={18} /> Share</>}
                </div>
              </div>
              
              <div style={{ textAlign: "center", marginBottom: "50px", display: selectedBlog.id === 1 ? 'none' : 'block', position: "relative", zIndex: 10 }}>
                <p style={{ color: "#c770f0", fontWeight: "600", fontSize: "1.2em", marginBottom: "15px" }}>{selectedBlog.category}</p>
                <h1 style={{ fontSize: "3em", fontWeight: "700", marginBottom: "25px", lineHeight: "1.2" }}>{selectedBlog.title}</h1>
                
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px" }}>
                  <img 
                    src={selectedBlog.authorImage} 
                    alt={selectedBlog.authorName}
                    style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "15px", border: "2px solid #c770f0" }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
                    <span style={{ fontWeight: "600", fontSize: "1.1em", color: "white" }}>{selectedBlog.authorName}</span>
                    <span style={{ fontSize: "0.9em", color: "#a588c0" }}>{selectedBlog.date}</span>
                  </div>
                </div>
                
                <img 
                  src={selectedBlog.image} 
                  alt={selectedBlog.title} 
                  style={{ width: "100%", maxHeight: "500px", objectFit: "cover", borderRadius: "16px", boxShadow: "0 10px 40px rgba(0,0,0,0.5)", display: selectedBlog.id === 1 ? 'none' : 'block' }} 
                />
              </div>

              <div className="blog-body" style={{ textAlign: "justify", fontSize: "1.15em", color: "white", lineHeight: "1.8", position: "relative", zIndex: 10 }}>
                {selectedBlog.content}
              </div>
            </Col>
          </Row>
        ) : (
          // Blog List View
          <div style={{ paddingTop: "10px", position: "relative", zIndex: 10 }}>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
              <Col md={8} style={{ textAlign: "center" }}>
                <div style={{ display: "inline-block", background: "rgba(199, 112, 240, 0.15)", padding: "6px 18px", borderRadius: "20px", color: "#c770f0", fontWeight: "600", fontSize: "0.95em", marginBottom: "25px" }}>
                  My blog
                </div>
                <h1 style={{ fontSize: "3.5em", fontWeight: "700", marginBottom: "20px" }}>
                  Thoughts and commits
                </h1>
                <p style={{ fontSize: "1.2em", color: "#a588c0", marginBottom: "40px" }}>
                  The stuff that didn't make it into the README
                </p>
                
                <div style={{ maxWidth: "500px", margin: "0 auto" }}>
                  <InputGroup style={{ background: "rgba(27, 26, 46, 0.9)", borderRadius: "10px", border: "1px solid rgba(199, 112, 240, 0.4)", overflow: "hidden" }}>
                    <InputGroup.Text style={{ background: "transparent", border: "none", color: "#a588c0", paddingLeft: "20px" }}>
                      <FiSearch size={22} />
                    </InputGroup.Text>
                    <Form.Control
                      className="search-input"
                      type="text"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      style={{ background: "transparent", border: "none", color: "white", boxShadow: "none", padding: "15px 15px 15px 10px", fontSize: "1.1em" }}
                    />
                  </InputGroup>
                </div>
              </Col>
            </Row>

            <Row>
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <Col md={4} className="mb-5" key={blog.id}>
                    <Card 
                      className="blog-card-hover"
                      onClick={() => setSearchParams({ post: getPostSlug(blog) })}
                    >
                      <Card.Img variant="top" src={blog.image} style={{ height: "260px", objectFit: "cover", padding: "0" }} />
                      <Card.Body style={{ textAlign: "left", padding: "1.2rem 2rem 2rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                        <p style={{ color: "#c770f0", fontWeight: "600", fontSize: "0.95em", marginBottom: "0.5rem" }}>
                          {blog.category}
                        </p>
                        
                        <Card.Title className="blog-title">
                          {blog.title}
                        </Card.Title>
                        
                        <Card.Text style={{ color: "#a588c0", fontSize: "1em", marginBottom: "1.5rem", lineHeight: "1.6", flexGrow: 1 }}>
                          {blog.snippet}
                        </Card.Text>
                        
                        <div style={{ display: "flex", alignItems: "center", marginTop: "auto", fontSize: "0.85em", color: "#a588c0" }}>
                          <img 
                            src={blog.authorImage} 
                            alt={blog.authorName}
                            style={{ width: "26px", height: "26px", borderRadius: "50%", marginRight: "10px", border: "1px solid #c770f0" }}
                          />
                          <span style={{ fontWeight: "600", color: "white", marginRight: "6px" }}>{blog.authorName}</span>
                          <span> • {blog.readTime} • {blog.date}</span>
                        </div>

                        <div className="read-article-btn">
                          Read Article <span className="read-arrow">→</span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <Col md={12} style={{ textAlign: "center", padding: "50px 0" }}>
                  <h3 style={{ color: "#a588c0" }}>No articles found</h3>
                </Col>
              )}
            </Row>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Blog;
