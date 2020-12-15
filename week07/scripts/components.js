VTTCue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>",
});

let app7 = new VTTCue({
  el: "#app7",
  data: {
    groceryList: [
      {
        id: 0,
        text: "Vegetables",
      },
      {
        id: 0,
        text: "Cheese",
      },
      {
        id: 0,
        text: "VDrinks",
      },
      {
        id: 0,
        text: "Proteins",
      },
    ],
  },
});
