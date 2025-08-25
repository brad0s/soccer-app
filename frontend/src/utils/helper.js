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

export const STATS_HEADLINE_MAP = {
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
  kilometersCovered: 'Kilometers Covered',
  leastConceded: 'Least Conceded',
  mostConceded: 'Most Conceded',
  numberOfSprints: 'Number of Sprints',
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
  topSpeed: 'Top Speed',
  totalShots: 'Total Shots',
  yellowCards: 'Yellow Cards',
}

export const STATS_STAT_KEY_MAP = {
  accurateLongBalls: 'accurateLongBalls',
  accuratePasses: 'accuratePasses',
  assists: 'assists',
  bigChancesCreated: 'bigChancesCreated',
  bigChancesMissed: 'bigChancesMissed',
  cleanSheet: 'cleanSheet',
  clearances: 'clearances',
  expectedAssists: 'expectedAssists',
  expectedGoals: 'expectedGoals',
  freeKickGoal: 'freeKickGoal',
  goals: 'goals',
  goalsAssistsSum: 'goalsAssistsSum',
  goalsPrevented: 'goalsPrevented',
  interceptions: 'interceptions',
  keyPasses: 'keyPasses',
  kilometersCovered: 'kilometersCovered',
  leastConceded: 'goalsConceded',
  mostConceded: 'goalsConceded',
  numberOfSprints: 'numberOfSprints',
  penaltyGoals: 'penaltyGoals',
  penaltyWon: 'penaltyWon',
  possessionLost: 'possessionLost',
  rating: 'rating',
  redCards: 'redCards',
  saves: 'saves',
  scoringFrequency: 'scoringFrequency',
  shotsOnTarget: 'shotsOnTarget',
  successfulDribbles: 'successfulDribbles',
  tackles: 'tackles',
  topSpeed: 'topSpeed',
  totalShots: 'totalShots',
  yellowCards: 'yellowCards',
};

export const STATS_DECIMAL_CATEGORIES = ['expectedAssists', 'expectedGoals', 'goalsPrevented', 'rating', 'scoringFrequency', 'kilometersCovered', 'topSpeed'];
