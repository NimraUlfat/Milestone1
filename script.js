var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var expertiseElement = document.getElementById('expertise');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var computerskillsElement = document.getElementById('computerskills');
    if (profilePictureInput && nameElement && emailElement && educationElement && expertiseElement && experienceElement && skillsElement && computerskillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var expertise = expertiseElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var computerskillsskills = computerskillsElement.value;
        //Picture Element
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        //create resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n    <p><strong>Name :</strong>  ".concat(name_1, "  </P>\n    <p><strong>Email :</strong> ").concat(email, "  </P>\n    <p><strong>Phone Number :</strong> ").concat(phone, "  </P>\n\n\n    <h3>Education</h3>\n    <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n\n    <h3>skills</h3>\n    <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n\n\n    \n    ");
        //display the resume output
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output elements are missing');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
