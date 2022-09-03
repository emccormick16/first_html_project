let voteCount = 0;
let votesRemaining;

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
    displayRemainingVotes();
  }
});

function displayRemainingVotes() {
  if (voteCount === 5) {
    votesRemaining = 5;
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "votesRemaining");
    const newContent = document.createTextNode(
      `You have ${votesRemaining} vote(s) remaining`
    );
    newDiv.append(newContent);
    const currentDiv = document.getElementById("pagecontent");
    document.body.insertBefore(newDiv, currentDiv);
  } else if (voteCount > 5) {
    votesRemaining -= 1;
    let votesremainingid = document.getElementById("votesRemaining");
    votesremainingid.innerHTML = `You have ${votesRemaining} vote(s) remaining`;
  }
}
