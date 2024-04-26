function addNewWEField(){
    console.log("Adding new field");
   let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");

    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weobj = document.getElementById('we');
    let webtnobj = document.getElementById('btnWE');
    

    weobj.insertBefore(newNode , webtnobj);
}



function addNewAEField(){
    console.log("Adding new field");
   let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aeField");
    newNode.classList.add("mt-2");

    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aeobj = document.getElementById('ae');
    let aebtnobj = document.getElementById('btnAE');

    aeobj.insertBefore(newNode, aebtnobj);

}


function addNewPRField(){
    console.log("Adding new field");
   let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("prField");
    newNode.classList.add("mt-2");

    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aeobj = document.getElementById('pr');
    let aebtnobj = document.getElementById('btnPR');

    aeobj.insertBefore(newNode, aebtnobj);
}


function addNewCAField(){
    console.log("Adding new field");
   let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("caField");
    newNode.classList.add("mt-2");

    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aeobj = document.getElementById('ca');
    let aebtnobj = document.getElementById('btnCA');

    aeobj.insertBefore(newNode, aebtnobj);

}

// GeneratingCV

 function generateCV(){
    // console.log('generatingCV');
    let nameField = document.getElementById('nameField').value;
    let name1T = document.getElementById('name1T');
    let name2T = document.getElementById('name2T');

    name1T.innerHTML = nameField;
    name2T.innerHTML = nameField;

    document.getElementById('numberT').innerHTML = document.getElementById('contactField').value;

    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;

    document.getElementById('emailT').innerHTML = document.getElementById('emailField').value;
    document.getElementById('fbT').innerHTML = document.getElementById('fbField').value;
    document.getElementById('linkedT').innerHTML = document.getElementById('linkedField').value;
    document.getElementById('twitterT').innerHTML = document.getElementById('twitterField').value;
    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;


    let wes = document.getElementsByClassName('weField');
    
    let str ='';

    for(let e of wes){
        console.log('touch');
        str = str+` <li> ${e.value} </li>`;
    }
    document.getElementById('workT').innerHTML = str;



    let aqs = document.getElementsByClassName('aeField');
    
    let strae ='';

    for(let e of aqs){
        console.log('touch');
        strae = strae+` <li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML = strae;


    let prs = document.getElementsByClassName('prField');
    
    let strpr ='';

    for(let e of prs){
        console.log('touch');
        strpr = strpr+` <li> ${e.value} </li>`;
    }
    document.getElementById('projectT').innerHTML = strpr;


    let acs = document.getElementsByClassName('caField');
    
    let strca ='';

    for(let e of acs){
        console.log('touch');
        strca = strca+` <li> ${e.value} </li>`;
    }
    document.getElementById('certificationT').innerHTML = strca;

    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';



 }

 function printCV(){
        window.print();
 }