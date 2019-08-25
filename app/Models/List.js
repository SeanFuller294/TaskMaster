export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        this.title = data.title
        this.tasks = data.tasks || []
        this.color = data.color || "white"
        this.textColor = data.textColor
        this.complete = data.complete || ""
    }

    getTemplate(index) {
        let template = `
        <div class = "col-4 ${this.color} text${this.textColor}">
        <div class="text-center"><i class="${this.complete}"></i></div>
      <h1>${this.title}</h1>
      <ul>`
        template += this.drawTasks(index)
        template += `
    <form onsubmit="app.controllers.listController.addTask(event, ${index})">
    <div class="form-group">
                <label for="task"></label>
                <input type="text" class="form-control" name="task" placeholder="Enter Task" required>
                </div>
                <button class="btn btn-success"type="submit">Add Task</button>
                </form>
      <button class="btn btn-danger" onclick="app.controllers.listController.deleteList(${index})">DELETE LIST</button>
    <button class="btn btn-success" onclick="app.controllers.listController.completeList(${index})">Done</button>
      </div>
        `
        return template
    }

    drawTasks(index) {
        let taskTemplate = ""
        this.tasks.forEach((task, taskIndex) => {
            taskTemplate += `<li>${task} <button class="btn btn-danger"onclick="app.controllers.listController.deleteTask(${index},${taskIndex})">X</button></li>`
        });
        return taskTemplate
    }
}