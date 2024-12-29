# BBC_iPlayer_automation_project

This project tests API functionality, performance, and data integrity using Jest and Cucumber. It includes feature files for behavior-driven testing (BDD) and JavaScript step definitions.

---

## **Prerequisites**

Ensure the following tools are installed:

1. **Node.js**: Version 16 or higher  
   [Download Node.js](https://nodejs.org)
2. **npm** (comes with Node.js) or **yarn** for dependency management
3. **Git** for version control  
   [Download Git](https://git-scm.com)

---

## **Setup Instructions**

### **1. Clone the Repository**
Clone the repository to your local machine:

```
git clone <https://github.com/EmmanuelMath/BBC_iPlayer_automation_project.git>
cd <BBC_iPlayer_automation_project>
```


### **2. Install Dependencies**
Install the required Node.js packages:
```
npm install 
```

## **Running Tests**

### **Run All Tests**

Execute all feature tests:
```
npm test
```

### **Run a Specific Feature File**

Run tests for a single feature file:
```
npm run test:feature -- ./features/<feature-name>.feature
```
Example:
```
npm run test:feature -- ./features/dataValidation.feature
```

### **Run Tests in Watch Mode**

Run tests continuously during development:
```
npm run test:watch
```

### **Project Structure**

```
.
├── Part_2_Functional_Manual_Testing/
│   ├── functionalManualTesting.feature
│
├── features/
│   ├── apiStatus.feature
│   ├── errorHandling.feature
│   ├── responseHeaders.feature 
│   ├── dataValidation.feature
│
├── step_definitions/
│   ├── apiStatusSteps.js    
│   ├── errorHandlingSteps.js 
│   ├── responseHeadersSteps.js 
│   ├── dataValidationSteps.js    
│
├── utils/
│   ├── apiClient.js      
│   ├── common_steps.js    
│
└── package.json  
└── jest.config.js.json                 

```
## **Assumptions and External Dependencies**

### **Assumptions**

1. The API endpoints are functional and provide data in the expected JSON structure.
2. Dates are formatted correctly and are comparable for validation purposes.
3. At most one episode has `live: true`.
4. Test environment has network access to API endpoints.

### **External Dependencies**
1. **Node.js v16+** for runtime and dependency management.
2. **npm Packages:**
   - `jest` for testing
   - `jest-cucumber` for BDD
   - `axios` for HTTP requests
3. Reliable API connectivity for live testing or proper mocks for offline development.

   ---

### **Room For Improvement**
- **Containerisation:** Use Docker to ensure consistent development, testing, and production environments.
- **Error Handling:** Centralize error handling logic in `apiClient` for improved readability and maintainability.
- **Environment Variables:** Use `.env` files to manage sensitive values (API endpoints).
- **API Mocking:** Simulate API responses to avoid dependency on external services during testing.
- **CI/CD Pipelines:** Automate testing and deployment processes to ensure code quality and accelerate the development lifecycle.

---


## **Resources**

- **JavaScript**: [JavaScript Documentation - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- **Cucumber (Jest-Cucumber)**: [Cucumber Documentation](https://cucumber.io/docs/)  
  [Jest-Cucumber Documentation](https://github.com/bencompton/jest-cucumber)

- **Axios**: [Axios Documentation](https://axios-http.com/docs/intro)

- **Jest**: [Jest Documentation](https://jestjs.io/docs/getting-started)

---
## **Assumptions for Part 2: Functional Manual Testing**

- The user retrieving the TV schedule has the necessary permissions to access the data.
- The API endpoint returns data in a consistent JSON format.
- All dates and times are represented in UTC.
- The meaning and format of specific data fields are documented elsewhere.
- Writing test in feature file in Gherkin language.

**Assumptions for Test Cases**
- API provides timestamps (`scheduled_start`, `scheduled_end`, etc.) in UTC.
- Episode metadata fields like `title` and `synopsis` are consistently available.
- Master brand details (`titles`, `ident_id`, etc.) are accurate and consistent.
