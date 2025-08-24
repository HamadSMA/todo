class Todo {
  constructor(title, description, priotiry) {
    this.title = title;
    this.description = description;
    this.priotiry = priotiry;

    if (priotiry === "Urgent") {
      this.color = "red";
    } else if (priotiry === "Medium") {
      this.color = "yellow";
    } else if (priotiry === "Low") {
      this.color = "green";
    }
  }
}

function addTodo(title, description, priotiry) {
  todoArray.push(new Todo(title, description, priotiry));
}

export { addTodo };
