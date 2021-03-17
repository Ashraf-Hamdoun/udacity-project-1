/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
var sections = document.querySelectorAll("section"); // all sections
var navMenu = document.querySelector("#navbar__list"); // ul where links will be
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */
// build the nav



// Add class 'active' to section when near top of viewport
/* get Scroll positioin */
var onscroll = function () {
    /* The position of the portview's top */
    var scrollPositionTop = document.documentElement.scrollTop;
    // To be ensure that Scroll is inside the section
    var scrollPos = scrollPositionTop + 100;


    sections.forEach(ele => {
        /* Check the position of the section */
        if (scrollPos >= ele.offsetTop && scrollPos <= ele.offsetTop + (ele.offsetHeight * 0.25)) {
            /* The id of the section */
            var currentSection = ele.attributes.id.value;
            /* remove the active class */
            removeActiveFromSection();
            /* add the active class */
            addActiveToSection(currentSection);
        }
    });
}


// Scroll to anchor ID using scrollTO event
function GoTo(sectionTop) {
    window.scrollTo({
        top: sectionTop,
        left: 0,
        behavior: 'smooth'
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
for (let i = 0; i < sections.length; i++) {
    const mySection = sections[i];
    
    // Add sections's namea to the menu
    navMenu.innerHTML +=
    `
    <li>
    <a id="link_${mySection.id}" class="menu__link" data-link="${mySection.id}">${mySection.getAttribute('data-nav')}</a>
    </li>
    `;
}

// Scroll to section on link click
const links = document.querySelectorAll('li a');
links.forEach(link => {
    // Add an event (Click) to each link
    link.addEventListener('click', () => {
        const selectedSection = document.getElementById(link.getAttribute('data-link'))
        // Scroll to section smoothly
        // selectedSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        GoTo(selectedSection.offsetTop);
    })
});

// Set sections as active
// Remove activing class
var removeActiveFromSection = function () {
    /* Remove class from links */
    document.querySelectorAll('li a').forEach((ele) => {
        ele.classList.remove("active");
    });
    /* Remove class from sections */
    sections.forEach((ele) => {
        ele.classList.remove("your-active-class");
    });
}

// Add activing class
var addActiveToSection = function (id) {
    /* The link of the section */
    var LinkId = 'link_' + id;
    var selectedLink = document.getElementById(LinkId);
    /* Add class to active link */
    selectedLink.classList.add("active");

    /* The section */
    var selectedSection = document.getElementById(id);
    /* Add class to active section */
    selectedSection.classList.add("your-active-class");
}

