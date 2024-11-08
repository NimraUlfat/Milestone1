document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

    //type assertion
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const expertiseElement = document.getElementById('expertise') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const computerskillsElement = document.getElementById('computerskills') as HTMLInputElement;

if (profilePictureInput && nameElement && emailElement && educationElement && expertiseElement && experienceElement && skillsElement && computerskillsElement){


    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const expertise = expertiseElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    const computerskillsskills = computerskillsElement.value;

    //Picture Element

const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile): '';

    //create resume output

    const resumeOutput =`
    <h2>Resume</h2>
    <p><strong>Name :</strong>  ${name}  </P>
    <p><strong>Email :</strong> ${email}  </P>
    <p><strong>Phone Number :</strong> ${phone}  </P>


    <h3>Education</h3>
    <p id="edit-education" class="editable">${education}</p>

    <h3>Experience</h3>
    <p id="edit-experience" class="editable">${experience}</p>


    <h3>skills</h3>
    <p id="edit-skills" class="editable">${skills}</p>


    
    `;


//display the resume output
    const resumeOutputElement = document.getElementById('resumeOutput')
   if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
   } else {
    console.error('the resume output elements are missing')
   }
   
} else {
    console.error('one or more output elements are missing')
   } 




});