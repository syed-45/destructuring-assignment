interface Scholar {
  firstName: string;
  lastName: string;
  cohortNumber: number;
}

function introduceScholar({fName: string, lName: string, cohortNumber: number}): string {
  // complete function
  // use object destructuring, for practice!
  return "this is " + fname "from cohort " + cohortNumber;
}

export default introduceScholar;
