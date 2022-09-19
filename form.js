let firstName=document.getElementById("firstName")
let fName=document.getElementById("fName")
let fnameError=document.getElementById("fnameError")
let secondName=document.getElementById("secondName")
let sName=document.getElementById("sName")
let snameError=document.getElementById("snameError")
let otherName=document.getElementById("otherName")
let oName=document.getElementById("oName")
let othernameError=document.getElementById("othernameError")
let doB=document.getElementById("doB")
let dateofBirth=document.getElementById("dateofBirth")
let dobError=document.getElementById("dobError")
let genDer=document.getElementById("genDer")
let box1=document.getElementById("box1")
let sex1=document.getElementById("sex1")
let box2=document.getElementById("box2")
let sex2=document.getElementById("sex2")
let genderError=document.getElementById("genderError")
let eMail=document.getElementById("eMail")
let eMailbox=document.getElementById("eMailbox")
let emailError=document.getElementById("emailError")
let phoneNum=document.getElementById("phoneNum")
let number=document.getElementById("number")
let pNum=document.getElementById("pNum")
let pnumError=document.getElementById("pnumError")
let altmNum=document.getElementById("altmNum")
let altNum=document.getElementById("altNum")
let altnumError=document.getElementById("altnumError")
let cntLocal=document.getElementById("cntLocal")
let align1=document.getElementById("align1")
let region=document.getElementById("region")
let regionError=document.getElementById("regionError")
let country=document.getElementById("country")
let countries=document.getElementById("countries")
let countriesError=document.getElementById("countriesError")
let maths=document.getElementById("maths")
let mathsScore=document.getElementById("mathsScore")
let mathsError=document.getElementById("mathsError")
let english=document.getElementById("english")
let englishScore=document.getElementById("englishScore")
let englishError=document.getElementById("englishError")
let chemistry=document.getElementById("chemistry")
let chemScore=document.getElementById("chemScore")
let chemError=document.getElementById("chemError")
let physics=document.getElementById("physics")
let physicsScore=document.getElementById("physicsScore")
let physicsError=document.getElementById("physicsError")
let biology=document.getElementById("biology")
let biologyScore=document.getElementById("biologyScore")
let biologyError=document.getElementById("biologyError")
let geography=document.getElementById("geography")
let geoScore=document.getElementById("geoScore")
let geoError=document.getElementById("geoError")
let economics=document.getElementById("economics")
let ecoScore=document.getElementById("ecoScore")
let ecoError=document.getElementById("ecoError")
let art=document.getElementById("art")
let appartScore=document.getElementById("appartScore")
let appartError=document.getElementById("appartError")
let applyBtn=document.getElementById("applyBtn")
let messageT=document.getElementById("messageT")
let sX=document.getElementById("sX")

let agePoint=0
let countryPoint=0
let dob;
let age;
let ageScore;
let gradePoint=0


applyBtn.addEventListener("click", function(){

    validateForm()
    
})

function validateForm(){
    if(fName.value==""){
        fnameError.innerHTML="This field is required";
    }else{
        fnameError.innerHTML=""
    }
    if(sName.value==""){
        snameError.innerHTML="This field is required";
    }else{
        snameError.innerHTML=""
    }
    if(oName.value==""){
        othernameError.innerHTML="This field is required";
    }else{
        othernameError.innerHTML=""
    }
    if(dateofBirth.value==""){
        dobError.innerHTML="This field is required";
    }else{
        dobError.innerHTML=""
    }
    if(eMailbox.value==""){
        emailError.innerHTML="This field is required";
    }else{
        emailError.innerHTML=""
    }
    if(sX.value==""){
        genderError.innerHTML="This field is required";
    }else{
        genderError.innerHTML=""
    }
    if(pNum.value==""){
        pnumError.innerHTML="This field is required";
    }else{
        pnumError.innerHTML=""
    }
    if(altNum.value==""){
        altnumError.innerHTML="This field is required";
    }else{
        altnumError.innerHTML=""
    }
    if(region.value==""){
        regionError.innerHTML="This field is required";
    }else{
        regionError.innerHTML=""
    }
    if(countries.value==""){
        countriesError.innerHTML="This field is required";
    }else{
        countriesError.innerHTML=""
    }
    if(mathsScore.value==""){
        mathsError.innerHTML="This field is required";
    }else{
        mathsError.innerHTML=""
    }
    if(englishScore.value==""){
        englishError.innerHTML="This field is required";
    }else{
        englishError.innerHTML=""
    }
    if(chemScore.value==""){
        chemError.innerHTML="This field is required";
    }else{
        chemError.innerHTML=""
    }
    if(physicsScore.value==""){
        physicsError.innerHTML="This field is required";
    }else{
        physicsError.innerHTML=""
    }
    if(biologyScore.value==""){
        biologyError.innerHTML="This field is required";
    }else{
        biologyError.innerHTML=""
    }
    if(geoScore.value==""){
        geoError.innerHTML="This field is required";
    }else{
        geoError.innerHTML=""
    }
    if(ecoScore.value==""){
        ecoError.innerHTML="This field is required";
    }else{
        ecoError.innerHTML=""
    }
    if(appartScore.value==""){
        appartError.innerHTML="This field is required";
    }else{
        appartError.innerHTML=""

        acceptValues()
    }

}

