import React, { useCallback, useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

const App = () => {
  const [postId, setPostId] = useState(1);

  const [post, setPost] = useState(null);

  const getPost = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [postId]);

  useEffect(() => {
    getPost();
  }, [postId]);

  return (
    <div>
      {post == null ? (
        <div>로딩 중...</div>
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Header>Post 1 데이터</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>{post.userId}</ListGroup.Item>
            <ListGroup.Item>{post.id}</ListGroup.Item>
            <ListGroup.Item>{post.title}</ListGroup.Item>
            <ListGroup.Item>{post.body}</ListGroup.Item>
          </ListGroup>
        </Card>
      )}
      <button onClick={() => setPostId((prev) => prev + 1)}>다음글 보기</button>
    </div>
  );
};

export default App;
