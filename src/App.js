import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

const getAllArticles = gql`{
  articles {
    title
    description
    body
    author {
      name
      country
    }
  }
}`

function App() {
  return (
    <>
      <Query query={getAllArticles}>
        {({ loading, error, data }) => {
          if (loading) return <p>Good things take time....</p>
          if (error) return <p>Something went wrong...</p>
          console.log('=====================')
          console.log(data)
          console.log('=====================')

          return <div className="row"><ul>{data.articles.map(article => <ol>{article.title}</ol>)}</ul></div>
        }}
      </Query>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
