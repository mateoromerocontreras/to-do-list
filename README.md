# To-Do List App

A simple to-do list application built with HTML, CSS, and JavaScript.

## Features

- Add tasks to the list
- Mark tasks as completed
- Remove tasks from the list
- Persist tasks using `localStorage`

## Files

- `index.html`: The main HTML file that contains the structure of the app.
- `style.css`: The CSS file that styles the app.
- `script.js`: The JavaScript file that contains the logic for the app.

## Usage

1. Clone the repository:
    ```sh
    git clone https://github.com/mateoromerocontreras/todo-list-app.git
    ```
2. Open `index.html` in your web browser.

## Code Overview

### HTML

The HTML file contains the structure of the to-do list app, including the input box, add button, and the list container.

### CSS

The CSS file styles the to-do list app, including the layout, colors, and fonts.

### JavaScript

The JavaScript file contains the logic for adding, marking, and removing tasks, as well as persisting tasks using `localStorage`.

## Functions

- `addTask()`: Adds a new task to the list.
- `saveData()`: Saves the current list to `localStorage`.
- `showTask()`: Loads the list from `localStorage` and displays it.

## Event Listeners

- `listContainer.addEventListener('click', function(e) {...})`: Handles marking tasks as completed and removing tasks.

## License

This project is licensed under the MIT License.
