# React Component Showcase

This repository contains React projects demonstrating various common frontend functionalities. Each project is implemented as a separate component within the same React application.

## Projects Included

1. **Image Slider**: A carousel component that cycles through images with navigation buttons and auto-play functionality.

2. **Autocomplete Search**: A search input component that provides suggestions as you type, with debouncing for performance optimization.

3. **Infinite Scroll**: A component that continuously loads content as the user scrolls down the page, demonstrating efficient data loading techniques.

4. **Kanban Board**: A drag-and-drop task management board using react-dnd, showcasing interactive UI elements and state management.

## Technologies Used

- React
- react-dnd (for Kanban Board)
- CSS for styling

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   `git clone https://github.com/your-username/react-component-showcase.git`

2. Navigate to the project directory:
   `cd react-component-showcase`

3. Install dependencies:
   `npm install`

4. Start the development server:
   `npm start`

5. Open your browser and visit `http://localhost:3000` to view the application.

## Project Structure

- `/src`
  - `/components`
    - `/ImageSlider`: Component for displaying a slider of images.
    - `/AutocompleteSearch`: Component for providing autocomplete search functionality.
    - `/InfiniteScroll`: Component for implementing infinite scrolling behavior.
    - `/KanbanBoard`: Component for creating and managing a Kanban board.
- `App.js`: Main component that renders all project components.
- `index.js`: Entry point of the React application.

## Usage

Each component is self-contained and can be found in its respective directory under `/src/components`. To use a component in your own project, simply copy the component's directory and import it into your React application.

## Contributing
