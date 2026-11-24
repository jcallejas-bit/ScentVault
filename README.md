# ScentVault – Fragrance Collection Management Application

## Project Description

ScentVault is a fragrance collection management application that allows users to organize and keep track of the fragrances they own.

Users can add fragrances to their personal collection and save information such as the fragrance name, brand, fragrance type, season, and occasion.

**Developer:** Jonathan Callejas

## Sprint 1 Goal

Allow a fragrance collector to add fragrances to their personal collection and view their saved fragrances in a collection list.

## Technologies Used

- HTML – Application structure.
- CSS – Application styling.
- JavaScript – Application functionality.
- Browser Local Storage – Saving fragrance information.

## Prerequisites

To run ScentVault, you need:

- A modern web browser such as Google Chrome, Safari, or Firefox.
- The ScentVault project files.
- Visual Studio Code (optional).
- Live Server extension for Visual Studio Code (optional).

No additional software packages or dependencies are required.

## Installation

1. Open the ScentVault GitHub repository:

   https://github.com/jcallejas-bit/ScentVault

2. Select the green **Code** button.
3. Select **Download ZIP**.
4. Extract the downloaded ZIP file.
5. Open the extracted ScentVault folder.

Alternatively, clone the repository using:

```bash
git clone https://github.com/jcallejas-bit/ScentVault.git
```

## Project Structure

- index.html – Main application page.
- script.js – Application functionality.
- README.md – Project description and instructions.
- .gitignore – Files excluded from Git.

## Configuration

No additional configuration is required.

ScentVault uses browser Local Storage to save fragrance information. No database, API keys, or external services are needed.

## Running the Application

### Option 1: Using a Web Browser

1. Open the ScentVault project folder.
2. Locate the `index.html` file.
3. Double-click `index.html`.
4. The application will open in your default web browser.

### Option 2: Using Visual Studio Code

1. Open Visual Studio Code.
2. Select **File → Open Folder**.
3. Choose the ScentVault project folder.
4. Open `index.html`.
5. Right-click inside the file.
6. Select **Open with Live Server**.

The application should open in your browser.

## Trying the Sprint 1 Functionality

A reviewer can test the application by following these steps:

1. Open ScentVault in a web browser.
2. Locate the Add a Fragrance form.
3. Enter a fragrance name and brand.
4. Select a fragrance type, season, and occasion.
5. Select **Save Fragrance**.
6. Verify that the fragrance appears under My Collection.
7. Add another fragrance and verify that both appear in the collection.
8. Refresh the browser and verify that the saved fragrances remain visible.

To test input validation:

1. Open the Add a Fragrance form.
2. Leave one or more required fields empty.
3. Select **Save Fragrance**.
4. Verify that an error message appears and the fragrance is not saved.

## Sample Fragrance Information

The following fictional test entries can be used when testing the application:

| Fragrance | Brand | Type | Season | Occasion |
|---|---|---|---|---|
| Sample Fragrance A | Dior | EDP | Fall | Everyday |
| Sample Fragrance B | Versace | EDP | Summer | Date Night |

## Known Limitations

The Sprint 1 version focuses on adding fragrances and viewing a saved collection.

The following features are not included in this initial version:

- User accounts and login.
- Cloud storage or database integration.
- Sharing fragrance collections with other users.
- Advanced fragrance search and filtering.
- Fragrance images and product information from external services.

## Sprint Information

Sprint 1 establishes the first working version of ScentVault. Future development sprints may introduce additional features and improvements.