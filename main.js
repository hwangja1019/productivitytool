// var contents = document.getElementById('contents');

// contents.parentNode.removeChild(contents);
function replacePage (){
const bodyReplacer = document.querySelector('body');
bodyReplacer.innerHTML = ``;

// const submit = document.createElement('button');
// submit.innerText = 'Reset Timer';
bodyReplacer.innerHTML = "<button>Reset Timer</button>";
// bodyReplacer.appendChild(submit);
const submit = document.querySelector('button');
submit.addEventListener("click", timer);
}

let flag = 'work'

let virgin = true
function firstTime(){
    if(virgin === true && flag === 'work'){
        setTimeout(() => {
            audio.play();
            replacePage()
            backToWork();
            // replacePage ()
        }, 1000)
    }
        else if (virgin === true && flag === 'break'){
            setTimeout(() => {
                audio.play();
                replacePage()
                backToWork();
                // replacePage ()
            }, 1000)
        }
        virgin = false;

}

document.addEventListener('DOMContentLoaded', () => {
    
//     function getRid (){alert("take a break!");}
//     function backToWork (){alert("back to work!");}

//     let count = 0
//     let obj = {0: 'https://www.youtube.com/watch?v=inpok4MKVLM',
//                 1: 'https://www.youtube.com/watch?v=8w8vuM98kk8',
//                 2: 'https://www.youtube.com/watch?v=dF965ll2J0c',
//                 3: 'https://www.youtube.com/watch?v=fq7xaLY7_Zs'
//                 }
//     function site(){
//         window.open(obj[count])
//         count++
//     }

//     var audio = new Audio('https://audio.jukehost.co.uk/dNk7S6727oy7D6dEf5DQIs6hEi0O6ODs');

// // setTimeout(() => {
// //     getRid();
// // }, 5000)


  });

  function getRid (){alert("take a break!");}
    function backToWork (){alert("back to work!");}

    let count = 0
    let obj = {0: 'https://www.youtube.com/watch?v=inpok4MKVLM',
                1: 'https://www.youtube.com/watch?v=8w8vuM98kk8',
                2: 'https://www.youtube.com/watch?v=dF965ll2J0c',
                3: 'https://www.youtube.com/watch?v=fq7xaLY7_Zs'
                }
    function site(){
        window.open(obj[count])
        count++
    }

    var audio = new Audio('https://audio.jukehost.co.uk/dNk7S6727oy7D6dEf5DQIs6hEi0O6ODs');

// setTimeout(() => {
//     getRid();
// }, 5000)

//   let flag = 'work'

  function timer (){
      console.log('yes')
      console.log(flag)
      if(flag === 'work'){
          flag = 'break'
          setTimeout(() => {
              audio.play();
               getRid();
               site();
               replacePage ()
          }, 1000)
          console.log(flag)
      }
      else if(flag === 'break'){
          flag = 'work'
          setTimeout(() => {
              audio.play();
              backToWork();
              replacePage ()
          }, 1000)
      }
      // return(timer())
  }
// timer()
firstTime()

//MVP 
    //FREE TIME 
        //Functions
            //timer of 5min or 20 mins 
            //when the timer is up 
                //alert the user 
            //stretch
                //close the tab 
                //reload to the previous link
