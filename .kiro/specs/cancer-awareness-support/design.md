# Design Document: Cancer Awareness & Support Web Page

## Overview

The Cancer Awareness & Support web page is a responsive, single-page application built with HTML, CSS, and JavaScript. It features a welcoming landing page with a banner image, a functional contact form with validation, and real-time inspirational quotes fetched from a public API. The design prioritizes accessibility, responsiveness, and visual appeal to create a supportive and professional user experience.

## Architecture

The application follows a client-side architecture with the following components:

```
┌─────────────────────────────────────────┐
│     Browser / Client Environment        │
├─────────────────────────────────────────┤
│  HTML Structure (index.html)            │
│  ├─ Header with Banner                  │
│  ├─ Main Content Section                │
│  ├─ Contact Form Section                │
│  └─ Quotes Section                      │
├─────────────────────────────────────────┤
│  CSS Styling (styles.css)               │
│  ├─ Responsive Grid System              │
│  ├─ Color Scheme & Typography           │
│  └─ Animations & Transitions            │
├─────────────────────────────────────────┤
│  JavaScript Logic (script.js)           │
│  ├─ Form Validation                     │
│  ├─ API Integration (Quotes)            │
│  └─ Event Handlers                      │
└─────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────┐
│   External Quote API                    │
│   (quotable.io or similar)              │
└─────────────────────────────────────────┘
```

## Components and Interfaces

### 1. Header Component
- **Purpose**: Display banner image and welcome message
- **Visual Design**:
  - Full-width hero banner (height: 500px on desktop, 300px on mobile)
  - Gradient overlay (rgba(0, 0, 0, 0.4)) for text readability
  - Background image with `background-attachment: fixed` for parallax effect
  - Centered text with smooth fade-in animation on page load
  - Main heading: Large, bold, white text (font-size: 3.5rem on desktop)
  - Subheading: Elegant, lighter weight text (font-size: 1.5rem)
  - Subtle shadow effect on text for depth
- **Elements**:
  - Banner image (responsive, full-width)
  - Heading with organization name
  - Subheading with tagline
  - Navigation (optional, for future expansion)

