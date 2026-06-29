function submitForm() {

    const name     = document.getElementById('name').value.trim();
    const phone    = document.getElementById('phone').value.trim();
    const email    = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const dob      = document.getElementById('dob').value;
    const gender   = document.getElementById('gender').value;
    const terms    = document.getElementById('terms').checked;
    const comments = document.getElementById('comments').value.trim();

    if (!name || !phone || !email || !password || !dob || !gender) {
        alert('⚠️ Please fill all required fields!');
        return;
    }

    if (!terms) {
        alert('⚠️ Please agree to the terms and conditions!');
        return;
    }

    document.getElementById('r-name').textContent     = name;
    document.getElementById('r-phone').textContent    = phone;
    document.getElementById('r-email').textContent    = email;
    document.getElementById('r-password').textContent = '••••••••';
    document.getElementById('r-dob').textContent      = dob;
    document.getElementById('r-gender').textContent   = gender;
    document.getElementById('r-terms').textContent    = '✅ Yes';
    document.getElementById('r-comments').textContent = comments || 'No comments';

    document.getElementById('resultBox').style.display = 'block';

    document.getElementById('resultBox').scrollIntoView({ behavior: 'smooth' });
}