// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // GitHub button functionality
    const githubBtn = document.getElementById('github-btn');
    
    if (githubBtn) {
        githubBtn.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Show alert with GitHub message
            alert('GitHub link will be added soon!');
            
            // Optional: Add some visual feedback
            githubBtn.style.background = '#28a745';
            githubBtn.textContent = 'Coming Soon!';
            
            // Reset button after 2 seconds
            setTimeout(function() {
                githubBtn.style.background = '#004080';
                githubBtn.textContent = 'View on GitHub';
            }, 2000);
        });
    }
    
    // Add smooth scrolling to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(function(section, index) {
        section.addEventListener('click', function() {
            // Add a subtle highlight effect when section is clicked
            this.style.background = '#f8f9ff';
            
            setTimeout(function() {
                section.style.background = '#fff';
            }, 300);
        });
    });
    
    // Add fade-in animation for sections
    function fadeInSections() {
        sections.forEach(function(section, index) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            
            setTimeout(function() {
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    // Initialize fade-in animation
    fadeInSections();
    
    // Add interactive features to list items
    const listItems = document.querySelectorAll('li');
    listItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            this.style.color = '#004080';
            this.style.transition = 'color 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.color = '#333';
        });
    });
    
    // Add a scroll-to-top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #004080;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add hover effect to scroll to top button
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.background = '#0066cc';
        this.style.transform = 'scale(1.1)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.background = '#004080';
        this.style.transform = 'scale(1)';
    });
    
    // Console log for debugging
    console.log('Science Fair Portfolio loaded successfully!');
    console.log('Total sections:', sections.length);
    console.log('Total list items:', listItems.length);
    
});