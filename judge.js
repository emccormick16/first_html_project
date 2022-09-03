let voteCount = 0;

function increaseVotes() {
  const numVotes = document.getElementById("numVotes");
  numVotes.innerHTML = `Votes for Judge: ${voteCount}`;
}

const votebutton = document.getElementById("votebutton");
votebutton.addEventListener("click", () => {
  if (voteCount === 10) {
    alert("You've reached your vote limit");
  } else {
    voteCount++;
    increaseVotes();
  }
});
