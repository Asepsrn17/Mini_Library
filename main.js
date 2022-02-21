class personData {
    constructor(init) {
        this.init = init;
    }

    createHeader(data) {
        let open = "<thead><tr>";
        let close = "</tr></thead>";
        data.forEach((d) => {
            open += `<th>${d}</th>`;
        });

        return open + close;
    }

    createBody(data) {
        let open = "<tbody>";
        let close = "</tbody>";

        data.forEach((d) => {
            open += `
          <tr>
            <td>${d[0]}</td>
            <td>${d[1]}</td>
            <td>${d[2]}</td>
            <td>${d[3]}</td>
          </tr>
        `;
        });

        return open + close;
    }

    render(element) {
        let person =
            "<table class='table table-hover text-center'>" +
            this.createHeader(this.init.columns) +
            this.createBody(this.init.data) +
            "</table>";
        element.innerHTML = person;
    }
}

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