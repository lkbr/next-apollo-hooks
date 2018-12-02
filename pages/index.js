import { Query } from "react-apollo"
import { gql } from "apollo-boost"

import { useState } from "react"

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export const QUERY = gql`
  {
    allPosts(orderBy: createdAt_DESC, first: 3) {
      id
      title
    }
  }
`

export default () => (
  <Query query={QUERY}>
    {({ loading, error, data: { allPosts } }) => {
      if (error) return <div>{JSON.stringify(error, 2, null)}</div>
      if (loading) return <div>Loading</div>

      return (
        <div>
          <Example />
          {allPosts.map(post => (
            <div key={post.id}>{post.title}</div>
          ))}
        </div>
      )
    }}
  </Query>
)
