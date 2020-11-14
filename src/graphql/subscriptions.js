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
export const onUpdateKeyboard = /* GraphQL */ `
  subscription OnUpdateKeyboard {
    onUpdateKeyboard {
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
export const onDeleteKeyboard = /* GraphQL */ `
  subscription OnDeleteKeyboard {
    onDeleteKeyboard {
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
export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating {
    onCreateRating {
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
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating {
    onUpdateRating {
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
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating {
    onDeleteRating {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
