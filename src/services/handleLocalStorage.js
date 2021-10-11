export const saveTokenLocal = (token) => {
  localStorage.setItem('token', token);
};

export const savePlayerDataLocal = (player) => {
  localStorage.setItem('player', JSON.stringify(player));
};
