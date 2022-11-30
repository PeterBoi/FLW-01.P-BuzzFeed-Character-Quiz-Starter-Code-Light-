document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.

  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");
  let q4 = document.querySelector(".q4");

  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
  let image1 = `<img src="https://upload.wikimedia.org/wikipedia/en/5/5d/Wolverine_%28James_%27Logan%27_Howlett%29.png">`;
  let image2 = `<img src="https://w7.pngwing.com/pngs/46/748/png-transparent-marvel-iron-man-illustration-iron-man-s-armor-edwin-jarvis-hulk-marvel-cinematic-universe-ironman-marvel-avengers-assemble-heroes-superhero-thumbnail.png">`;
  let image3 = `<img src="https://cdn.vox-cdn.com/thumbor/wBmruOacepVJ2QMLF4YELZwuC5A=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10225637/black_panther.jpg">`;
  let image4 = `<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dbe53e10-e9b4-4906-b687-51ca2edb6e65/df8jzas-5dba7ad6-6d6c-4fa0-ae62-b6f453c542ae.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RiZTUzZTEwLWU5YjQtNDkwNi1iNjg3LTUxY2EyZWRiNmU2NVwvZGY4anphcy01ZGJhN2FkNi02ZDZjLTRmYTAtYWU2Mi1iNmY0NTNjNTQyYWUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ezzJd2GbKGrxdi76DDfqB38Q7PWHyll9aFcoUVji5s4">`;
  let image5 = `<img src="https://www.writeups.org/wp-content/uploads/Thing-Ultimate-Marvel-Comics-Fantastic-Four-a.jpg">`;
  let result1;
  let result2;
  let result3;
  let result4;

  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.
    let userInput1 = q1.value;
    let userInput2 = q2.value;
    let userInput3 = q3.value;
    let userInput4 = q4.value;
    userInput1 = userInput1.toLowerCase();
    console.log(userInput1);
    userInput2 = userInput2.toLowerCase();
    console.log(userInput2);
    userInput3 = userInput3.toLowerCase();
    console.log(userInput3);
    userInput4 = userInput4.toLowerCase();
    console.log(userInput4);

    // task 7: create a conditional statement for the responses to Question 1 based on the user input.
    if (userInput1 === "flight") {
      result1 = 2;
    }
    else if (userInput1 === "electricity") {
      result1 = 6;
    }
    else if (userInput1 === "super regeneration") {
      result1 = 8;
    }
    else if (userInput1 === "iron suit") {
      result1 = 10;
    } else {
      result1 = 0;
    }
    console.log(result1);
    if (userInput2 === "guardians of the galaxy") {
      result2 = 2;
    }
    else if (userInput2 === "fantastic four") {
      result2 = 6;
    }
    else if (userInput2 === "x-men") {
      result2 = 8;
    }
    else if (userInput2 === "avengers") {
      result2 = 10;
    } else {
      result2 = 0;
    }
    console.log(result2);
    if (userInput3 === "venom") {
      result3 = 2;
    } else if (userInput3 === "doctor doom") {
      result3 = 6;
    } else if (userInput3 === "wolverine") {
      result3 = 8;
    } else if (userInput3 === "iron man") {
      result3 = 10;
    } else {
      result3 = 0;
    }
    console.log(result3);
    if (userInput4 === "fire") {
      result4 = 2;
    } else if (userInput4 === "silver bullet") {
      result4 = 6;
    } else if (userInput4 === "electricity") {
      result4 = 8;
    } else if (userInput4 === "magic") {
      result4 = 10;
    } else {
      result4 = 0;
    }
    console.log(result4);
    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.
    totalScore = result1 + result2 + result3 + result4;
    console.log(totalScore);
    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.
    if (totalScore <= 40 && totalScore >= 33) {
      displayResult.innerHTML = `<h1>Your Marvel Character is Wolverine</h1>`;
      let score = `<p>You scored ${totalScore}</p>`;
      displayResult.insertAdjacentHTML('beforeend', score);
      let message = `<p>James Howlett, also referred to as Logan and is best known as Wolverine, is a recurring member of the X-Men and arguably the group's most famous member. Known for his rough-and-tumble, brutish personality, he is nevertheless a good-hearted man who fights for man and mutant alike. His mutant ability allows him to protrude claws of bone out of his knuckles and incredible regenerative abilities that allow him to recover from even the most lethal wounds and slows his aging, remaining in his physical prime despite being born in the 1880s. He suffered from a troubled upbringing mired in tragedy, living a nomadic life until he was seized by the Weapon X program, which wiped his memories of his former life and fused the nearly indestructible adamantium alloy to his skeleton in an attempt to turn him into a living weapon. After debuting as Canada's first recognized superhero, Logan is later recruited by Professor Charles Xavier to join the X-Men, a group of mutants dedicated to promoting coexistence between human and mutantkind and fighting crime around the world.</p>`;
      displayResult.insertAdjacentHTML('beforeend', message);
      displayResult.insertAdjacentHTML('afterend', image1);
    }
    else if (totalScore <= 32 && totalScore >= 25) {
      displayResult.innerHTML = `<h1>Your Marvel Character is Iron Man</h1>`;
      let score = `<p>You scored ${totalScore}</p>`;
      displayResult.insertAdjacentHTML('beforeend', score);
      let message = `<p>Iron Man, or Tony Stark, is the main hero of a comic by the same name. Stark: an inventive genius, industrialist, and multi-billionaire, went to Vietnam to oversee a field test for one of his transistorized weapons, that his company Stark Industries made. While there he accidentally stepped on a booby trap, and a piece of shrapnel became lodged in his chest. Injured, Stark was captured by Communist forces under Wong-Chu, and made a prisoner. While in prison, Tony created a mechanical suit of armor so that he could escape, as well as using his technological know-how to create a pacemaker-like device to keep his heart beating, and thus, Stark could stay alive. Using the Iron Suit, Stark was able to escape the Communist forces, and once back in America, he perfected his work, making a practically invincible iron suit much like he has today.</p>`;
      displayResult.insertAdjacentHTML('beforeend', message);
      displayResult.insertAdjacentHTML('afterend', image2);
    }
    else if (totalScore <= 24 && totalScore >= 17) {
      displayResult.innerHTML = `<h1>Your Marvel Character is The Black Panther</h1>`;
      let score = `<p>You scored ${totalScore}</p>`;
      displayResult.insertAdjacentHTML('beforeend', score);
      let message = `<p>The Black Panther (T'Challa) is a fictional character appearing in publications by Marvel Comics. Created by writer-editor Stan Lee and penciller-co-plotter Jack Kirby, he first appeared in Fantastic Four #52 (July 1966). He is the first black superhero in mainstream American comics, debuting several years before such early African-American superheroes as Marvel Comics' the Falcon and Luke Cage, or DC Comics' Tyroc, Black Lightning and Green Lantern John Stewart.</p>`;
      displayResult.insertAdjacentHTML('beforeend', message);
      displayResult.insertAdjacentHTML('afterend', image3);
    }
    else if (totalScore <= 16 && totalScore >= 9) {
      displayResult.innerHTML = `<h1>Your Marvel Character is Namor</h1>`;
      let score = `<p>You scored ${totalScore}</p>`;
      displayResult.insertAdjacentHTML('beforeend', score);
      let message = `<p>Namor the Sub-Mariner (Namor McKenzie) is a fictional character that appears in comic books published by Marvel Comics. Debuting in early 1939, the character was created by writer-artist Bill Everett for Funnies Inc., one of the first "packagers" in the early days of comic books that supplied comics on demand to publishers looking to enter the new medium. Initially created for the unreleased comic Motion Picture Funnies Weekly, the Sub-Mariner first appeared publicly in Marvel Comics #1 (Oct. 1939) – the first comic book from Timely Comics, the 1930s–1940s predecessor of the company Marvel Comics. During that period, known to historians and fans as the Golden Age of Comic Books, the Sub-Mariner was one of Timely's top three characters, along with Captain America and the original Human Torch. Everett said the character's name was inspired by Samuel Taylor Coleridge's poem, "The Rime of the Ancient Mariner". Everett came up with "Namor" by writing down noble sounding names backwards and thought Roman/Namor looked the best.</p>`;
      displayResult.insertAdjacentHTML('beforeend', message);
      displayResult.insertAdjacentHTML('afterend', image4);
    }
    else if (totalScore >= 8) {
      displayResult.innerHTML = `<h1>Your Marvel Character is The Thing</h1>`;
      let score = `<p>You scored ${totalScore}</p>`;
      displayResult.insertAdjacentHTML('beforeend', score);
      let message = `<p>USAF test pilot Ben Grimm was exposed to high levels of cosmic radiation when his best friend, scientist Dr. Reed Richards took him and his friends Sue Storm and her younger brother Johnny Storm, into space in the stolen rocket; Marvel-1. The radiation mutated him and his friends, turning him into a super-strong rock like monster with a "Heart of Gold", named the Thing. Together they became the Fantastic Four, a team of adventurers who explored space, time, and alternate dimensions and saved the world along the way from science-based threats.</p>`;
      displayResult.insertAdjacentHTML('beforeend', message);
      displayResult.insertAdjacentHTML('afterend', image5);
    }
    else if (totalScore <= 7) {
      displayResult.innerHTML = `<h1>Your Marvel Character is Undetermined</h1>`;
      let score = `<p>You scored ${totalScore}</p>`;
      displayResult.insertAdjacentHTML('beforeend', score);
      let message = `<p>Error you might have entered an incorret answer or spelled something incorrectly. Please take the quiz again but be sure to spell the answer choice correctly</p>`;
      displayResult.insertAdjacentHTML('beforeend', message);
    }
  };
}