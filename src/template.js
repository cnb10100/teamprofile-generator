// Engineer card
const engineer = (engineerData) => {
  return `
    <div id="${engineerData.getRole()}-card" class="box card">
      <div class="box name-role engineer-name">
        <h2>${engineerData.getName()}</h2>
        <h3>Role: ${engineerData.getRole()}</h3>
      </div> 
      <div class="box employee-info">
        <ul class="list-group">
          <li class="list-group-item">Email: <a href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a></li>
          
          <li class="list-group-item">Github:
          <a href="https://www.github.com/${engineerData.getGithub()}" target="_blank">www.github.com/${engineerData.getGithub()}</a>
          </li>

          <li class="list-group-item">ID: ${engineerData.getId()}</li>
        </ul>
      </div>
    </div>
  `;
};

// Intern card
const intern = (internData) => {
  return `
    <div id="${internData.getRole()}-card" class="box card">
      <div class="box name-role intern-name">
        <h2>${internData.getName()}</h2>
        <h3>Role: ${internData.getRole()}</h3>
      </div> 
      <div class="box employee-info">
        <ul class="list-group">
          <li class="list-group-item">Email: <a href="mailto:${internData.getEmail()}">${internData.getEmail()}</a></li>
          <li class="list-group-item">School: ${internData.getSchool()}</li>
          <li class="list-group-item">ID: ${internData.getId()}</li>
        </ul>
      </div>
    </div>
  `;
};

// Manager card
const manager = (managerData) => {
  return `
    <div id="${managerData.getRole()}-card" class="box card">
      <div class="box name-role manager-name">
        <h2>${managerData.getName()}</h2>
        <h3>Role: ${managerData.getRole()}</h3>
      </div> 
      <div class="box employee-info">
        <ul class="list-group">
          <li class="list-group-item">Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${managerData.getOfficeNumber()}</li>
          <li class="list-group-item">ID: ${managerData.getId()}</li>
        </ul>
      </div>
    </div>
  `;
};

// goes through array, creates cards for each member, then combines all cards
const employeesContainer = (employeesArray) => {
  let employeeHtml = "";

  for (i = 0; i < employeesArray.length; i++) {
    if (employeesArray[i].getRole() === "Manager") {
      employeeHtml = employeeHtml + manager(employeesArray[i]);
    }
    if (employeesArray[i].getRole() === "Engineer") {
      employeeHtml = employeeHtml + engineer(employeesArray[i]);
    }
    if (employeesArray[i].getRole() === "Intern") {
      employeeHtml = employeeHtml + intern(employeesArray[i]);
    }
  }
  return employeeHtml;
};

// html page template
const template = (data) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Team Profile</title>
        <link rel="stylesheet" href="./style.css"><source src="../template.js" type="page-template">
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
      </head>
      <body>
        <header class = "container">
          <div class = "flex box justify-center my-team">
            <h1> My Software Development Team </h1>
          </div>
        </header>
        <main class = "container">
        ${employeesContainer(data)}
        </main>
      </body>
    </html>
  `;
};

module.exports = template;
