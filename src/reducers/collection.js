const initState = [
  {
    name: "men",
    image: "/images/category-man-bg.jpg",
    subCollections: [
      {
        name: 'Shirts',
      },
      {
        name: 'Pants',
      },
      {
        name: 'Jackets',
      },

    ]
  },
  {
    name: "women",
    image: "/images/category-women-bg.jpg",
    subCollections: [
      {
        name: 'Shirts',
      },
      {
        name: 'Pants',
      },
      {
        name: 'Jackets',
      },
    ]
  }
]

export default (state = initState, action) => {
  switch (action.type) {
    case "SET_COLLECTIONS":
      return action.collections
    default:
      return state;
  }
}