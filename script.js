// Home 
const welcome = document.getElementById('welcome-msg');
if (welcome) {
  welcome.textContent = "Welcome, Elham!";
}
//  profile 

const btnEmail = document.getElementById('btn-email');
const btnPhone = document.getElementById('btn-phone');
const btnHide = document.getElementById('btn-hide');
const contactInfo = document.getElementById('contact-info');

if (btnEmail && btnPhone && btnHide && contactInfo) {
  btnEmail.addEventListener('click', () => {
    document.getElementById('email-info').style.display = 'block';
    document.getElementById('phone-info').style.display = 'none';
    contactInfo.classList.remove('hidden');
  });

  btnPhone.addEventListener('click', () => {
    document.getElementById('phone-info').style.display = 'block';
    document.getElementById('email-info').style.display = 'none';
    contactInfo.classList.remove('hidden');
  });

  btnHide.addEventListener('click', () => {
    contactInfo.classList.add('hidden');
  });
}
const statusBtn = document.getElementById('update-status');
if (statusBtn) {
  statusBtn.addEventListener('click', () => {
    const input = document.getElementById('status-input').value;
    if (input) {
      document.getElementById('status').textContent = input;
    }
  });
}
// Courses 
let courses = ['Math', 'Science', 'History', 'Chimestry', 'Pashto', 'Dari'];
function renderCourses() {
  const list = document.getElementById('course-list');
  if (!list) return;
  list.innerHTML = '';
  for (let course of courses) {
    const li = document.createElement('li');
    li.textContent = course;
    list.appendChild(li);
  }
}
const addCourseBtn = document.getElementById('add-course');

if (addCourseBtn) {
  addCourseBtn.addEventListener('click', () => {
    const input = document.getElementById('new-course').value.trim();
    if (input) {
      courses.push(input);
      renderCourses();
      document.getElementById('new-course').value = '';
    }
  });
}
renderCourses();

// Contact
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert("All fields are required!");
    } else {
      alert("Message sent successfully!");
      form.reset();
    }
  });
}
