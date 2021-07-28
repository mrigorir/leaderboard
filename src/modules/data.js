const list = document.getElementById('list');

const sortScores = (scores) => scores.sort((a, b) => b.score - a.score);

const addData = (scores) => {
  const orderedScores = sortScores(scores);
  list.innerHTML = '';
  orderedScores.forEach((score) => {
    const li = document.createElement('li');
    li.classList.add('font-bold');
    li.innerHTML = `${score.user}: ${score.score}`;
    list.appendChild(li);
  });
};

export default addData;