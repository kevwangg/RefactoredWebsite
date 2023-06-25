import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownRender({ path }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch(path);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error fetching Markdown content:', error);
      }
    };

    fetchMarkdownContent();
  }, [path]);

  return <ReactMarkdown>{content}</ReactMarkdown>;
}

export default MarkdownRender;