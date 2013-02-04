# Dayton Tax Game

A small interactive game to see how which taxes and tax rate combinations will affect Governor Dayton's 2014 budget.

## View

Go to ```./index.html``` in a browser.

## Data

Data is from Governor's 2014-2015 proposed budget with some analysis by MinnPost to figure out base rates for items.  Using Google Spreadsheets for data storage.  [View sheet here](https://docs.google.com/spreadsheet/ccc?key=0Ata43HM8s_nadFNRa2dKbHZ1QzhleHJPMHNEeHQ2bVE#gid=0).

## Deploy

Since this will be deployed by embedding HTML/CSS/JS directly into the CMS, it is easiest to host AWS.

1. Install Grunt: ```npm install grunt grunt-s3```
2. Deploy: ```grunt mp-deploy```