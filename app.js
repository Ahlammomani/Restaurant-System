function Customer(name, password, dob, gender, orderType, size, phone) {
    this.name = name;
    this.password = password;
    this.dob = dob;
    this.gender = gender;
    this.orderType = orderType;
    this.size = size;
    this.phone = phone;
}

function renderCard(customer) {
    const container = document.getElementById('cardsContainer');
    const card = document.createElement('div');
    card.className = 'card m-2 p-2';
    card.style.width = '18rem';

    card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">Name: ${customer.name}</h5>
            <p class="card-text">Password: *****</p>
            <p class="card-text">Date of Birth: ${customer.dob}</p>
            <p class="card-text">Gender: ${customer.gender}</p>
            <p class="card-text">Order Type: ${customer.orderType.join(', ')}</p>
            <p class="card-text">Size: ${customer.size}</p>
            <p class="card-text">Phone: ${customer.phone}</p>
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

    const orderType = Array.from(document.querySelectorAll('input[name="order"]:checked')).map(input => input.value);
    const size = document.querySelector('input[name="size"]:checked')?.value;

   

    const customer = new Customer(name, password, dob, gender, orderType, size, phone);

    // تخزين البيانات في localStorage مباشرة
    localStorage.setItem('customer', JSON.stringify(customer));

    // عرض البطاقة
    renderCard(customer);
});


