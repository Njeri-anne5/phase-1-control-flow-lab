const feet= 400;
let cabText;

function scuberGreetingForFeet(feet){
  let cabText;
  
  if (feet<=400){
    cabText="This one is on me!"
  }
  if(feet>2000){
    cabText="I will gladly take your thirty bucks."
  }
  if (feet>2500){
    cabText="No can do."
  }
  return(cabText);
  

  // Write your code here!
}
const city="NYC";
function ternaryCheckCity(city){
  return city==="NYC"?"Ok, sounds good.":"No go.";
}
  // Write your code here!

function switchOnCharmFromTip(tip){
  
  switch(tip){
  case "generous":
    return"Thank you so much.";
    break;
  
    case "not as generous":
      return"Thank you.";
      break;

    default:
        return("Bye.");
        break;
  }
  // Write your code here!
}