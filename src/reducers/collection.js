const initState = [
  {
    name: "men",
    image: "/images/category-man-bg.jpg",
    subCollections: [
      {
        name: 'shirts',
      },
      {
        name: 'pants',
      },
      {
        name: 'jackets',
      },

    ]
  },
  {
    name: "women",
    image: "/images/category-women-bg.jpg",
    subCollections: [
      {
        name: 'shirts',
      },
      {
        name: 'pants',
      },
      {
        name: 'jackets',
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