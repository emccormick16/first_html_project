let voteCount = 0;

function increaseVotes() {
  const numVotes = document.getElementById("numVotes");
  console.log(numVotes);
  numVotes.innerHTML = `Votes for Judge: ${voteCount}`;
}

const votebutton = document.getElementById("votebutton");
votebutton.addEventListener("click", () => {
  console.log("clicked");
  voteCount++;
  increaseVotes();
});
