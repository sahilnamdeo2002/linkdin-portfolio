document.getElementById('reload-link').addEventListener('click', function() {
    window.location.href = './project.html'; 
  });

  document.addEventListener("DOMContentLoaded", function() {
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;

    // Function to toggle between light and dark mode
    const toggleMode = () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        if (isDarkMode) {
            modeToggle.src = modeToggle.getAttribute('src-dark');
        } else {
            modeToggle.src = modeToggle.getAttribute('src-light');
        }
        // Store the current mode preference in localStorage
        localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
    };

    // Retrieve mode preference from localStorage
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
        modeToggle.src = modeToggle.getAttribute('src-dark');
    }

    // Event listener for mode toggle
    modeToggle.addEventListener('click', toggleMode);
});