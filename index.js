import personData from "./table.js";

const person = new personData({
    columns: ["Name", "Usia", "Email", "No. Telp"],
    data: [
        ["Asep", 30, "asepsrn17@gmail.com", "087722747"],
        ["Bramanta", 30, "Braman14@gmail.com", "085859478"],
        ["Baimas trisudi", 20, "baimas2.co.id", "0898737888"],
        ["wahyu", 30, "wahyt24.co.id", "0857857488"],
        ["Budi", 40, "buditr34@gmail.com", "082543468"]
    ]
});

const app = document.getElementById("tableData");
    person.render(app);
