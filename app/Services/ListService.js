import List from "../Models/List.js";

//Private
let _state = {
    lists: []
}


//Public
export default class ListService {
    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?
    constructor() {
        this.getLists()
    }

    completeList(index) {
        if (_state.lists[index].complete != "fas fa-check-circle") {
            _state.lists[index].complete = "fas fa-check-circle"
        } else {
            _state.lists[index].complete = ""
        }
        this.saveLists()
    }

    addTask(newTask, listIndex) {
        _state.lists[listIndex].tasks.push(newTask)
        this.saveLists()
    }

    deleteTask(listIndex, taskIndex) {
        _state.lists[listIndex].tasks.splice(taskIndex, 1)
        this.saveLists()
    }

    addList(newList) {
        _state.lists.push(new List(newList))
        this.saveLists()
    }

    deleteList(index) {
        _state.lists.splice(index, 1)
        this.saveLists()
    }

    get List() {
        return _state.lists.map(list => new List(list))
    }



    //NOTE You will need this code to persist your data into local storage, these methods should not require changing

    //NOTE call saved list everytime you change the list collection in any way
    saveLists() {
        localStorage.setItem('lists', JSON.stringify(_state.lists))
    }

    //NOTE this method will get the lists from local storage at the start of the app
    getLists() {
        let saved = JSON.parse(localStorage.getItem('lists'))
        if (saved) {
            _state.lists = saved;
        }
    }
}
