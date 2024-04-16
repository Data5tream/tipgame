const DICE_SIDES = 6;
const RESULT_CORRECTION = 3;

export interface Result {
  team1: number;
  team2: number;
}


const get_dice_result = (sides: number) => Math.floor(Math.random() * sides);

const get_team_result = () => {
  return Math.abs(get_dice_result(DICE_SIDES) + get_dice_result(4) - RESULT_CORRECTION);
}

export default (games: number = 1): Array<Result> => {
  const results: Array<Result> = [];

  for (let i=1; i<=games;i++) {
    results.push({
      team1: get_team_result(),
      team2: get_team_result(),
    })
  }

  return results;
}