const getAction = (role: "frontend" | "backend" | "fullstack") => {
    switch (role) {
        case "frontend":
            return " --> 0"
        case "backend":
            return " 0 <--"
        case "fullstack":
            return " --> 0 <--"
        default:
            break;
    }
}

console.log(getAction('fullstack'));
