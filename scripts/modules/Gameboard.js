export const Gameboard = (function () {
  const gameField = ["x", "o", , "x", , "o", "x", "o", ,];

  const getField = () => gameField;

  return { gameField, getField };
})();
