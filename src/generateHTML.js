const fs = require('fs');

let htmlStart = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <title>Page Title</title>
  </head>
  <body>
`;

const htmlEnd = `
  </body>
</html>`;

// Takes the data and creates a big string to send back to the main javascript class
function generateHTML(fileName, data) {
    console.log(data);
    let html = htmlStart;
    for (let i = 0; i < data.length; i++) {
        html = html + `<div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${data[i].name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${data[i].role}</h6>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${data[i].id}</li>
            <li class="list-group-item">${data[i].email}</li>
            <li class="list-group-item">${data[i].githubUsername || data[i].school || data[i].officeNumber}</li>
          </ul>
        </div>
        </div>
        `;
    }
    html = html + htmlEnd;
    writeToFile(fileName, html);
};

// Write the data to a fileName
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully");
        }
    });
};

module.exports = {
  generateHTML
};