let loop = 100;

while (loop <= 200){
  if(loop % 3 === 0 && loop % 5 === 0){

    console.log("LoopyLighthouse");

  } else if(loop % 3 === 0){

    console.log("Loopy")

  } else if(loop % 5 === 0){

    console.log("Lighthouse");

  } else {

    console.log(loop);

  }
  loop++;
}