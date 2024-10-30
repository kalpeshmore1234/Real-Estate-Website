// Function to animate the counter
function animateCounter(targetNumber, element) {
    let startNumber = 0;
    const duration = 2000; // Duration in milliseconds
    const stepTime = Math.abs(Math.floor(duration / targetNumber));
    
    const timer = setInterval(() => {
        startNumber += 1;
        element.innerText = startNumber + "+"; // Add the plus sign

        if (startNumber === targetNumber) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Intersection Observer to detect when the section is in view
const counterSection = document.querySelector('.counter-section');

// Target numbers for each score element
const targetNumbers = [50, 75, 100, 125]; // You can customize these values

// Get all score elements
const scoreElements = document.querySelectorAll('.score');

// Create an observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Start animating each score element with its target number
            scoreElements.forEach((element, index) => {
                animateCounter(targetNumbers[index], element);
            });
            observer.unobserve(counterSection); // Stop observing after counting
        }
    });
}, { threshold: 0.5 });

// Start observing the counter section
observer.observe(counterSection);




// Property click
const propertyDropdown = document.getElementById('propertyDropdown');
    const dropdownList = document.getElementById('dropdownList');
    const arrowImage = document.getElementById('arrowImage');
    const selectedProperty = document.getElementById('selectedProperty');

    // Toggle dropdown and rotate arrow on click
    propertyDropdown.addEventListener('click', function () {
        const isDropdownVisible = dropdownList.style.display === 'block';
        dropdownList.style.display = isDropdownVisible ? 'none' : 'block';
        arrowImage.classList.toggle('rotate-180', !isDropdownVisible);
    });

    // Function to select a property and update main block text
    function selectProperty(property) {
        selectedProperty.textContent = property;  // Update main block text
        dropdownList.style.display = 'none';      // Close dropdown
        arrowImage.classList.remove('rotate-180'); // Reset arrow rotation
    }

// Property End




// City Dropdown Logic
const cityDropdown = document.getElementById('cityDropdown');
const cityDropdownList = document.getElementById('cityDropdownList');
const cityArrow = document.getElementById('cityArrow');
const selectedCity = document.getElementById('selectedCity');

cityDropdown.addEventListener('click', function () {
    const isDropdownVisible = cityDropdownList.style.display === 'block';
    cityDropdownList.style.display = isDropdownVisible ? 'none' : 'block';
    cityArrow.classList.toggle('rotate-180', !isDropdownVisible);
});

function selectCity(city) {
    selectedCity.textContent = city;
    cityDropdownList.style.display = 'none';
    cityArrow.classList.remove('rotate-180');
}

// Close dropdowns if clicked outside
document.addEventListener('click', function (e) {
    if (!propertyDropdown.contains(e.target)) {
        propertyDropdownList.style.display = 'none';
        propertyArrow.classList.remove('rotate-180');
    }
    if (!cityDropdown.contains(e.target)) {
        cityDropdownList.style.display = 'none';
        cityArrow.classList.remove('rotate-180');
    }
});



// Toggle the sidebar and overlay
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    // Check if the sidebar is already open
    const isOpen = sidebar.style.right === '0px';
    
    if (isOpen) {
      sidebar.style.right = '-250px'; // Close sidebar
      overlay.style.opacity = '0';
      overlay.style.visibility = 'hidden';
      document.body.style.overflow = 'auto'; // Enable page scrolling
    } else {
      sidebar.style.right = '0'; // Open sidebar
      overlay.style.opacity = '1';
      overlay.style.visibility = 'visible';
      document.body.style.overflow = 'hidden'; // Disable page scrolling
    }
  }
  
  