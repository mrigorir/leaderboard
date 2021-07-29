const container = document.getElementById('list');

const sortScores = (scores) => scores.sort((a, b) => b.score - a.score);

const addData = (scores) => {
  const orderedScores = sortScores(scores);
  container.innerHTML = '';
  orderedScores.forEach((score) => {
    const li = document.createElement('li');
    li.classList.add('font-bold');
    li.innerHTML = `${score.user}: ${score.score}`;
    container.appendChild(li);
  });
};

export default addData;