# Selfie Locator App

This project is a simple web application that allows users to capture and log selfies along with their mood and geolocation. Users can view a list of captured selfies on a separate page.

## Features

- Capture and log selfies along with mood, latitude, longitude, and timestamp.
- View a list of captured selfies on the "list" page.
- Real-time display of latitude, longitude, and timestamp on the main page.
- Enter and submit your mood along with the selfie.

## Getting Started

### Prerequisites

- A modern web browser.
- Node.js installed.
- npm (Node.js package manager) installed.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/Selfie-Locator.git
    cd selfie-locator-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the server:

    ```bash
    node index.js
    ```

4. Open your web browser and navigate to [http://localhost:3001](http://localhost:3001).

### Usage

1. On the main page, click the "FindMe" button to capture a selfie along with mood and geolocation.
2. View the list of captured selfies by clicking the "list" link in the navigation.
3. Click the "enter" link to return to the main page.

## Development

- The application uses HTML, CSS, and JavaScript for the front end.
- Geolocation is obtained using the browser's navigator API.
- Selfies are captured using the device's camera.
- Data is stored using Nedb, a lightweight embedded database.
- The server is built with Node.js and Express.

## Known Issues

[List any known issues or limitations here]

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to contribute, report issues, or provide feedback!
