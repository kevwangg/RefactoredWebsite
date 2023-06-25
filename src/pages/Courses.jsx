import React, {useState, useEffect} from 'react'
import MarkdownRender from '../components/MarkdownRender';
import '../App.css';

function Courses() {

    const [content, setContent] = useState('');

    useEffect(() => {
      const fetchMarkdownContent = async () => {
        try {
          const response = await fetch();
          const text = await response.text();
          setContent(text);
        } catch (error) {
          console.error('Error fetching Markdown content:', error);
        }
      };
  
      fetchMarkdownContent();
    }, []);

    return (
        <>
        <h1>Courses</h1>
        <h2>Fall 2023</h2>
        <MarkdownRender path="./assets/files/courses/fall2023.md" />
        <br></br>
        <h2>Spring 2023</h2>
        <MarkdownRender path="./assets/files/courses/spring2023.md" />
        <br></br>
        <h2>Fall 2022</h2>
        <MarkdownRender path="./assets/files/courses/fall2022.md" />
        <br></br>
        <h2>Spring 2022</h2>
        <MarkdownRender path="./assets/files/courses/spring2022.md" />
        <br></br>
        <h2>Fall 2021</h2>
        <MarkdownRender path="./assets/files/courses/fall2021.md" />

    </>

    )
}

export default Courses