const answer = new Date() < new Date(2021, 9, 22) ? "No" : "Yes";
document.querySelector("#answer").textContent = answer;