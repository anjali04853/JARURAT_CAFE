// ============================================
// Form Validation Logic
// ============================================

/**
 * Validates that a name field is not empty
 * @param {string} name - The name to validate
 * @returns {object} - { isValid: boolean, message: string }
 */
function validateName(name) {
    const trimmedName = name.trim();
    if (trimmedName === '') {
        return {
            isValid: false,
            message: 'Please enter your name'
        };
    }
    return {
        isValid: true,
        message: ''
    };
}

/**
 * Validates that an email has a valid format
 * @param {string} email - The email to validate
 * @returns {object} - { isValid: boolean, message: string }
 */
function validateEmail(email) {
    const trimmedEmail = email.trim();
    
    // Check if email is empty
    if (trimmedEmail === '') {
        return {
            isValid: false,
            message: 'Please enter your email address'
        };
    }
    
    // More robust email format validation
    // Must have: local@domain.extension
    // Local part: alphanumeric, dots, hyphens, underscores (no consecutive dots)
    // Domain: alphanumeric, hyphens (no consecutive dots)
    // Extension: at least 2 characters
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(trimmedEmail)) {
        return {
            isValid: false,
            message: 'Please enter a valid email address'
        };
    }
    
    // Additional check: no consecutive dots
    if (trimmedEmail.includes('..')) {
        return {
            isValid: false,
            message: 'Please enter a valid email address'
        };
    }
    
    // Additional check: must have @ symbol
    if (!trimmedEmail.includes('@')) {
        return {
            isValid: false,
            message: 'Please enter a valid email address'
        };
    }
    
    return {
        isValid: true,
        message: ''
    };
}

/**
 * Validates that a message field is not empty
 * @param {string} message - The message to validate
 * @returns {object} - { isValid: boolean, message: string }
 */
function validateMessage(message) {
    const trimmedMessage = message.trim();
    if (trimmedMessage === '') {
        return {
            isValid: false,
            message: 'Please enter a message'
        };
    }
    return {
        isValid: true,
        message: ''
    };
}

/**
 * Validates the entire form
 * @returns {object} - { isValid: boolean, errors: { name, email, message } }
 */
function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const nameValidation = validateName(nameInput.value);
    const emailValidation = validateEmail(emailInput.value);
    const messageValidation = validateMessage(messageInput.value);
    
    const errors = {
        name: nameValidation.message,
        email: emailValidation.message,
        message: messageValidation.message
    };
    
    const isValid = nameValidation.isValid && emailValidation.isValid && messageValidation.isValid;
    
    return {
        isValid,
        errors
    };
}

/**
 * Displays validation errors in the UI
 * @param {object} errors - Object with error messages for each field
 */
function displayValidationErrors(errors) {
    const nameErrorEl = document.getElementById('nameError');
    const emailErrorEl = document.getElementById('emailError');
    const messageErrorEl = document.getElementById('messageError');
    
    nameErrorEl.textContent = errors.name;
    emailErrorEl.textContent = errors.email;
    messageErrorEl.textContent = errors.message;
}

/**
 * Clears all validation error messages
 */
function clearValidationErrors() {
    displayValidationErrors({
        name: '',
        email: '',
        message: ''
    });
}

/**
 * Displays form feedback message (success or error)
 * @param {string} message - The message to display
 * @param {string} type - 'success' or 'error'
 */
function displayFormFeedback(message, type) {
    const feedbackEl = document.getElementById('formFeedback');
    feedbackEl.textContent = message;
    feedbackEl.className = `form-feedback ${type}`;
}

/**
 * Clears form feedback message
 */
function clearFormFeedback() {
    const feedbackEl = document.getElementById('formFeedback');
    feedbackEl.textContent = '';
    feedbackEl.className = 'form-feedback';
}

/**
 * Clears all form fields
 */
function clearFormFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

// ============================================
// Quote API Integration
// ============================================

/**
 * Fallback quotes for when API fails or is unavailable
 * These provide a graceful degradation experience
 */
const FALLBACK_QUOTES = [
    {
        content: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        content: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        content: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        content: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        content: "It is never too late to be what you might have been.",
        author: "George Eliot"
    },
    {
        content: "Strength does not come from what you can do. It comes from overcoming the things you once thought you couldn't.",
        author: "Rikki Rogers"
    },
    {
        content: "You are braver than you believe, stronger than you seem, and smarter than you think.",
        author: "A.A. Milne"
    },
    {
        content: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    }
];

