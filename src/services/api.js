export const getToken = async () => {
  try {
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const { token } = await response.json();
    return token;
  } catch (err) {
    console.log(err);
  }
};

export const getQuestions = async (token) => {
  try {
    const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    const { results } = await response.json();
    return results;
  } catch (err) {
    console.log(err);
  }
};
