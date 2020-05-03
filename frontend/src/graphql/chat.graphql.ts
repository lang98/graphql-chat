import gql from "graphql-tag";

export const QUERY_CHATS = gql`
  query {
    chats {
      id
      message
      from
    }
  }
`;
