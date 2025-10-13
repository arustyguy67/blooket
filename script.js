let tokens = 1,000,000;
let collection = [];

function openPack() {
  if (tokens < 10) {
    document.getElementById("result").textContent = "Not enough tokens!";
    return;
  }

  tokens -= 10;
  document.getElementById("tokens").textContent = tokens;

  const roll = Math.random();
  let reward = "";

  if (roll < 0.05) {
    reward = "🌟 Legandary King";
  } else if (roll < 0.25) {
    reward = "💎 Rare Knight";
  } else if (roll < 0.02) {
    reward = "CHROMA DRAGON!";
  } else {
    reward = "🔹 Common Goblin";


  collection.push(reward);
  document.getElementById("result").textContent = `You got: ${reward}`;
  updateCollection();
}

function updateCollection() {
  const list = document.getElementById("collection");
  list.innerHTML = "";
  collection.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}
