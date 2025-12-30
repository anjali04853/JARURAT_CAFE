// ============================================
// Cancer Awareness & Support - JavaScript
// ============================================

// Fallback quotes for offline scenarios
const fallbackQuotes = [
    {
        text: "The only way out is through.",
        author: "Robert Frost"
    },
    {
        text: "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't.",
        author: "Rikki Rogers"
    },
    {
        text: "You are braver than you believe, stronger than you seem, and smarter than you think.",
        author: "A.A. Milne"
    },
    {
        text: "Hope is the thing with feathers that perches in the soul.",
        author: "Emily Dickinson"
    },
    {
        text: "Every moment is a fresh beginning.",
        author: "T.S. Eliot"
    },
    {
        text: "The human spirit is stronger than anything that can happen to it.",
        author: "C.C. Scott"
    },
    {
        text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "You are not alone in this journey. We are here for you.",
        author: "JARURAT CAFE"
    }
];

// ============================================
// QUOTE FUNCTIONALITY
// ============================================

let currentQuoteIndex = 0;

// Fetch quote from API
async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) throw new Error('API Error');
        
        const data = await response.json();
        displayQuote(data.content, data.author);
    } catch (error) {
        console.log('Using fallback quote');
        getRandomFallbackQuote();
    }
}

// Display quote with animation
function displayQuote(text, author) {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    
    // Fade out
    quoteElement.style.opacity = '0';
    authorElement.style.opacity = '0';
    
    setTimeout(() => {
        quoteElement.textContent = text;
        authorElement.textContent = `— ${author}`;
        
        // Fade in
        quoteElement.style.opacity = '1';
        authorElement.style.opacity = '1';
    }, 300);
}

// Get random fallback quote
function getRandomFallbackQuote() {
    const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    displayQuote(randomQuote.text, randomQuote.author);
}

// Initialize quote on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial quote with smooth transition
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    
    quoteElement.style.transition = 'opacity 0.3s ease';
    authorElement.style.transition = 'opacity 0.3s ease';
    
    fetchQuote();
});

// New quote button
const newQuoteBtn = document.getElementById('new-quote-btn');
if (newQuoteBtn) {
    newQuoteBtn.addEventListener('click', fetchQuote);
}

// ============================================
// CONTACT FORM FUNCTIONALITY
// ============================================

const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate form
    if (!validateForm(name, email, message)) {
        return;
    }
    
    // Simulate form submission
    showMessage('Sending your message...', 'info');
    
    setTimeout(() => {
        // Success message
        showMessage('Thank you for reaching out! We will get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Clear message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }, 1000);
}

function validateForm(name, email, message) {
    // Check if fields are empty
    if (!name || !email || !message) {
        showMessage('Please fill in all fields.', 'error');
        return false;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return false;
    }
    
    // Validate message length
    if (message.length < 10) {
        showMessage('Message must be at least 10 characters long.', 'error');
        return false;
    }
    
    return true;
}

function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
}

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.activeElement === newQuoteBtn) {
        fetchQuote();
    }
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images if any
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

console.log('Cancer Awareness & Support - Website Loaded Successfully');
