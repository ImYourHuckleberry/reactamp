/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      image
      priority
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        priority
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getKeyboard = /* GraphQL */ `
  query GetKeyboard($id: ID!) {
    getKeyboard(id: $id) {
      id
      name
      description
      cost
      image
      user {
        id
        name
        ratingsGiven {
          id
          starRating
          message
          createdAt
          updatedAt
        }
        ratingsRecieved {
          id
          starRating
          message
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listKeyboards = /* GraphQL */ `
  query ListKeyboards(
    $filter: ModelKeyboardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKeyboards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        cost
        image
        user {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
      id
      starRating
      message
      recievingUser {
        id
        name
        ratingsGiven {
          id
          starRating
          message
          createdAt
          updatedAt
        }
        ratingsRecieved {
          id
          starRating
          message
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      givingUser {
        id
        name
        ratingsGiven {
          id
          starRating
          message
          createdAt
          updatedAt
        }
        ratingsRecieved {
          id
          starRating
          message
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      Keyboard {
        id
        name
        description
        cost
        image
        user {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        starRating
        message
        recievingUser {
          id
          name
          createdAt
          updatedAt
        }
        givingUser {
          id
          name
          createdAt
          updatedAt
        }
        Keyboard {
          id
          name
          description
          cost
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      ratingsGiven {
        id
        starRating
        message
        recievingUser {
          id
          name
          createdAt
          updatedAt
        }
        givingUser {
          id
          name
          createdAt
          updatedAt
        }
        Keyboard {
          id
          name
          description
          cost
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      ratingsRecieved {
        id
        starRating
        message
        recievingUser {
          id
          name
          createdAt
          updatedAt
        }
        givingUser {
          id
          name
          createdAt
          updatedAt
        }
        Keyboard {
          id
          name
          description
          cost
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        ratingsGiven {
          id
          starRating
          message
          createdAt
          updatedAt
        }
        ratingsRecieved {
          id
          starRating
          message
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
