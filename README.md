
# Glassmorphism Calculator

A simple calculator application built using **React** with a modern **glassmorphism design**. The calculator is fully responsive and supports basic arithmetic operations.

## Features

- Elegant UI:Uses a glassmorphism effect for a sleek and modern appearance.
- Responsive Design: Works seamlessly across devices (mobile, tablet, and desktop).
- Basic Arithmetic Operations:** Addition, subtraction, multiplication, and division.
- Keyboard Support: You can interact with the calculator using your keyboard.

## <img width="1440" alt="Screenshot 2024-12-06 at 7 41 21 PM" src="https://github.com/user-attachments/assets/d1ec11af-8d07-4625-8f77-9d1acf222207">
review





## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v14 or above)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/glassmorphism-calculator.git
   cd glassmorphism-calculator
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn start
   ```

4. Open the application in your browser at `http://localhost:3000`.

## Project Structure

```
├── public/
├── src/
│    // Main calculator logic
│   ├── App.js          
│   ├── index.css       
│   └── App.css
    └── main.jsx
        
├── package.json
└── README.md
```

## Technologies Used

- React: Frontend framework
- CSS: For glassmorphism styling

## Design Highlights

- Glassmorphism Effect: Achieved using CSS properties like `backdrop-filter` and `rgba` colors.
- Grid Layout: Used CSS Grid to ensure buttons align perfectly.
- Custom Styling: Buttons have hover and active states for better user interaction.

## Example Code Snippet

Here’s an example of how the buttons are styled:

```css
.button {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.button:active {
  transform: scale(0.95);
}
```

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   gtchiommit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to reach out!

- GitHub: [your-username](https://github.com/your-username)
- Email: [your-email@example.com](mailto\:your-email@example.com)

