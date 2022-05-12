// Global constants 

const content = document.getElementById('content');
const leftSidebar = document.createElement('div');
const rightSidebar = document.createElement('div');
const mainContent = document.createElement('div');
console.log(content);


// Set up basic layout 

// Add classes to main layout
leftSidebar.classList.add('sidebar');
leftSidebar.classList.add('left-sidebar');
rightSidebar.classList.add('sidebar');
rightSidebar.classList.add('right-sidebar');

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
    const navLinkHome = document.createElement('a');
    const navListMenu = document.createElement('li');
    const navLinkMenu = document.createElement('a');
    const navListAbout = document.createElement('li');
    const navLinkAbout = document.createElement('a');



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
    navLinkHome.textContent = 'Home';
    navLinkMenu.textContent = 'Menu';
    navLinkAbout.textContent = 'About';

    // Add elements to DOM
    content.appendChild(headerDiv);
    headerDiv.appendChild(titleText);
    headerDiv.appendChild(tabsDiv);
    tabsDiv.appendChild(navList);
    navList.appendChild(navListHome);
    navList.appendChild(navListMenu);
    navList.appendChild(navListAbout);
    navListHome.appendChild(navLinkHome);
    navListMenu.appendChild(navLinkMenu);
    navListAbout.appendChild(navLinkAbout);


});


// Module for 'Home' tab 
const homeTab = (() => {
    // Constants for DOM elements 
    
});



// Module for 'Menu' tab




// Module for 'About' tab




// Factory function for menu item cards




// Run header model
header();