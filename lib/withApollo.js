import withApollo from "next-with-apollo"
import ApolloClient from "apollo-boost"

export default withApollo(
  ({ ctx, headers }) =>
    new ApolloClient({
      uri: "https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn"
    })
)
