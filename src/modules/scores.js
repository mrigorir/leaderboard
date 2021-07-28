const addScores = async () => {
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hxRTUPBG6Msl3ANs8jh1/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score: parseInt(score, 10),
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  console.log(await response.json());
};

const getScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hxRTUPBG6Msl3ANs8jh1/scores/');
  const result = await response.json();
  return result;
};

export { addScores, getScores };