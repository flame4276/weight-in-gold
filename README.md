# Weight in Gold
This is an app that takes a weight and finds the value of that weight in gold. It consists of two parts: a front end where the user enters their weight and that value in gold is calculated, and a unit conversion API. This app makes use of the Nasdaq datalink for gold price information.

## Dependencies
Python3 and django must be installed to run this app. If `pip` is installed, django can be installed with
```
pip install django
```

## Setting up the app
Run the command
```
python manage.py migrate
```
This will initialize the `sqlite` database files

## Running the app
In the project directory, run
```
python manage.py runserver
```
This will start the server that handles both the unit conversion API and serving the front end on port 8000. Navigating to the URL `http://localhost:8000/gold` will open the front end of the app.

## Development process
With the server running, navigating to `http://localhost:8000/gold/plan` will open the software development plan used for this project, where the one can view my process in developing this project.


## Sources for Conversions
google.com