//_____________________________________________________________________________________________
//Creating a function to validate the form elements within the Contact Us Page
//Contact Us Form

function validateForm() {
    // Get the form elements
    var firstName = document.getElementById("FirstName").value;
    var lastName = document.getElementById("LastName").value;
    var cellNumber = document.getElementById("CellNumber").value;
    var province = document.getElementById("Province").value;
    var email = document.getElementById("EmailAddress").value;
    var message = document.getElementById("Message").value;
  
    // Check that the first name is not empty
    if (firstName == "") {
      alert("Please enter your first name.");
      return false;
    }
  
    // Check that the last name is not empty
    if (lastName == "") {
      alert("Please enter your last name.");
      return false;
    }
  
    // Check that the cell number is in a valid format
    var cellNumberPattern = /^\d{10}$/;
    if (!cellNumberPattern.test(cellNumber)) {
      alert("Please enter a valid cell number (10 digits).");
      return false;
    }
  
    // Check that a province is selected
    if (province == "") {
      alert("Please select your province.");
      return false;
    }
  
    // Check that the email address is in a valid format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Check that the message is not empty
    if (message == "") {
      alert("Please enter a message.");
      return false;
    }
  
    // If all checks pass, return true to submit the form
    return true;
  }


//__________________________________________________________________________________________________