### 2. Contact Form Component
- **Purpose**: Collect user inquiries
- **Visual Design**:
  - Card-style container with subtle shadow (box-shadow: 0 10px 40px rgba(0,0,0,0.1))
  - Soft rounded corners (border-radius: 12px)
  - Light background color (#f8f9fa)
  - Input fields with smooth focus transitions
  - Focus state: Blue border (2px solid #4a90e2) with subtle glow
  - Placeholder text in light gray (#999)
  - Submit button: Gradient background (linear-gradient(135deg, #667eea 0%, #764ba2 100%))
  - Button hover effect: Scale up (transform: scale(1.05)) with shadow enhancement
  - Success message: Green checkmark icon with smooth slide-in animation
  - Error messages: Red text with icon, shake animation on invalid submission
- **Elements**:
  - Name input field (text)
  - Email input field (email)
  - Message textarea (multi-line text)
  - Submit button
  - Success/error message display
  - Form validation feedback

### 3. Quotes Section Component
- **Purpose**: Display inspirational quotes
- **Visual Design**:
  - Centered card layout with elegant styling
  - Quote text: Large, serif font (font-size: 1.8rem, font-family: Georgia)
  - Quote marks: Large decorative quotation marks (opacity: 0.2)
  - Author attribution: Smaller, italicized text in secondary color
  - "New Quote" button: Outlined style with hover fill effect
  - Loading state: Animated spinner (rotating circle)
  - Smooth fade transitions between quotes (transition: opacity 0.5s ease-in-out)
  - Background: Subtle gradient or light pattern
- **Elements**:
  - Quote display area
  - Author attribution
  - "New Quote" button
  - Loading state indicator
  - Error fallback message

### 4. Footer Component
- **Purpose**: Display additional information
- **Visual Design**:
  - Dark background (#2c3e50) with white text
  - Centered layout with generous padding
  - Links with hover underline effect
  - Social media icons with color transitions on hover
  - Subtle top border with accent color
- **Elements**:
  - Copyright information
  - Links to resources (optional)
  - Social media links (optional)

## Data Models

### Contact Form Data
```javascript
{
  name: string,           // User's full name
  email: string,          // User's email address
  message: string,        // User's message
  timestamp: Date         // When form was submitted
}
```

### Quote Data
```javascript
{
  content: string,        // The quote text
  author: string,         // Author of the quote
  source: string          // Source API
}
```

## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

### Property 1: Form Validation Prevents Invalid Submissions
**For any** form submission attempt with invalid data (empty fields or malformed email), the system should reject the submission and display an appropriate error message without clearing the form.
**Validates: Requirements 2.2, 2.3, 2.4**

### Property 2: Valid Form Submission Clears Fields
**For any** valid form submission (all fields properly filled), the system should display a success message and clear all form fields for the next entry.
**Validates: Requirements 2.5, 2.6**

### Property 3: Quote Display Shows Valid Data
**For any** quote fetched from the API, the system should display both the quote content and author attribution in the UI.
**Validates: Requirements 3.2, 3.5**

### Property 4: API Failure Handling
**For any** failed API request, the system should display a fallback message or cached quote instead of showing an error to the user.
**Validates: Requirements 3.4**

### Property 5: Responsive Layout Adapts to Screen Size
**For any** viewport width, the system should display content appropriately (stacked on mobile, multi-column on desktop) without horizontal scrolling.
**Validates: Requirements 4.1, 4.2, 4.3**

## Error Handling

### Form Validation Errors
- **Empty Name**: Display "Please enter your name" with red icon and shake animation
- **Invalid Email**: Display "Please enter a valid email address" with red icon
- **Empty Message**: Display "Please enter a message" with red icon
- **Network Error**: Display "Unable to submit form. Please try again later." with retry button

### API Errors
- **Network Failure**: Display fallback quote with subtle "offline" indicator
- **Invalid Response**: Log error to console, display fallback quote with fade-in
- **Timeout**: Display "Unable to load quote. Please try again." with retry button

### User Feedback
- Success message: Green checkmark with "Thank you! Your message has been sent successfully." - slides in from top
- Form clears after 2 seconds with fade-out effect
- Visual feedback on button hover and click states
- Loading spinner during API calls

## Visual Design Specifications

### Color Palette
- **Primary Colors**: 
  - Deep Purple: #667eea (buttons, accents)
  - Vibrant Purple: #764ba2 (gradients, hover states)
  - Soft Blue: #4a90e2 (focus states, links)
- **Secondary Colors**:
  - Success Green: #27ae60 (success messages)
  - Error Red: #e74c3c (error messages)
  - Warning Orange: #f39c12 (warnings)
- **Neutral Colors**:
  - Dark Gray: #2c3e50 (text, footer)
  - Light Gray: #ecf0f1 (backgrounds)
  - White: #ffffff (cards, overlays)

### Typography
- **Headings**: 'Poppins' or 'Montserrat' (bold, modern)
- **Body Text**: 'Open Sans' or 'Segoe UI' (readable, clean)
- **Quotes**: 'Georgia' or 'Playfair Display' (elegant, serif)
- **Font Sizes**:
  - H1: 3.5rem (desktop), 2rem (mobile)
  - H2: 2.5rem (desktop), 1.5rem (mobile)
  - Body: 1rem (desktop), 0.95rem (mobile)
  - Small: 0.875rem

### Spacing & Layout
- **Container Max Width**: 1200px
- **Padding**: 20px (mobile), 40px (tablet), 60px (desktop)
- **Gap Between Sections**: 60px (desktop), 40px (mobile)
- **Card Padding**: 30px (desktop), 20px (mobile)

### Effects & Animations
- **Transitions**: All interactive elements use `transition: all 0.3s ease`
- **Hover Effects**: 
  - Buttons: Scale 1.05 + shadow enhancement
  - Links: Underline slide-in from left
  - Cards: Subtle lift effect (transform: translateY(-5px))
- **Animations**:
  - Page Load: Fade-in + slide-up (0.6s)
  - Form Submit: Shake on error, slide-in on success
  - Quote Change: Fade-out then fade-in (0.5s total)
  - Loading: Rotating spinner (1s rotation)

### Responsive Breakpoints
- **Mobile**: < 768px (single column, stacked layout)
- **Tablet**: 768px - 1024px (2-column where appropriate)
- **Desktop**: > 1024px (full multi-column layout)

## Testing Strategy

### Unit Tests
- Test form validation logic for each field
- Test email format validation
- Test form reset functionality
- Test quote display formatting
- Test API response parsing

### Property-Based Tests
- **Property 1**: Generate random invalid form data and verify rejection
- **Property 2**: Generate random valid form data and verify successful submission and clearing
- **Property 3**: Generate random quote objects and verify proper display
- **Property 4**: Simulate API failures and verify fallback behavior
- **Property 5**: Generate random viewport widths and verify responsive layout

### Integration Tests
- Test complete form submission flow
- Test quote fetching and display flow
- Test responsive behavior across breakpoints
- Test error recovery flows

