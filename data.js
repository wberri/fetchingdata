fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(jsonResp1 => console.log(jsonResp1))

/*fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(response => response.json())
      .then(jsonResp2 => console.log(jsonResp2))

fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
      .then(response => response.json())
      .then(jsonResp3 => console.log(jsonResp3))
*/
async function populate(){
    const requestURL = "https://jsonplaceholder.typicode.com/todos/1";
    const request =new Request(requestURL);

    const response = await fetch(request);
    const todos = await response.json();
    populateContent(todos);
    //populateContent(jsonResp2);
    //populateContent(jsonResp3);
    
}
async function populateContent(obj){
    const header = document.querySelector("header");
    const H1 = document.createElement("h1");
    H1.textContent= `completed: ${obj.completed}`;
    
}
populate();