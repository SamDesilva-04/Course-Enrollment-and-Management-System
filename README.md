# Course Enrollment System

An Angular-based student course enrollment management application built with Angular Material.

## Features

- 📋 View and manage course listings
- 👩‍🎓 Student list management
- ✅ Enrollment tracking

## Tech Stack

- **Framework:** Angular 21
- **UI Library:** Angular Material
- **Testing:** Vitest
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm 11+

### Installation

```bash
git clone <repo-url>
cd course-enrollment-app
npm install
```

### Development Server

```bash
ng serve
```

Open `http://localhost:4200/` in your browser. The app auto-reloads on file changes.

### Build

```bash
ng build
```

Production build artifacts are stored in the `dist/` directory.

### Run Tests

```bash
ng test
```

## Project Structure

```
src/
└── app/
    ├── components/
    │   ├── course-list/       # Course listing component
    │   ├── enroll-list/       # Enrollment list component
    │   ├── navbar/            # Navigation bar
    │   └── student-list/      # Student listing component
    ├── models/
    │   ├── course.model.ts
    │   ├── enrollment.model.ts
    │   └── student.model.ts
    ├── services/
    │   └── data.service.ts
    ├── app.routes.ts
    ├── app.config.ts
    └── app.ts
```

## License

See [LICENSE](LICENSE) for details.
