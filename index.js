// Write your code in this file!
function scuberGreetingForFeet (feet) {
  if (feet <= 400) {
    return "This one is on me!"
  }
  else if (feet >= 2500) {
    return 'No can do.'
  }
  else if (feet >= 2000) {
    return 'I will gladly take your thirty bucks.'
  }
};

function ternaryCheckCity (city) {
  // return (isMember ? "$2.00" : "$10.00");

  return (city == "NYC" ? 'Ok, sounds good.' :  "No go.")
  return city
};
