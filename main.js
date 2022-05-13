// Global constants 

const content = document.getElementById('content');
const leftSidebar = document.createElement('div');
const rightSidebar = document.createElement('div');
const mainContent = document.createElement('div');

const lineBreak = document.createElement('br');


// Set up basic layout 

// Add classes to main layout
leftSidebar.classList.add('sidebar');
leftSidebar.classList.add('left-sidebar');
rightSidebar.classList.add('sidebar');
rightSidebar.classList.add('right-sidebar');
mainContent.classList.add('main-content');

// Add basic elements to layout
content.appendChild(leftSidebar);
content.appendChild(rightSidebar);
content.appendChild(mainContent);



// Module for header
const header = (() => {
    // Constants for DOM elements
    const headerDiv = document.createElement('div');
    const titleText = document.createElement('h1');
    const tabsDiv = document.createElement('div');
    const navList = document.createElement('ul');
    const navListHome = document.createElement('li');
    const navListMenu = document.createElement('li');
    const navListAbout = document.createElement('li');



    // Add classes to header DOM elements
    headerDiv.classList.add('header');
    titleText.classList.add('title-text');
    tabsDiv.classList.add('tabs');
    navList.classList.add('nav');
    navListHome.classList.add('nav-list-item');
    navListMenu.classList.add('nav-list-item');
    navListAbout.classList.add('nav-list-item');

    // Add text to DOM elements
    titleText.textContent = "Giuseppe's Italian Restaurant";
    navListHome.textContent = 'Home';
    navListMenu.textContent = 'Menu';
    navListAbout.textContent = 'About';

    // Add elements to DOM
    content.appendChild(headerDiv);
    headerDiv.appendChild(titleText);
    headerDiv.appendChild(tabsDiv);
    tabsDiv.appendChild(navList);
    navList.appendChild(navListHome);
    navList.appendChild(navListMenu);
    navList.appendChild(navListAbout);
    
    // Event listeners for tabs 
    navListHome.addEventListener('click', () => {
        mainContent.remove();
        const mainContent = document.createElement('div');
        mainContent.classList.add('main-content');
        content.appendChild(mainContent);
        homeTab();

    })


});


// Module for 'Home' tab 
const homeTab = (() => {
    // Constants for DOM elements 
    const homeText = document.createElement('h1');
    const textBody = document.createElement('h4');
    const hoursDiv = document.createElement('div');
    const hoursList = document.createElement('ul');
    const hoursText = document.createElement('h3');
    const monThu = document.createElement('li');
    const friSat = document.createElement('li');
    const sunday = document.createElement('li');

    // Add classes to DOM elements
    textBody.classList.add('text-body')
    hoursDiv.classList.add('hours');
    hoursList.classList.add('hours-list');

    // Add text to elements 
    homeText.textContent = 'Home';
    textBody.innerHTML = "At Giuseppe's Italian restaurant, you'll find the best authentic Italian food in town! <br /><br />We are open daily for lunch and dinner. And be sure to visit us early on Sunday to try our special brunch menu, featuring our house special Eggs Benedict Bruschetta!";
    hoursText.textContent = 'Hours of Operation';
    monThu.textContent = 'Monday-Thursday: 11:00 a.m. - 8:00 p.m.';
    friSat.textContent = 'Friday-Saturday: 11:a.m. - 11:00 p.m.';
    sunday.textContent = 'Sunday: 9:00 a.m. - 7:00 p.m.';

    // Add elements to DOM
    mainContent.appendChild(homeText);
    mainContent.appendChild(textBody);
    mainContent.appendChild(hoursDiv);
    hoursDiv.appendChild(hoursText);
    hoursDiv.appendChild(hoursList);
    hoursList.appendChild(monThu);
    hoursList.appendChild(friSat);
    hoursList.appendChild(sunday);


});



// Module for 'Menu' tab
const menuTab = (() => {

    const menuCard = (title, price, description, imageUrl) => {
        return {title, price, description, imageUrl};
    };




});




// Module for 'About' tab




// Factory functions
const homeGreeting = (text) => {

}

// Hours box




// Run header model
header();
homeTab();