window.onload = function(){

  //Index Page Information
  let Myself = "Jocelyn Atwell";
  document.getElementById("myself").innerHTML = Myself;

  let HomePagePara1 = "My name is Jocelyn Atwell. I am 23 years old. I was born and raised in the small town of Roodepan situated on the outskirts of Kimberley.";
  document.getElementById("homepagepara1").innerHTML = HomePagePara1;

  let HomePagePara2 = "I graduated with my NSC in 2017 with a Bachelors Pass which included a distinction in Computer Applications Technology, Afrikaans First Additional Language and Visual Arts. Thereafter I completed my studies at Sol Plaaitje University where I graduated with a degree in Bsc Data Science in 2021.";
  document.getElementById("homepagepara2").innerHTML = HomePagePara2;

  let HomePagePara3 = "My qualities are that I am always eager to learn, improve on my skills as well as to execute any task to the best of my ability. I am purpose driven and work well individually as well as in a group. Attributes that I could use to describe me are that I am a:";
  document.getElementById("homepagepara3").innerHTML = HomePagePara3;

  let HomePagePara4 = "My key skills are:";
  document.getElementById("homepagepara4").innerHTML = HomePagePara4;

  let MyAddress = "36 Aasvoel Street <br /> Pescodia <br /> Kimberley <br /> 8309";
  let MyAddresselement = document.querySelector(".myaddress");
  MyAddresselement.innerHTML = MyAddress;

  let MyNumber = "084 370 9469";
  let Mynumberelement = document.querySelector(".mynumber");
  Mynumberelement.innerHTML = MyNumber;

//_____________________________________________________________________________________________________________________
  //Contact Us Page Information
let ContactUsHeading = "Contact Us";
let ContactUsHeadingElement = document.getElementById("contactusheading");
ContactUsHeadingElement.innerHTML = ContactUsHeading;

  let MyEmailAddress = "jjatwell99@gmail.com";
  document.getElementById("myemailaddress").innerHTML = MyEmailAddress;

  let MycontactInfoHeading = "Contact Information of ";
  document.getElementById("mycontactinfoheading").innerHTML = MycontactInfoHeading;

  let ContactPerson = "Contact Person: ";
  document.getElementById("contactperson").innerHTML = ContactPerson;

  let ContactNumber = "Contact Number: ";
  document.getElementById("contactnumber").innerHTML = ContactNumber;

  let EmailAddress = "Email Address: ";
  document.getElementById("emailaddress").innerHTML = EmailAddress;

  let PhysicalAddress = "Physical Address: ";
  document.getElementById("physicaladdress").innerHTML = PhysicalAddress;

  let FormPara1 = "Kindly leave your contact information below:";
  document.getElementById("formpara1").innerHTML = FormPara1;

  let FormPara2 = "Rest assured we will respond as soon as we can.";
  document.getElementById("formpara2").innerHTML = FormPara2;
  
  //_________________________________________________________________________________________________________
  //About Us Page Information

  let AboutUsMainHeading = "The Biography Of Jocelyn Atwell";
  document.getElementById("aboutpagemainheading").innerHTML = AboutUsMainHeading;

  let BackgroundHeading = "Background";
  document.getElementById("backgroundheading").innerHTML = BackgroundHeading;

  let BackgroundPara1 = " Jocelyn Atwell was born on the 25th of August 1999. She grew up in the small town of Roodepan on the outskirts of Kimberley. As a 23 year old, she identifies as an introvert. Her personality type is a peace-maker. She avoids conflict at all costs, however she is confrontational as well. She is strong-willed, stubborn, creative, inquisitive, determined and hardworking. <br />Her hobbies include: <br />";
  document.getElementById("backgroundpara1").innerHTML = BackgroundPara1;

  let EducationHeading = "Education";
  document.getElementById("educationheading").innerHTML = EducationHeading;

  let HighSchoolHeading = "Kimberley Girls' High School&nbsp;&nbsp;&nbsp;2013-2017";
  document.getElementById("highschoolheading").innerHTML = HighSchoolHeading;

  let HighSchoolPara = "I attended Kimberley Girls' High School where I obtained a Bachelors pass for my matric. I passed with three distinctions, namely in Afrikaans First Additional Language (86%), Computer Applications Technology (84%) and Visual Arts (89%).";
  document.getElementById("highschoolpara").innerHTML = HighSchoolPara;

  let VarsityHeading = "Sol Plaaitje University&nbsp;&nbsp;&nbsp;2018-2021";
  document.getElementById("varsityheading").innerHTML = VarsityHeading;

  let VarsityPara = "I completed my tertiary education at Sol Plaaitje University where I graduated with my degree in Bsc Data Science.";
  document.getElementById("varsitypara").innerHTML = VarsityPara;

  let GlicamHeading = "Glicam Trading Enterprise&nbsp;&nbsp;&nbsp;2022";
  document.getElementById("glicamheading").innerHTML = GlicamHeading;

  let GlicamPara = "I completed a Basic Life Support and First Aid Procedure as well as a Garment Making course.";
  document.getElementById("glicampara").innerHTML = GlicamPara;

  let AwardsHeading = "Awards";
  document.getElementById("awardsheading").innerHTML = AwardsHeading;

  let AwardsPara = "There were a few awards I have received varying from academic achievement to my involvement in arts and culture. These are a few I could mention:";
  document.getElementById("awardspara").innerHTML = AwardsPara;

  let WorkingExperienceHeading = "Working Experience";
  document.getElementById("workingexperienceheading").innerHTML = WorkingExperienceHeading;

  let CapptionHeading = "Capption&nbsp;&nbsp;&nbsp;2022-2023";
  document.getElementById("capptionheading").innerHTML = CapptionHeading;

  let CapptionPara = " I am completing an IT internship with Capption which is a cloud-based solutions company. <br /> I used Sharepoint to develop and deploy working solutions and performed SharePoint administrative tasks. <br />I used Power BI to create visualisations on the working solutions data and embed them onto the working SharePoint solution. <br /> I used PowerApps and Dataverse to create a portal that allows external authorised users to make use of custom build database as well. <br /> One of the projects we completed was to create an Invoice Tracking System using Microsoft services tailor made for a Government Department.";
  document.getElementById("capptionpara").innerHTML = CapptionPara;

  let SkillsHeading = "Skills";
  document.getElementById("skillsheading").innerHTML = SkillsHeading;

  let TypeHeading = "Type";
  document.getElementById("typeheading").innerHTML = TypeHeading;

  let SkillLevelHeading = "skilllevelheading";
  document.getElementById("skilllevelheading").innerHTML = SkillLevelHeading;

  let ProjectsHeading = "My Projects";
  document.getElementById("projectsheading").innerHTML = ProjectsHeading;

  let ProjectPara = "There are a few projects I have done using various languages. Most, if not all of these projects were completed during my years at Sol Plaaitjie University. Below are three of the major projects I have created.";
  document.getElementById("projectpara").innerHTML = ProjectPara;

  let ColourDetectionProject = "Colour Detection Project";
  document.getElementById("colourdetectionproject").innerHTML = ColourDetectionProject;

  let DrowsinessDetectionProject = "Drowsiness Detection Project";
  document.getElementById("drowsinessdetectionproject").innerHTML = DrowsinessDetectionProject;

  let InventorySimulationProject = "Inventory Simulation Project";
  document.getElementById("inventorysimulationproject").innerHTML = InventorySimulationProject;

  let ReferencesHeading = "References";
  document.getElementsByClassName("referencesheading").innerHTML = ReferencesHeading;

  let HighSchoolName = "Kimberley Girls' High School";
  document.getElementById("highschoolname").innerHTML = HighSchoolName;

  let Principal = "Principal";
  document.getElementById("principal").innerHTML = Principal;

  let PrincipalNumber = "+27 (0)53 832 1275";
  document.getElementById("principalnumber").innerHTML = PrincipalNumber;

  let CapptionDirectorLabel = "Capption Director";
  document.getElementById("capptiondirectorlabel").innerHTML = CapptionDirectorLabel;

  let CapptionDirector = "Peter-Michael Salo";
  document.getElementById("capptiondirector").innerHTML = CapptionDirector;

  let CapptionNumber = " +27 (0)73 815 4187";
  document.getElementById("capptionnumber").innerHTML = CapptionNumber;

  let RelativeLabel = "Relative";
  document.getElementById("relativelabel").innerHTML = RelativeLabel;

  let Relative = "Michiel Koopman";
  document.getElementById("relative").innerHTML = Relative;

  let RelativeNumber = "+27 (0)74 761 3167";
  document.getElementById("relativenumber").innerHTML = RelativeNumber;


//_________________________________________________________________________________________________

document.addEventListener("DOMContentLoaded", function(){
  let AttributesList = new Array(
    {item: "Creative Thinker"},
    {item: "Service Oriented"},
    {item: "Teachable"}, 
    {item: "Learning"}, 
    {item: "Hard Worker"}
  );

  console.log(AttributesList); // check if AttributesList is correctly defined

  let ListAttributes = "<ul>";
  for(let i = 0;i < AttributesList.length; i++){
    console.log(AttributesList[i].item);
    ListAttributes += "<li>" + AttributesList[i].item + "</li>";
  }
  ListAttributes += "</ul>";
  console.log(ListAttributes); // check if ListAttributes is correctly defined
  document.getElementById("Attributes").innerHTML = ListAttributes;

  let MyKeySkillsList = new Array(
    {item: "Programming"},
    {item: "Communication"},
    {item: "Decision-Making"},
    {item: "Problem Solving"},
    {item: "Client Service"}
  );

  let ListMyKeySkills = "<ul>";
  for(let i = 0;i < MyKeySkillsList.length; i++){
    console.log(MyKeySkillsList[i].item);
    ListMyKeySkills += "<li>" + MyKeySkillsList[i].item + "</li>";
  }
  ListMyKeySkills += "</ul>";
  document.getElementById("MyKeySkills").innerHTML = ListMyKeySkills;

  let MyHobbiesList = new Array(
    {item:"Getting creative with art"},
    {item: "Dancing"},
    {item: "Skating"},
    {item: "Reading"}
  );

  let ListMyHobbies = "<ul>";
  for(let i = 0;i < MyHobbiesList.length; i++){
    console.log(MyHobbiesList[i].item);
    ListMyHobbies += "<li>" + MyHobbiesList[i].item + "</li>";
  }
  ListMyHobbies += "</ul>";
  document.getElementById("MyHobbies").innerHTML = ListMyHobbies;
});

let AwardsList = new Array(
  {item: "I was the head girl at Pescodia Primary School in 2012"},
  {item: "Diamond Award at the MADDs Festival in 2015 for an art project"},
  {item: "I received an award for the most promising art student in 2017, and"},
  {item: "Half Colours for performing well in my academics in 2017"}
);

let ListAwards = "<ul>";
for(let i = 0; i < AwardsList.length; i++){
  console.log(AwardsList[i].item);
  ListAwards += "<li>" + AwardsList[i].item + "</li>";
}
ListAwards += "</ul>";
document.getElementById("MyAwards").innerHTML = ListAwards;

let ProjectsList = new Array(
  {item: ColourDetectionProject},
  {item: DrowsinessDetectionProject},
  {item: InventorySimulationProject}
);

let ListProject = "<ul>";
for(let i=0; i < ProjectsList.length; i++){
  console.log(ProjectsList[i].item);
  ListProject += "<li>" + ProjectsList[i].item + "</li>";
}
ListProject += "</ul>";
document.getElementById("projectslist").innerHTML = ListProject;

//declaring each skill type to its own specific level

let pythonLevel = 4.00;
let rstudioLevel = 3.00;
let matlabLevel = 4.00;
let powerbiLevel = 4.00;
let powerappsLevel = 4.00;
let dataverseLevel = 4.00;
let sharepointLevel = 5.00;
let htmlLevel = 3.00;
let cssLevel = 3.00;
let javascriptLevel = 2.00;

//Displaying the Skill level variables in the main document using the variables

document.getElementById("pythonskillLevel").innerHTML = pythonLevel;
document.getElementById("rstudioskillLevel").innerHTML = rstudioLevel;
document.getElementById("matlabskillLevel").innerHTML = matlabLevel;
document.getElementById("powerbiskillLevel").innerHTML = powerbiLevel;
document.getElementById("powerappsskillLevel").innerHTML = powerappsLevel;
document.getElementById("dataverseskillLevel").innerHTML = dataverseLevel;
document.getElementById("sharepointskillLevel").innerHTML = sharepointLevel;
document.getElementById("htmlskillLevel").innerHTML = htmlLevel;
document.getElementById("cssskillLevel").innerHTML = cssLevel;
document.getElementById("javascriptskillLevel").innerHTML = javascriptLevel;

//___________________________________________________________________________________________________________

//Change the colour of the skill level depending on what the skill level is out of range of 5.
//Level 1,2: Red, Level 3: Yellow, Level 4,5: Green

//Define variables for each skill level

var pythonLevelElement = document.getElementById("pythonskillLevel");
var rstudioLevelElement = document.getElementById("rstudioskillLevel");
var matlabLevelElement = document.getElementById("matlabskillLevel");
var powerbiLevelElement = document.getElementById("powerbiskillLevel");
var powerappsLevelElement = document.getElementById("powerappsskillLevel");
var dataverseLevelElement = document.getElementById("dataverseskillLevel");
var sharepointLevelElement = document.getElementById("sharepointskillLevel");
var htmlLevelElement = document.getElementById("htmlskillLevel");
var cssLevelElement = document.getElementById("cssskillLevel");
var javascriptLevelElement = document.getElementById("javascriptskillLevel");

// Define function to change font color based on skill level

function setFontColor(skillLevelElement, skillLevel){
    if (skillLevel == 1 || skillLevel == 2) {
      skillLevelElement.style.color = "red";
    } else if (skillLevel == 3) {
      skillLevelElement.style.color = "yellow";
    } else if (skillLevel == 4 || skillLevel == 5) {
      skillLevelElement.style.color = "green";
    }
}

// Call setFontColor function for each skill level element
setFontColor(pythonLevelElement, pythonLevel);
setFontColor(rstudioLevelElement, rstudioLevel);
setFontColor(matlabLevelElement, matlabLevel);
setFontColor(powerbiLevelElement, powerbiLevel);
setFontColor(powerappsLevelElement, powerappsLevel);
setFontColor(dataverseLevelElement, dataverseLevel);
setFontColor(sharepointLevelElement, sharepointLevel);
setFontColor(htmlLevelElement, htmlLevel);
setFontColor(cssLevelElement, cssLevel);
setFontColor(javascriptLevelElement, javascriptLevel);

//___________________________________________________________________________________
//The Links that Take you to the Project Documents

//1.Colour Detection Project

// get the heading element by its ID
//const Project1 = document.getElementById("colourdetectionproject");

// create the link element and set its attributes
const link1 = document.createElement("a");
link1.setAttribute("href", "https://en.wikipedia.org/wiki/GitHub");
link1.setAttribute("target", "_blank");

// set the text content of the link
//link1.textContent = Project1.textContent;
link1.textContent = ColourDetectionProject.textContent;

// replace the heading element with the link element
//Project1.parentNode.replaceChild(link1, Project1);
ColourDetectionProject.parentNode.replaceChild(link1,ColourDetectionProject);

//2.Drowsiness Detection System

// get the heading element by its ID
//const Project2 = document.getElementById("DrowsinessDetectionProject");

// create the link element and set its attributes
const link2 = document.createElement("a");
link2.setAttribute("href", "https://en.wikipedia.org/wiki/GitHub");
link2.setAttribute("target", "_blank");

// set the text content of the link
//link2.textContent = Project2.textContent;
link2.textContent = DrowsinessDetectionProject.textContent;

// replace the heading element with the link element
//Project2.parentNode.replaceChild(link2, Project2);
DrowsinessDetectionProject.parentNode.replaceChild(link2,DrowsinessDetectionProject);

//3.Inventory Simulation System

// get the heading element by its ID
//const Project3 = document.getElementById("InventorySimulationProject");

// create the link element and set its attributes
const link3 = document.createElement("a");
link3.setAttribute("href", "https://en.wikipedia.org/wiki/GitHub");
link3.setAttribute("target", "_blank");

// set the text content of the link
//link3.textContent = Project3.textContent;
link3.textContent = InventorySimulationProject.textContent;

// replace the heading element with the link element
//Project3.parentNode.replaceChild(link3, Project3);
InventorySimulationProject.parentNode.replaceChild(link3,InventorySimulationProject);
}
