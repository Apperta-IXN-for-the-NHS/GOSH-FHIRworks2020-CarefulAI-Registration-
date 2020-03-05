# Deployment Guide
## Info

 * The package is made up of three parts:
      * .NET application that serves patient data in JSON
      * Embeddable React application in Next.js

## Install .NET Core 2.1

- Download and install .NET Core 2.1 [SDK 2.1.803](https://dotnet.microsoft.com/download/dotnet-core/2.1)
- Test your installation by opening a new terminal and running the following command:

    ```bash
    dotnet
    ```

# 
- Clone the project and open it in Visual Studio Code.
- Navigate to **api/dotnet-azure-fhir-web-api**
- Open the file **appsettings.json**


    ```json
    {
      "Logging": {
        "LogLevel": {
          "Default": "Debug",
          "System": "Information",
          "Microsoft": "Information"
        }
      },
      "Instance": "",
      "Tenant": "",
      "ClientId": "",
      "ClientSecret": "",
      "BaseAddress": "",
      "Scope": ""
    }
    ```
- Replace the empty fields with the Azure FHIR API credentials you have been given.
- Save the file.
- Navigate to the directory **dotnet-azure-fhir-web-api** using the terminal inside Visual Studio Code.
- In the terminal, run the following command:

    ```bash
    dotnet run
    ```
- Open a web browser and navigate to [https://localhost:5001/api/Patient/](https://localhost:5001/api/Patient/) to view a list of all patients.

## Install npm dependencies
- Make sure you have [Node.js and npm](https://nodejs.org/en/download/) installed
- Navigate to the **frontend** directory
- Run the following command to install dependencies

    ```
    npm install
    ```

## Running the example
- Run the following command to install http-server

    ```
    sudo npm install -g http-server
    ```
- Navigate to the **frontend** directory and start the application

    ```
    npm run dev
    ```
    then
    ```
    http-server
    ```
- Navigate to [http://localhost:8080](https://localhost:8080) to see the embedded iframe
- The http-server is displaying the **index.html** page at the root of the package directory
- You may add new .html pages (or modify index) to use the package in your website

## Scope of Functionality

- The app takes a patient name and date of birth and searches the FHIR database to obtain their record (logs the record on success)
- The patient's name, phone number, and region are then added to the Register form which obtains care network and activity data and logs it out 
      

