const input = document.getElementById("numberOfWords");
const container = document.querySelector(".container");

const generateWord = (num) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let word = "";
  for (let i = 0; i < num; i++) {
    let random = Math.floor(Math.random() * 26);
    word += letters[random];
  }

  return word;
};

const generateSentence = (num) => {
  let sentence = "";

  for (let i = 0; i < num; i++) {
    let random = Math.floor(5 + Math.random() * 10);
    sentence += generateWord(random);
    sentence += " ";
  }

  sentence = sentence.trim();
  sentence += ".";

  return sentence;
};

let numOfWord;
const generatePara = () => {
  numOfWord = Number(input.value);

  const para = document.createElement("p");

  para.innerText = generateSentence(numOfWord);

  if (para.innerText.length > 2) {
    para.setAttribute("class", "paras");

    container.append(para);
  }
};

const reset = () => {
  const para = document.querySelectorAll("p");
  para.forEach((value) => {
    value.remove();
  });
};
