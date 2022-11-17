document.addEventListener('DOMContentLoaded', () => {
    const submit = document.createElement('button');
    submit.innerText = 'Reset Timer';
    submit.addEventListener("click", timer)
    document.querySelector('body').appendChild(submit);

    function getRid (){alert("take a break!");;}
    function backToWork (){alert("back to work!");}

// setTimeout(() => {
//     getRid();
// }, 5000)
    let flag = 'work'

    function timer (){
        console.log('yes')
        console.log(flag)
        if(flag === 'work'){
            flag = 'break'
            setTimeout(() => {
                 getRid();
            }, 1000)
            console.log(flag)
        }
        else if(flag === 'break'){
            flag = 'work'
            setTimeout(() => {
                backToWork();
            }, 1000)
        }
        // return(timer())
    }

  });

// timer()


//MVP 
    //FREE TIME 
        //Functions
            //timer of 5min or 20 mins 
            //when the timer is up 
                //alert the user 
            //stretch
                //close the tab 
                //reload to the previous link
