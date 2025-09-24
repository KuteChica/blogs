let likeBtn = document.getElementById("button");
let likeCount = document.getElementById("count");
let likes = 0;

likeBtn.addEventListener("click", () => {
  likes++;
  likeCount.innerText = likes;
});
let commentInput = document.getElementById("comment-input");
let commentBtn = document.getElementById("comment-btn");
let commentList = document.getElementById("comment-list");

commentBtn.addEventListener("click", () => {
  let commentText = commentInput.value.trim(); // remove extra spaces

  if (commentText !== "") {
    let li = document.createElement("li");
    li.innerText = commentText;
    commentList.appendChild(li);

    commentInput.value = ""; // clear box after posting
  } else {
    alert("Please type something before posting!");
  }
});
