# Employee Management System

This project was generated with [Angular CLI] version 17.3.7.

## Getting Started

Before running the project, you need to install the required Node.js packages:

run the command : 
```bash
npm install
```

This command will install all the necessary dependencies for the project.

## Technology Stack

### UI Frameworks
- **PrimeNG**: Used for UI components and styling
- **Bootstrap**: Used for responsive design and layout

### Internationalization
- **Transloco**: Implemented for multi-language support and RTL/LTR alignment

#### Why Transloco?
Transloco was chosen because it provides:
- **Lazy Loading**: Efficient loading of translation files only when needed
- **RTL/LTR Support**: Automatic text alignment for different languages
- **Future-Proof**: Easy to add new languages without code changes

### Dynamic Components
- **Dynamic Ref**: Used for implementing add and edit employee popup functionality, providing a flexible and reusable approach for modal dialogs

### Shared Components
The following components are built in the shared module to ensure reusability across the application:
- **Alert Component**: Reusable alert/notification system
- **Employee Card Component**: Reusable employee display card
- **Smart Filters Component**: Reusable filtering functionality

These components are designed to be modular and reusable, eliminating the need to duplicate code when using them in different parts of the application.

### Additional Features
- **Add New Employee Button**: Although not part of the original requirements, an "Add New Employee" button was implemented using the same form component used for editing employees. This was a straightforward addition since the form logic was already in place and could be easily reused for creating new employee records.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

