const makeChange = (c) => {
    if (c <= 0 || c >= 100) {
        throw new Error("Invalid input. Amount should be a positive integer less than 100 and greater than 0.");
    }

    const quarters = Math.floor(c / 25);
    const dimes = Math.floor((c % 25) / 10);
    const nickels = Math.floor(((c % 25) % 10) / 5);
    const pennies = ((c % 25) % 10) % 5;

    return { "q": quarters, "d": dimes, "n": nickels, "p": pennies };
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
