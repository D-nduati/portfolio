import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Link,
} from "@material-ui/core";

function Projects() {
  const projectData = [
    {
      title: "E-commerce Website",
      description:
        "A fully functional e-commerce website built with React, Redux, and Node.js, featuring user authentication, product management, and payment gateway integration.",
      image: "https://via.placeholder.com/300x200",
      githubLink: "https://github.com/your-username/ecommerce-website",
      codeSnippet: `
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';

function ProductList({ products, fetchProducts }) {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
           
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({ products: state.products });

export default connect(mapStateToProps, { fetchProducts })(ProductList);
`,
    },
    {
      title: "Blog",
      description:
        "A blog built with React, Node.js, and MongoDB, featuring user authentication, post creation, and commenting system.",
      image: "https://via.placeholder.com/300x200",
      githubLink: "https://github.com/your-username/blog",
      codeSnippet: `
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
`,
    },
    {
      title: "Chatbot",
      description:
        "A chatbot built with React, Node.js, and Dialogflow, featuring natural language processing and machine learning.",
      image: "https://via.placeholder.com/300x200",
      githubLink: "https://github.com/your-username/chatbot",
      codeSnippet: `
import React, { useState, useEffect } from 'react';
import { Dialogflow } from 'dialogflow';

function Chatbot() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const dialogflow = new Dialogflow();
    dialogflow.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  return (
    <div>
      <h2>Chatbot</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <p>{message.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
`,
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1">Projects</Typography>
      </Grid>
      {projectData.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              image={project.image}
              title={project.title}
              style={{ height: 140 }}
            />
            <CardContent>
              <Typography variant="h5">{project.title}</Typography>
              <Typography variant="body1">{project.description}</Typography>
              <Link href={project.githubLink} target="_blank" rel="noopener">
                View on GitHub
              </Link>
              <pre>
                <code>{project.codeSnippet}</code>
              </pre>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Projects;
