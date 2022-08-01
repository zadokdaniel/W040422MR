const lorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu mi eget mauris sodales auctor. Nam quis ligula tellus. Fusce faucibus at mauris sed molestie. Etiam sagittis velit lectus, sit amet volutpat metus molestie eu. Mauris felis risus, dictum ac volutpat ut, iaculis et sem. Donec nec velit massa. Vestibulum pretium, massa et gravida malesuada, mi odio molestie nunc, vel auctor tortor sapien non odio. Mauris in elit eu lorem consequat porta. Ut vitae varius metus. Suspendisse auctor diam eu ornare euismod. Pellentesque sed consequat urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum aliquet ligula, et tristique urna laoreet in. Vivamus vulputate nisi mi, vitae tempor sem pretium vitae. Suspendisse vel urna non ex tincidunt luctus vel ac justo. Ut non ex eu tortor vulputate pulvinar at ut augue.

Nam posuere ipsum a massa tristique rutrum vitae quis enim. Nunc pharetra semper nunc in fermentum. Duis id lectus pulvinar, pellentesque libero nec, finibus nibh. Cras purus mi, facilisis quis turpis et, interdum sollicitudin mi. Donec commodo at nisl eget tempus. Nam suscipit imperdiet pulvinar. Nunc vel sapien eu nibh pellentesque laoreet. Praesent placerat condimentum sapien, a maximus felis blandit eu. Quisque bibendum leo pulvinar turpis lacinia vulputate. Aenean malesuada aliquet justo a volutpat. Donec vehicula vehicula lacus, sit amet maximus erat suscipit eu. Vestibulum condimentum sed nisi nec scelerisque. Nunc ut augue sollicitudin metus scelerisque molestie non sit amet tortor. Maecenas volutpat elementum pulvinar.

Nullam pellentesque, felis molestie viverra cursus, orci est dapibus justo, nec sollicitudin lectus orci blandit urna. Ut tempus, enim bibendum porttitor elementum, quam purus pellentesque risus, vel varius mi mauris nec neque. Sed vestibulum vehicula justo sit amet luctus. Maecenas mi libero, commodo et sollicitudin vel, eleifend sit amet libero. Mauris et sagittis velit. Donec velit ex, vestibulum et malesuada placerat, sodales sed nulla. Vivamus id euismod lectus. Donec ullamcorper felis eget cursus sagittis. Nulla vitae aliquet lectus. In ac neque accumsan, sagittis elit ac, feugiat turpis. Nam porta ante nec aliquam porta.

Donec ornare lectus eget quam rhoncus, quis interdum nisl varius. Donec aliquam luctus tortor, sit amet malesuada mauris suscipit non. Aliquam semper vulputate metus quis sagittis. Fusce sed felis ut massa suscipit consequat et eu dolor. Sed orci velit, sagittis et euismod eget, tincidunt sit amet lorem. Fusce consectetur pretium bibendum. Maecenas vitae ante id enim egestas vestibulum. Donec euismod aliquam nunc tincidunt ullamcorper. Vivamus consequat sagittis augue, ac imperdiet urna pellentesque ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec odio magna, volutpat non urna et, gravida sodales nisl. Cras quis hendrerit lectus. Praesent elementum arcu risus, a accumsan nulla condimentum ullamcorper. Pellentesque congue scelerisque cursus.

Praesent vulputate tincidunt pellentesque. Quisque congue felis vel tempor vulputate. Maecenas a nulla purus. Phasellus posuere massa nibh. Sed ac egestas odio, et hendrerit sem. Duis tellus elit, imperdiet vel dapibus et, pulvinar nec lorem. Duis vitae quam at nisl interdum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in odio et elit tempus viverra. Pellentesque condimentum nisi ac ante faucibus sagittis. Nullam ac libero dolor.
`
  .replaceAll("\n", "")
  .replaceAll(",", "")
  .split(" ");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const WORD_COUNT = 50;

function generateLoremRandom(amount) {
  let result = "";
  for (let i = 0; i < amount; i++) {
    if (i > 0) {
      result += " ";
    }

    result += lorem[getRandomInt(0, lorem.length - 1)];
  }

  return result;
}

console.log(generateLoremRandom(WORD_COUNT));

