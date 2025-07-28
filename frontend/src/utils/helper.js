export const splitArray = (arr, desiredArrLength) => {
  // make arr length the same as desiredArrLength
  // .splice
  const originalArrLength = arr.length
  const numberNewArrs = Math.ceil(originalArrLength / desiredArrLength)
  const newArr = []
  // console.log(arr, desiredArrLength)
  for (let i = 0; i < numberNewArrs; i++) {
    const limit = arr.length >= desiredArrLength ? desiredArrLength : arr.length
    const tempArr = arr.slice(
      i * desiredArrLength,
      i * desiredArrLength + limit
    )
    // console.log(tempArr)
    newArr.push(tempArr)
  }
  return newArr
}

export const STATS_MAP = {
  accurateLongBalls: 'Accurate Long Ball',
  accuratePasses: 'Accurate Pass',
  assists: 'Assists',
  bigChancesCreated: 'Big Chances Created',
  bigChancesMissed: 'Big Chances Missed',
  cleanSheet: 'Clean Sheet',
  clearances: 'Clearances',
  expectedAssists: 'Expected Assists',
  expectedGoals: 'Expected Goals',
  freeKickGoal: 'Free Kick Goals',
  goals: 'Goals',
  goalsAssistsSum: 'Goals Assists Sum',
  goalsPrevented: 'Goals Prevented',
  interceptions: 'Interceptions',
  keyPasses: 'Key Passes',
  leastConceded: 'Least Conceded',
  mostConceded: 'Most Conceded',
  penaltyGoals: 'Penalty Goals',
  penaltyWon: 'Penalty Won',
  possessionLost: 'Possession Lost',
  rating: 'Rating',
  redCards: 'Red Cards',
  saves: 'Saves',
  scoringFrequency: 'Scoring Frequency',
  shotsOnTarget: 'Shots on Target',
  successfulDribbles: 'Successful Dribbles',
  tackles: 'Tackles',
  totalShots: 'Total Shots',
  yellowCards: 'Yellow Cards',
}
