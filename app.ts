const myEducationButton = document.getElementById('my-education') as HTMLButtonElement;
const educationSection = document.getElementById('education') as HTMLElement;

const mySkillsButton = document.getElementById('my-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

const myWorkExperienceButton = document.getElementById('my-work-experience') as HTMLButtonElement;
const workExperienceSection = document.getElementById('work-experience') as HTMLElement;

function toggleSection(button: HTMLButtonElement, section: HTMLElement) {
    button.addEventListener('click', () => {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });

}

toggleSection(myEducationButton, educationSection);
toggleSection(mySkillsButton, skillsSection);
toggleSection(myWorkExperienceButton, workExperienceSection)