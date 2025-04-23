const listAllButton = document.querySelector(".listAllButton");
const listAllResult = document.querySelector(".listAllResult");
const clearAllButton = document.querySelector(".clearAllButton");
const listByIdInput = document.querySelector("#listByIdInput");
const userIdInput = document.querySelector("#userIdInput");
const titleInput = document.querySelector("#titleInput");
const bodyInput = document.querySelector("#bodyInput");
const listByIdButton = document.querySelector(".listByIdButton");
const listByIdContainer = document.querySelector(".listByIdContainer");
const listPostedItemResult = document.querySelector(".listPostedItemResult");
const postItemButton = document.querySelector(".postItemButton");
const editByIdButton = document.querySelector(".editByIdButton");
const editByIdContainer = document.querySelector(".editByIdContainer");
const deleteByIdContainer = document.querySelector(".deleteByIdContainer");
const idInputEdit = document.querySelector("#idInputEdit");
const userIdInputEdit = document.querySelector("#userIdInputEdit");
const titleInputEdit = document.querySelector("#titleInputEdit");
const bodyInputEdit = document.querySelector("#bodyInputEdit");
const idInputDelete = document.querySelector("#idInputDelete");

// Lista tudo
function listAll() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      let html = ``;
      json.forEach((element) => {
        html += `
        &nbsp&nbsp{<br>
            &nbsp&nbsp&nbsp<span>id:${element.id},</span><br>
            &nbsp&nbsp&nbsp<span>title: ${element.title},</span><br>
            &nbsp&nbsp&nbsp<span>body:${element.body},</span><br>
            &nbsp&nbsp&nbsp<span>userID: ${element.userId}</span><br>
        &nbsp&nbsp}<br>`;
      });
      let code = `[<br>${html}<br>]`;
      listAllResult.innerHTML = code;
    });
}

function clearAllData() {
  listAllResult.innerHTML = "All data Cleared!";
}

listAllButton.addEventListener("click", listAll);
clearAllButton.addEventListener("click", clearAllData);

// Lista por ID
function listById() {
  console.log(listByIdInput.value);
  fetch(`https://jsonplaceholder.typicode.com/posts/${listByIdInput.value}`)
    .then((response) => response.json())
    .then((json) => {
      html = `&nbsp&nbsp{<br>
           &nbsp&nbsp&nbsp<span>id:${json.id},</span><br>
           &nbsp&nbsp&nbsp<span>title: ${json.title},</span><br>
           &nbsp&nbsp&nbsp<span>body:${json.body},</span><br>
           &nbsp&nbsp&nbsp<span>userID: ${json.userId}</span><br>
       &nbsp&nbsp}<br>`;
      listByIdContainer.innerHTML = html;
    });
}

//Post item
function postItem() {
    console.log(userIdInput.value);
    console.log(titleInput.value);
    console.log(bodyInput.value);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: titleInput.value,
          body: bodyInput.value,
          userId: userIdInput.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
            html = `&nbsp&nbsp{<br>
            &nbsp&nbsp&nbsp<span>id:${json.id},</span><br>
            &nbsp&nbsp&nbsp<span>title: ${json.title},</span><br>
            &nbsp&nbsp&nbsp<span>body:${json.body},</span><br>
            &nbsp&nbsp&nbsp<span>userID: ${json.userId}</span><br>
            &nbsp&nbsp}<br>`;
            listPostedItemResult.innerHTML = html;
        });
}

//Edita item
function editById() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idInputEdit.value}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: idInputEdit.value,
          title: titleInputEdit.value,
          body: bodyInputEdit.value,
          userId: userIdInputEdit.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
            html = `&nbsp&nbsp{<br>
            &nbsp&nbsp&nbsp<span>id:${json.id},</span><br>
            &nbsp&nbsp&nbsp<span>title: ${json.title},</span><br>
            &nbsp&nbsp&nbsp<span>body:${json.body},</span><br>
            &nbsp&nbsp&nbsp<span>userID: ${json.userId}</span><br>
            &nbsp&nbsp}<br>`;
            editByIdContainer.innerHTML = html;
        });
  }

//Deleta item
function deleteById() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idInputDelete.value}`, {
        method: 'DELETE',
    }).then(response => {
        if(response.ok) {
            deleteByIdContainer.innerHTML = `ID:${idInputDelete.value} post deletado com sucesso!`;
        } else {
            deleteByIdContainer.innerHTML = "Erro, id não deletado!";
        }
    }
    )
}