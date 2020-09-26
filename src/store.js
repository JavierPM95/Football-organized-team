import { createStore } from "redux";

const initialState = {
    players: [
        {
          "id": 1,
          "name": "Antonio Garcia",
          "photo": "https://www.thispersondoesnotexist.com/image"
        },
        {
          "id": 2,
          "name": "Francisco Lopez",
          "photo": "https://www.thispersondoesnotexist.com/image"
        },
        {
          "id": 3,
          "name": "José Martinez",
          "photo": "https://www.thispersondoesnotexist.com/image"
        },
        {
          "id": 4,
          "name": "Juan Sanchez",
          "photo": "https://www.thispersondoesnotexist.com/image"
        },
        {
          "id": 5,
          "name": "Manuel González",
          "photo": "https://www.thispersondoesnotexist.com/image"
        },
        {
          "id": 6,
          "name": "Pedro Goméz",
          "photo": "https://www.thispersondoesnotexist.com/image"
        },
        {
          "id": 7,
          "name": "María Pilar",
          "photo": "https://www.thispersondoesnotexist.com/image"
        },
        {
          "id": 8,
          "name": "Dolores Jimenez",
          "photo": "https://www.thispersondoesnotexist.com/image"
        },
        {
          "id": 9,
          "name": "Antonia Rojas",
          "photo": "https://www.thispersondoesnotexist.com/image"
        },
        {
          "id": 10,
          "name": "Ana Nava",
          "photo": "https://www.thispersondoesnotexist.com/image"
        },
        {
          "id": 11,
          "name": "Josefa Lozada",
          "photo": "https://www.thispersondoesnotexist.com/image"
        },
        {
          "id": 12,
          "name": "Angela Nuñez",
          "photo": "https://www.thispersondoesnotexist.com/image"
        }
    ],
    mainline: [],
    alternate: []
}

const reducerTrainer = (state = initialState, action) => {
  if (action.type === "Add-player") {
    return {
      ...state,
      mainline: state.mainline.concat(action.player),
      players: state.players.filter(p => p.id !== action.player.id)
    }
  }

  if (action.type === "Add-alternate") {
    return {
      ...state,
      alternate: state.alternate.concat(action.player),
      players: state.players.filter(p => p.id !== action.player.id)
    }
  }

  if (action.type === "Remove-mainline") {
    return {
      ...state,
      mainline: state.mainline.filter(p => p.id !== action.player.id),
      players: state.players.concat(action.player)
    }
  }
  
  if (action.type === "Remove-alternate") {
    return {
      ...state,
      alternate: state.alternate.filter(p => p.id !== action.player.id),
      players: state.players.concat(action.player)
    }
  }
  return state
}

export default createStore(reducerTrainer);