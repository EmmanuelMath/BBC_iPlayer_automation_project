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
install npm 
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
1. **API Availability**: 
   - API endpoints (`/ibltest`, `/ibltest/2023-09-11`) are accessible and operational.
   - API responses adhere to the expected structure (`schedule.elements`, `episode.type`, `episode.title`).

2. **Response Data**:
   - `schedule.elements` is an array containing valid fields (`id`, `type`, `title`, etc.).
   - Dates (`transmission_start`, `transmission_end`) are in a valid and comparable format.
   - Only one episode has `live` set to `true` at any time.

3. **Environment Configuration**:
   - A valid `.env` file with `API_BASE_URL` is required. Defaults or error handling should be in place if missing.

4. **Utility Functions**:
   - Validation logic (`validateField`, `validateDateOrder`) is robust and handles edge cases (null, empty strings).

### **External Dependencies**
1. **Node.js**:
   - Node.js (v16 or higher) and npm/yarn for dependency management.

2. **npm Packages**:
   - `jest` for testing.
   - `jest-cucumber` for BDD.
   - `axios` for HTTP requests.
   - `dotenv` for environment variable management.

3. **API Access**:
   - The API must be reachable.

4. **System Requirements**:
   - Network access to API endpoints.
   - Sufficient memory and CPU for testing large datasets.

5. **Execution Environment**:
   - Tests run locally or in CI/CD pipelines with Node.js installed.
   - Firewalls or proxies should not block API access.

