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
      userId
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
        userId
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
      recievingUserId
      givingUserId
      keyboardId
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
        recievingUserId
        givingUserId
        keyboardId
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
      email
      name
      ratingsGiven
      ratingsRecieved
      keyboardsSold
      keyboardsBought
      image
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
        email
        name
        ratingsGiven
        ratingsRecieved
        keyboardsSold
        keyboardsBought
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
