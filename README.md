# Carousel Component

## Overview

The `Carousel` component is a React functional component designed to display a slider of categories. It utilizes the `Splide` library for creating a responsive and customizable slider. The component features navigation buttons that become active when there are more slides to navigate through.

## Features

- **Responsive Design**: The carousel adjusts the number of visible slides based on the screen width, ensuring a smooth user experience across different devices.
- **Autoplay**: The slides automatically transition after a set interval, providing a dynamic and engaging display.
- **Manual Navigation**: Users can manually navigate through the slides using next and previous buttons.
- **Customizable Options**: The slider's behavior, such as the number of slides per page and the transition interval, can be customized through the `splideOptions` object.
- **Conditional Navigation Buttons**: The next and previous buttons are conditionally rendered based on the current slide position, enhancing the user experience by hiding unnecessary buttons.

## Key Functionalities

1. **Slider Initialization**: The `Splide` component is initialized with a reference (`splideRef`) to access and control its behavior programmatically.
2. **State Management**:
   - `hasStarted`: Tracks whether the slider has moved from the initial position to conditionally render the previous button.
   - `isAtEnd`: Tracks whether the slider has reached the last slide to conditionally render the next button.
3. **Navigation Functions**:
   - `prevSlide`: Moves the slider to the previous slide.
   - `nextSlide`: Moves the slider to the next slide and updates the `hasStarted` state.
4. **Slider Options**: Configured through the `splideOptions` object, including settings for:
   - Number of slides per page
   - Autoplay behavior
   - Slide transition interval
   - Breakpoints for responsive design
5. **Effect Hook**:
   - `useEffect`: Sets up event listeners on the `Splide` instance to update the state of the navigation buttons based on the current slide position.

## Styling

- The component includes Tailwind CSS classes for styling the container, slider, and navigation buttons.
- Custom styling for the navigation buttons ensures they are visually distinct and intuitive to use.

## Dependencies

- `@splidejs/react-splide`: The Splide library for creating the slider.
- `@splidejs/splide/dist/css/themes/splide-default.min.css`: Default CSS for Splide.
- Tailwind CSS: For utility-first styling.

## Usage

To use the `Carousel` component, simply import it and include it in your JSX as follows:

```jsx
import Carousel from './Carousel';

function App() {
    return (
        <div>
            <Carousel />
        </div>
    );
}
