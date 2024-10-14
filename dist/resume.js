// document.getElementById('resume-form')?.addEventListener('submit', function(event: Event): void {
//     event.preventDefault();
//     type InputElement = HTMLInputElement | HTMLTextAreaElement;
//     function getValue(id: string): string {
//         const element: InputElement = document.getElementById(id) as InputElement;
//         return element?.value || '';
//     }
//     const firstName: string = getValue('fname');
//     const lastName: string = getValue('lname');
//     const phone: string = getValue('phone');
//     const email: string = getValue('mail');
//     const degree: string = getValue('deg');
//     const institute: string = getValue('inst');
//     const degreeYear: string = getValue('deg-year');
//     const skills: string = getValue('skill');
//     const experience: string = getValue('exp');
//     const about: string = getValue('about');
//     const resumeContent: string = `
//         <h2>Resume</h2>
//         <h3>Personal Information</h3>
//         <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <h3>Education</h3>
//         <p><strong>Degree:</strong> ${degree}</p>
//         <p><strong>Institute:</strong> ${institute}</p>
//         <p><strong>Year:</strong> ${degreeYear}</p>
//         <h3>Additional Information</h3>
//         <p><strong>Skills:</strong> ${skills}</p>
//         <p><strong>Work Experience:</strong> ${experience}</p>
//         <p><strong>About Me:</strong> ${about}</p>
//     `;
//     const resumeDiv: HTMLElement | null = document.querySelector('.resume');
//     if (resumeDiv) {
//         resumeDiv.innerHTML = resumeContent;
//     }
// });
// Function to create and structure the resume
function generateResume() {
    // Creating main container for the resume
    var resumeContainer = document.createElement('div');
    resumeContainer.style.maxWidth = '800px';
    resumeContainer.style.margin = '0 auto';
    resumeContainer.style.padding = '20px';
    resumeContainer.style.border = '2px solid #000';
    resumeContainer.style.fontFamily = 'Arial, sans-serif';
    // Header section (Name and contact info)
    var header = document.createElement('div');
    header.style.textAlign = 'center';
    header.style.borderBottom = '2px solid #000';
    header.style.paddingBottom = '10px';
    var name = document.createElement('h1');
    name.textContent = 'Your Name'; // Replace with content from HTML
    name.style.margin = '0';
    header.appendChild(name);
    var contactInfo = document.createElement('p');
    contactInfo.textContent = 'Address | Phone | Email'; // Replace with content from HTML
    header.appendChild(contactInfo);
    resumeContainer.appendChild(header);
    // Section: Objective
    var objectiveSection = document.createElement('div');
    var objectiveTitle = document.createElement('h2');
    objectiveTitle.textContent = 'Objective';
    objectiveSection.appendChild(objectiveTitle);
    var objectiveText = document.createElement('p');
    objectiveText.textContent = 'Passionate developer seeking...'; // Replace with actual content
    objectiveSection.appendChild(objectiveText);
    resumeContainer.appendChild(objectiveSection);
    // Section: Skills
    var skillsSection = document.createElement('div');
    var skillsTitle = document.createElement('h2');
    skillsTitle.textContent = 'Skills';
    skillsSection.appendChild(skillsTitle);
    var skillsList = document.createElement('ul');
    var skills = ['HTML', 'CSS', 'TypeScript', 'JavaScript']; // Replace with your HTML skills
    skills.forEach(function (skill) {
        var skillItem = document.createElement('li');
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });
    skillsSection.appendChild(skillsList);
    resumeContainer.appendChild(skillsSection);
    // Section: Experience
    var experienceSection = document.createElement('div');
    var experienceTitle = document.createElement('h2');
    experienceTitle.textContent = 'Experience';
    experienceSection.appendChild(experienceTitle);
    var experienceText = document.createElement('p');
    experienceText.textContent = 'Job Title - Company Name - Dates of Employment'; // Replace with content from HTML
    experienceSection.appendChild(experienceText);
    resumeContainer.appendChild(experienceSection);
    // Section: Education
    var educationSection = document.createElement('div');
    var educationTitle = document.createElement('h2');
    educationTitle.textContent = 'Education';
    educationSection.appendChild(educationTitle);
    var educationText = document.createElement('p');
    educationText.textContent = 'Degree - University Name - Year'; // Replace with content from HTML
    educationSection.appendChild(educationText);
    resumeContainer.appendChild(educationSection);
    // Append the resumeContainer to the body or target div
    document.body.appendChild(resumeContainer);
}
// Call the function to generate the resume when the page loads
document.addEventListener('DOMContentLoaded', generateResume);