/**
 * Fetches a random quote from the Quotable API
 * @returns {Promise<object>} - Promise resolving to { content: string, author: string }
 */
async function fetchQuoteFromAPI() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        
        // Check if response is ok
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Validate response structure
        if (!data.content || !data.author) {
            throw new Error('Invalid API response structure');
        }
        
        return {
            content: data.content,
            author: data.author
        };
    } catch (error) {
        console.error('Error fetching quote from API:', error);
        throw error;
    }
}

/**
 * Gets a random fallback quote
 * @returns {object} - { content: string, author: string }
 */
function getRandomFallbackQuote() {
    const randomIndex = Math.floor(Math.random() * FALLBACK_QUOTES.length);
    return FALLBACK_QUOTES[randomIndex];
}

/**
 * Fetches a quote with fallback handling
 * Tries API first, falls back to local quotes on failure
 * @returns {Promise<object>} - Promise resolving to { content: string, author: string }
 */
async function fetchQuote() {
    try {
        return await fetchQuoteFromAPI();
    } catch (error) {
        console.warn('API fetch failed, using fallback quote:', error);
        return getRandomFallbackQuote();
    }
}

/**
 * Displays a quote in the UI
 * @param {object} quote - Quote object with content and author
 */
function displayQuote(quote) {
    const quoteTextEl = document.getElementById('quoteText');
    const quoteAuthorEl = document.getElementById('quoteAuthor');
    
    if (quoteTextEl && quoteAuthorEl) {
        quoteTextEl.textContent = `"${quote.content}"`;
        quoteAuthorEl.textContent = `— ${quote.author}`;
    }
}

/**
 * Shows the loading spinner
 */
function showLoadingSpinner() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.style.display = 'block';
        spinner.classList.add('active');
        spinner.setAttribute('aria-busy', 'true');
    }
}

/**
 * Hides the loading spinner
 */
function hideLoadingSpinner() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.style.display = 'none';
        spinner.classList.remove('active');
        spinner.setAttribute('aria-busy', 'false');
    }
}

/**
 * Loads and displays a new quote
 * Shows loading state while fetching
 */
async function loadNewQuote() {
    showLoadingSpinner();
    
    try {
        const quote = await fetchQuote();
        displayQuote(quote);
    } catch (error) {
        console.error('Failed to load quote:', error);
        // Display fallback quote as last resort
        displayQuote(getRandomFallbackQuote());
    } finally {
        hideLoadingSpinner();
    }
}

// ============================================
// Form Event Handlers
// ============================================

// Only initialize DOM handlers if document is available (browser environment)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contactForm');
        
        // Handle form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            const validation = validateForm();
            
            if (!validation.isValid) {
                // Display errors
                displayValidationErrors(validation.errors);
                displayFormFeedback('Please fix the errors above', 'error');
                return;
            }
            
            // Clear previous errors
            clearValidationErrors();
            
            // Form is valid - show success message
            displayFormFeedback('Thank you! Your message has been sent successfully.', 'success');
            
            // Clear form fields after a short delay
            setTimeout(() => {
                clearFormFields();
                clearFormFeedback();
            }, 2000);
        });
        
        // Add real-time validation feedback on input
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        nameInput.addEventListener('blur', function() {
            const validation = validateName(this.value);
            document.getElementById('nameError').textContent = validation.message;
        });
        
        emailInput.addEventListener('blur', function() {
            const validation = validateEmail(this.value);
            document.getElementById('emailError').textContent = validation.message;
        });
        
        messageInput.addEventListener('blur', function() {
            const validation = validateMessage(this.value);
            document.getElementById('messageError').textContent = validation.message;
        });
        
        // Initialize quote on page load
        loadNewQuote();
        
        // Handle "New Quote" button click
        const newQuoteButton = document.getElementById('newQuoteButton');
        if (newQuoteButton) {
            newQuoteButton.addEventListener('click', loadNewQuote);
        }
    });
}

// Export for Node.js/testing environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateName,
        validateEmail,
        validateMessage,
        validateForm,
        displayValidationErrors,
        clearValidationErrors,
        displayFormFeedback,
        clearFormFeedback,
        clearFormFields,
        fetchQuoteFromAPI,
        getRandomFallbackQuote,
        fetchQuote,
        displayQuote,
        loadNewQuote,
        FALLBACK_QUOTES
    };
}
