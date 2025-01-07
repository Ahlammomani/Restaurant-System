function Customer(name, password, dob, gender, orderType, size, phone, email) {
    this.name = name;
    this.password = password;
    this.dob = dob;
    this.gender = gender;
    this.orderType = orderType;
    this.size = size;
    this.phone = phone;
    this.email = email;
}

function renderCard(customer) {
    const container = document.getElementById('cardsContainer');
    const card = document.createElement('div');
    card.className = 'card m-2 p-2';
    card.style.width = '18rem';

    card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">Name: ${customer.name}</h5>
            <img class="card-img" src="pic 7777777777.jpg">
            <p class="card-text">Password: *****</p>
            <p class="card-text">Date of Birth: ${customer.dob}</p>
            <p class="card-text">Gender: ${customer.gender}</p>
            <p class="card-text">Order Type: ${customer.orderType.join(', ')}</p>
            <p class="card-text">Size: ${customer.size}</p>
            <p class="card-text">Phone: ${customer.phone}</p>
            <p class="card-text">Email: ${customer.email}</p>
        </div>
    `;
    container.appendChild(card);
}

document.getElementById('click').addEventListener('click', () => {
    const name = document.getElementById('Name').value;
    const password = document.getElementById('Password').value;
    const dob = document.getElementById('Date of Birth').value;
    const gender = document.getElementById('Gender').value;
    const phone = document.getElementById('Phone number').value;
    const email = document.getElementById('Email').value;

    // Validation rules

    // 1. Username: no spaces
    if (/\s/.test(name)) {
        alert('Username must not contain spaces.');
        return;
    }

    // 2. Password: at least 8 characters, 1 number, 1 uppercase, 1 special character
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        alert('Password must be at least 8 characters long, with at least 1 number, 1 uppercase letter, and 1 special character.');
        return;
    }

    // 3. Birthday: YYYY-MM-DD format
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
        alert('Birthday must be in the format YYYY-MM-DD.');
        return;
    }

    // 4. Email: valid email format
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // 5. Phone: 10 digits starting with 07
    if (!/^07\d{8}$/.test(phone)) {
        alert('Phone number must be 10 digits and start with 07.');
        return;
    }

    // Check if customer already exists
    const existingCustomer = JSON.parse(localStorage.getItem('customer'));
    if (existingCustomer && existingCustomer.name === name) {
        alert('User already exists!');
        return;
    }

    const orderType = Array.from(document.querySelectorAll('input[name="order"]:checked')).map(input => input.value);
    const size = document.querySelector('input[name="size"]:checked')?.value;

    if (!orderType.length || !size) {
        alert('Please select at least one order type and size.');
        return;
    }

    const customer = new Customer(name, password, dob, gender, orderType, size, phone, email);

    
    localStorage.setItem('customer', JSON.stringify(customer));

    
    renderCard(customer);
});
