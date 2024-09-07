var myEducationButton = document.getElementById('my-education');
var educationSection = document.getElementById('education');
var mySkillsButton = document.getElementById('my-skills');
var skillsSection = document.getElementById('skills');
var myWorkExperienceButton = document.getElementById('my-work-experience');
var workExperienceSection = document.getElementById('work-experience');
function toggleSection(button, section) {
    button.addEventListener('click', function () {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
        }
        else {
            section.style.display = 'none';
        }
    });
}
toggleSection(myEducationButton, educationSection);
toggleSection(mySkillsButton, skillsSection);
toggleSection(myWorkExperienceButton, workExperienceSection);
