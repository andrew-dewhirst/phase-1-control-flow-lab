let message = ''

function scuberGreetingForFeet(distance){
  if (distance < 400) {
    message = 'This one is on me!';
  } else if (2000 < distance && distance < 2500) {
    message = 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
    message = 'No can do.';
  }
  return message;
}

function ternaryCheckCity(city){
  return city == 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tipAmount){
  switch(tipAmount) {
    case 'generous':
      message = 'Thank you so much.';
      break;
    case 'not as generous':
      message = 'Thank you.';
      break;
    default:
      message = 'Bye.';
  }
  return message;
}