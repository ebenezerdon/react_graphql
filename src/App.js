import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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
          return <div className="row"><ul>{data.articles.map(article => <ol>{article.title}</ol>)}</ul></div>
        }}
      </Query>
    </>
  );
}

export default App;
