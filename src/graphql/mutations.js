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
      priority
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
      priority
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
      priority
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
      userId
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
      userId
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
      userId
      createdAt
      updatedAt
    }
  }
`;
export const createRating = /* GraphQL */ `
  mutation CreateRating(
    $input: CreateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    createRating(input: $input, condition: $condition) {
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
export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
    $input: UpdateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    updateRating(input: $input, condition: $condition) {
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
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating(
    $input: DeleteRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    deleteRating(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
