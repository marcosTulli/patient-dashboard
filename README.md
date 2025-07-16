# Patients Dashboard

This is a web application designed to manage patient information. It provides features for listing, adding, editing, and deleting patient records, along with user authentication.

## Features

*   **Patient Management**: View a list of patients, add new patients, edit existing patient details, and delete patient records.
*   **Filtering, Sorting, and Pagination**: Efficiently browse patient data with options to filter by various criteria, sort by different fields, and navigate through paginated results.
*   **User Authentication**: Secure login and signup functionality to protect patient data.
*   **Responsive Design**: Built with modern UI libraries for a consistent experience across devices.
*   **API Integration**: Handles data fetching and manipulation through a well-structured API layer.
*   **Appointments**: Includes a placeholder for future appointment management features.

## Technologies Used

This project is built using the following key technologies:

*   **Framework**: Next.js 15 (App Router)
*   **UI Libraries**: Material UI (MUI), MUI Joy, Tailwind CSS
*   **State Management**: Zustand
*   **Data Fetching**: React Query, Axios
*   **Form Handling**: Formik, React Hook Form, Yup (for validation)
*   **Icons**: Lucide React
*   **Date Handling**: Day.js
*   **Authentication**: JWT Decode

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have the following installed on your machine:

*   Node.js (v18 or higher recommended)
*   npm or Yarn

### Installation

1.  **Clone the repository**:
    \`\`\`bash
    git clone <repository-url>
    cd patients-dashboard
    \`\`\`

2.  **Install dependencies**:
    \`\`\`bash
    npm install
    # or
    yarn install
    \`\`\`

### Environment Variables

Create a `.env.local` file in the root of your project and add the following environment variables:

\`\`\`
NEXT_PUBLIC_API_URL=your_api_base_url
NEXT_PUBLIC_API_KEY=your_api_key # This might be optional depending on your API setup
\`\`\`

*   `NEXT_PUBLIC_API_URL`: The base URL for your backend API.

### Running the Development Server

To start the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

To build the application for production:

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

To start the production server:

\`\`\`bash
npm run start
# or
yarn start
\`\`\`

## Project Structure

The project follows a clear and organized structure:

\`\`\`
.
├── src/
│   ├── app/                  # Next.js App Router pages (e.g., /patients-list, /auth, /appointments)
│   ├── components/           # Reusable UI components
│   │   ├── common/           # General components like CardContainer, Navigation, Table
│   │   └── pages/            # Components specific to certain pages (e.g., authentication forms)
│   ├── config/               # Configuration files (routes, form schemas)
│   ├── hooks/                # Custom React hooks for logic and data fetching
│   │   ├── auth/             # Hooks for authentication logic
│   │   ├── patients/         # Hooks for patient data operations (create, read, update, delete)
│   │   └── table/            # Hooks for table features like pagination and sorting
│   ├── models/               # TypeScript interfaces and types for data structures (e.g., Patient, Pagination)
│   ├── providers/            # React context providers (e.g., error handling, UI theming)
│   ├── services/             # Logic for interacting with the backend API
│   │   ├── auth/             # Authentication API services
│   │   └── patients/         # Patient API services
│   ├── store/                # Zustand stores for global application state management
│   └── styles/               # Global styles and SCSS variables
└── public/                   # Static assets (images, favicons)
\`\`\`

## API Endpoints

The application interacts with a backend API. Key API interactions include:

*   **Authentication**:
    *   Login: `/api/auth/login`
    *   Signup: `/api/auth/signup`
*   **Patient Management**:
    *   Listing Patients: `/api/patients` (supports pagination, filtering, sorting)
    *   Creating a Patient: `/api/patients`
    *   Editing a Patient: `/api/patients/{id}`
    *   Deleting a Patient: `/api/patients/{id}`
    *   Deleting Multiple Patients: `/api/patients` (with an array of IDs)

## Data Models

Key TypeScript interfaces defining the data structures used in the application:

*   \`Patient\`: Represents a patient record.
    \`\`\`typescript
    export interface Patient {
      _id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber?: string;
      dob?: string;
    }
    \`\`\`
*   \`Pagination\`: Defines parameters for paginated requests.
    \`\`\`typescript
    export interface Pagination {
      page: number;
      take?: number;
    }
    \`\`\`
*   \`PatientFilter\`: Defines fields for filtering patient lists.
    \`\`\`typescript
    export interface PatientFilter extends Record<string, string | undefined> {
      firstName?: string;
      lastName?: string;
      email?: string;
      phoneNumber?: string;
      dobFrom?: string;
      dobTo?: string;
    }
    \`\`\`
*   \`PatientSort\`: Defines sorting criteria for patient lists.
    \`\`\`typescript
    export interface PatientSort {
      field: SortFields;
      direction: SortDirection;
    }
    \`\`\`

## Available Scripts

In the project directory, you can run:

*   `npm run dev` or `yarn dev`: Runs the app in development mode.
*   `npm run build` or `yarn build`: Builds the app for production.
*   `npm run start` or `yarn start`: Starts the production server.
*   `npm run lint` or `yarn lint`: Runs ESLint to check for code quality issues.
*   `npm run format` or `yarn format`: Formats code using Prettier.
