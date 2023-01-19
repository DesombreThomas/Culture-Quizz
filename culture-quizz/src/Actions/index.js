
//Action permettant la prise en compte du choix de la catégorie
export const CHANGE_CATEGORY = "CHANGE_CATEGORY";
export const changeCategory = (cat) => ({
  type: CHANGE_CATEGORY,
  cat,
});

//Action permettant la prise en compte le choix de difficulté
export const CHANGE_DIFFICULTY = "CHANGE_DIFFICULTY";
export const changeDifficulty = (level) => ({
  type: CHANGE_DIFFICULTY,
  level,
});

//Action permettant la prise en compte du choix du type de questions
export const CHANGE_TYPE = 'CHANGE_TYPE';
export const changeType = (style) => ({
  type: CHANGE_TYPE,
  style,
});

//Action permettant la prise en compte du nombre de questions
export const CHANGE_AMOUNT_OF_QUESTIONS = "CHANGE_AMOUNT_OF_QUESTIONS";
export const changeAmountOfQuestions = (amount) => ({
  type: CHANGE_AMOUNT_OF_QUESTIONS,
  amount,
});

//Action permettant l'affichage du score finale obtenu
export const CHANGE_SCORE = "CHANGE_SCORE";
export const changeScore = (score) => ({
  type: CHANGE_SCORE,
  score,
});