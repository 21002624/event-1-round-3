let pin = '';

function appendToPin(number) {
    if (pin.length < 8) {
        pin += number;
        updatePinDisplay();
    }
}

function clearPin() {
    pin = '';
    updatePinDisplay();
}

function updatePinDisplay() {
    document.getElementById('pin-display').innerText = '*'.repeat(pin.length);
}

function submitPin() {
    // Replace '12345678' with your correct 8-digit PIN
    if (pin === '1956') {
        window.location.href = 'final.html'; // Redirect to another page on success
    } else {
        alert('Incorrect PIN. Please try again.');
        clearPin();
    }
}
