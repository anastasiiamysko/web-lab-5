import React, { useState, useEffect } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/16/comments')
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Помилка завантаження відгуків:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section
      style={{
        padding: '1.5rem',
        borderRadius: '12px',
        border: '1px solid #cbd5e1',
      }}
    >
      <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '1rem' }}>
        Відгуки роботодавців (Варіант 16)
      </h2>

      {loading ? (
        <p>Завантаження відгуків...</p>
      ) : (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {comments.map((comment) => (
            <div
              key={comment.id}
              style={{
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid #94a3b8',
              }}
            >
              <h3 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{comment.name}</h3>
              <p style={{ fontSize: '0.85rem', color: '#6366f1', marginBottom: '0.5rem' }}>
                {comment.email}
              </p>
              <p style={{ fontSize: '0.95rem' }}>{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;