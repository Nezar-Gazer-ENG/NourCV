function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
      section.classList.remove('active');
    });
  
    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
  }
  
  // Set the default section to "About Me"
  showSection('about');