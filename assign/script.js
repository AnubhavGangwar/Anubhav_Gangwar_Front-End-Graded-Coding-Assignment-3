let Time_limit  = 60;
let minute = Math.round(Time_limit/60);
let timer;
let timeElasped=0;
let totalCharacter=0;
let errors = 0;
let correct= 0;
let accuracy = 100;
let wpm=0;
let cpm=0;
let quates = ["If you don't share someone's pain, you can never understand them.","When a man learns to love he must bear the risk of hatred","It is only through the eyes of others that our lives have any meaning","Growth occurs when one goes beyond one’s limits. Realizing that is also part of training"];
let text = quates[Math.floor(Math.random() * quates.length)];
console.log(text);

let newText01 ;
let Text01Resoult  = 0;
let newValue = 0;
let preValue = 0;
function startTest() {
    timer = setInterval(initTime ,1000);
    document.getElementById("testInfo").innerHTML =text;
    errors=0;
    accuracy=0;
    wpm=0;
    cpm=0;
    time=60;
}
function textCheck()
{
    newText01 = document.getElementById("inputText").value;
    if (text == newText01)
    {
        Text01Resoult = 1;
        initTime();
    }
}


document.getElementById("inputText").oninput = function() {check()};

function check() 
{
    textCheck();

    let valuees = event.inputType;
    console.log(valuees);
        if( valuees == "deleteContentBackward" ){
            console.log("backspace pressed");   
            newValue--;  
            console.log(newValue); 
        }
        else
        {   
            totalCharacter+=1;
            newText = document.getElementById("inputText").value;
            // console.log(newValue[]);
            if(newValue == 0 || newValue > preValue) {
                if(newText[newValue] == text[newValue])
                {
                    console.log("currect");
                    newValue+=1;
                    correct+=1;
                    console.log(newValue);
                }
                else
                {
                    console.log("incurroct");
                    errors+=1;
                    document.getElementById("errors").innerHTML = errors;
                    newValue+=1;
                    //console.log(errors);
                    
                    console.log(newValue);
                    // totalCharacter--;
                }   
                textLength = text.length;
                    correctAnser = textLength - errors;
                    accuracyTemp = (correctAnser/textLength)* 100;
                    accuracy = Math.round(accuracyTemp);
                    document.getElementById("accuracy").innerHTML = accuracy; 
            }
        }

    //   document.getElementById("inputText").style.backgroundColor = "red";
}

function initTime()
{
    if(Time_limit <= 0 || Text01Resoult == 1)
     {
        document.getElementById("inputText").readOnly = true;
        clearInterval(timer);
        
        cpm  =   (totalCharacter/minute);
        wpm  =  cpm/5;
        // wpm  =  ((totalCharacter/5)/minute);
        document.getElementById('reset').style ="display:block";
        document.getElementById('cpmDiv').style ="display:flex";
        document.getElementById('wpmDiv').style ="display:flex";
        document.getElementById("cpm").innerHTML = cpm;
        document.getElementById("wpm").innerHTML = wpm;
    }   
    else{
        Time_limit--;
        document.getElementById("time").innerText = Time_limit +"s";
        // time.innerText = Time_limit +"s";
    }

}