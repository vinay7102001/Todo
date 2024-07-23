let listData = document.getElementById("display_task")
let inputData = document.getElementById("addTask")


function add_task_fun() {
  // console.log(p)
  if (inputData.value == "") {
    alert("Please Enter Task")
  } else {
    let section = document.createElement("section");
    let p = document.createElement("p");
    let div = document.createElement("div");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");

    button1.setAttribute("class", "delete_button")
    button1.innerText = "Remove"
    button2.setAttribute("class", "task_not_completed")
    button2.innerText = "Not Done"

    section.append(p, div)
    div.append(button1, button2)
    p.innerText = inputData.value
    button2.addEventListener("click", () => {
      button2.style.backgroundColor = "rgba(20, 45, 76, 0.5)";
      button2.style.cursor = "none";
      button2.innerText = "Competed";
      p.style.textDecorationLine = "line-through";
      p.style.color = "rgba(0,0,0,0.6)";
    })
    section.addEventListener("click", () => {
      button2.style.backgroundColor = "rgba(20, 45, 76, 0.5)";
      button2.style.cursor = "none";
      button2.innerText = "Competed";
      p.style.textDecorationLine = "line-through";
      p.style.color = "rgba(0,0,0,0.6)";
    })
    listData.append(section)
    button1.addEventListener("click", (e) => {
      section.remove()

    })
    console.log(document.getElementById("display_task"))
  }
  inputData.value = ""
}