function acceptValues(){
        todayDate = new Date()
        dob = new Date(dateofBirth.value)
        age = todayDate.getFullYear()-dob.getFullYear()

            ageprocess()
}
function ageprocess(){

    if(age >= 18 && age <= 24){
        agePoint += 100;
    }else if(age >= 25 && age <=30){
        agePoint += 80
    }else if(age >= 31 && age <=35){
        agePoint += 50

    }else if(age >= 36 && age <=40){
        agePoint += 30

    }else if(age >= 41){
        agePoint += 10

    }else{
        
    }
    countryProcess()
}
function countryProcess(){
    if(region.value=="1"){
        countryPoint += 50
    }else if(region.value=="2"){
        countryPoint += 40
    }else if(region.value=="3"){
        countryPoint += 30
    }else if(region.value=="4"){
        countryPoint += 20
    }else if(region.value=="5"){
        countryPoint += 10
    }else {
        countryPoint += 0
    }
    subjectProcess()
}
function subjectProcess(){
        subjectScore1 = Number(englishScore.value);
        console.log(subjectScore1);
    
        subjectScore2 = Number(mathsScore.value);
        console.log(subjectScore2);
    
        subjectScore3 = Number(geoScore.value)
        console.log(subjectScore3);
    
        subjectScore4 = Number(physicsScore.value)
        console.log(subjectScore4);
    
        subjectScore5 = Number(chemScore.value)
        console.log(subjectScore5);
    
        subjectScore6 = Number(appartScore.value)
        console.log(subjectScore6);
    
        subjectScore7 = Number(ecoScore.value)
        console.log(subjectScore7)
    
        subjectScore8 = Number(biologyScore.value)
        console.log(subjectScore8)
    
        totalScore = subjectScore1 + subjectScore2 + subjectScore3 + subjectScore4 + subjectScore5 + subjectScore6 + subjectScore7 + subjectScore8;
        avScore = totalScore / 8
        avScore = parseInt(avScore, 10)

        if(avScore >= 90 && avScore <= 100){
            gradePoint += 150
        }else if(avScore.value >= 85 && avScore.value <= 89){
            gradePoint += 120
        }else if(avScore.value >= 75 && avScore.value <= 84){
            gradePoint += 100
        }else if(avScore.value >= 65 && avScore.value <= 74){
            gradePoint += 80
        }else if(avScore.value >= 50 && avScore.value <= 59){
            gradePoint += 50
        }else if(avScore.value >= 40 && avScore.value <= 49){
            gradePoint += 20
        }else{
            gradeoint += 0
        }
        calculatePoint()
}

function calculatePoint(){

        totalPoint = agePoint + countryPoint + gradePoint
        console.log(totalPoint)
        messageT.innerHTML = totalPoint
        // if (totalPoint >= 180) {
        //     message = "Congratulations! your assessment score of" + totalPoint + "qualifies you for a scolarship. Proceed with necessary documentation"
        //     messageT.innerHTML = message
        // }else {
        //     message = " Sorry, your assesment score of" + totalPoint + "disqualifies you at this time for a scholarship. Do try again next time"
        //     messageT.innerHTML = message
        // }
            
    
}


