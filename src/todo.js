const allTodoArray = [];
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

function addTodo(project, title, description, priotiry) {
  const todoObject = new Todo(title, description, priotiry);
  project.todoArray.push(todoObject);
  allTodoArray.push(project.todoArray);
}

export { addTodo, allTodoArray };
