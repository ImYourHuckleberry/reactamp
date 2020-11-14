/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
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
export const onCreateKeyboard = /* GraphQL */ `
  subscription OnCreateKeyboard {
    onCreateKeyboard {
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
export const onUpdateKeyboard = /* GraphQL */ `
  subscription OnUpdateKeyboard {
    onUpdateKeyboard {
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
export const onDeleteKeyboard = /* GraphQL */ `
  subscription OnDeleteKeyboard {
    onDeleteKeyboard {
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
export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating {
    onCreateRating {
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
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating {
    onUpdateRating {
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
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating {
    onDeleteRating {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
