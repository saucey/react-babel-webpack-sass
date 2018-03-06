export const cardSelected = (card, clickCount) => ({
  type: 'ON_CARD_SELECT',
  card,
  clickCount
})

export const sockCardData = (cardData) => ({
  type: 'ON_CARD_CHANGE',
  cardData,
})

// export const addUser = name => ({
//   type: 'ADD_USER',
//   name
// })
