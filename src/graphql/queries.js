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
      user
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
        user
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const listKeyboardNames = /* GraphQL */ `
  query ListKeyboardNames(
    $filter: ModelKeyboardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKeyboards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
      }
      nextToken
    }
  }
`;
