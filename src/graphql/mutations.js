/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const createKeyboard = /* GraphQL */ `
  mutation CreateKeyboard(
    $input: CreateKeyboardInput!
    $condition: ModelKeyboardConditionInput
  ) {
    createKeyboard(input: $input, condition: $condition) {
      id
      name
      description
      cost
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateKeyboard = /* GraphQL */ `
  mutation UpdateKeyboard(
    $input: UpdateKeyboardInput!
    $condition: ModelKeyboardConditionInput
  ) {
    updateKeyboard(input: $input, condition: $condition) {
      id
      name
      description
      cost
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteKeyboard = /* GraphQL */ `
  mutation DeleteKeyboard(
    $input: DeleteKeyboardInput!
    $condition: ModelKeyboardConditionInput
  ) {
    deleteKeyboard(input: $input, condition: $condition) {
      id
      name
      description
      cost
      image
      createdAt
      updatedAt
    }
  }
`;
