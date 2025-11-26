document.addEventListener('DOMContentLoaded', function(){
  const loginForm = document.getElementById('loginForm');
  const errorP = document.getElementById('error');

  // If already logged in (session) go to dashboard
  if(sessionStorage.getItem('user')){
    window.location.href = 'dashboard.html';
  }

  loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    if(!email || !password){
      showError('Please enter both email and password.');
      return;
    }

    // Demo credentials (replace with real auth in production)
    const demoEmail = 'user@example.com';
    const demoPassword = 'password123';

    if(email === demoEmail && password === demoPassword){
      sessionStorage.setItem('user', email);
      if(remember){
        localStorage.setItem('remembered', email);
      }
      window.location.href = 'dashboard.html';
    } else {
      showError('Invalid email or password. (Try user@example.com / password123)');
    }
  });

  function showError(msg){
    errorP.textContent = msg;
    setTimeout(()=>{
      errorP.textContent = '';
    }, 5000);
  }
});
