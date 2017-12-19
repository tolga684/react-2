import I from "immutable";

function reducer(state = I.Map(), action) {
  switch (action.type) {
    case "ADD_CURRENT_INPUT":
      return state.set("currentInput", action.data);
    case "ADD_TODO_ITEM":
      const currentItems = state.get("todoItems", I.List());

      return state.set("todoItems", currentItems.push(action.data));
      case "DELETE_TODO_TEST_ITEM":
          const currentItems1 = state.get("todoItems", I.List());
          return state.set("todoItems", currentItems1.splice(action.id,1));
      /*
      you should do delete operation here. Do not forget to change data structure for to-do items,
      you might have array of objects for to-do items, like that:
      [{id: 123, text: "hello ege"}, {id: 125, text: "new structure"}]
       */
    default:
      return state;
  }
}

export default reducer;