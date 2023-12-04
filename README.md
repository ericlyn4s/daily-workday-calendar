# Daily Workday Calendar

## Description

I created the daily workday calendar for two main reasons: (1) I wanted to practice my JQuery skills and (2) I wanted to create something useful, responsive and aesthetically pleasing. JQuery is an API that helps make JavaScript more simple and comes with built-in styling properties. It has huge potential to help improve my current coding tendencies. For this project I used the dayjs() function prominently, which converts the current time into an hour variable. I then used this variable to determine timeblock styling, with past, present & future hour blocks showing different coloring. I also have the current date displayed prominently in the header. Finally, using jQuery offered an easy way to style the table. 

## Installation

My daily workday calendar can be cloned from my repository here:
https://github.com/ericlyn4s/daily-workday-calendar

It's also being hosted on GitHub pages here:
https://ericlyn4s.github.io/daily-workday-calendar/


## Usage

When the user starts up the page, they'll see the current date displayed under the header. There's a timeslot for each hour of a typical workday, 9am - 5pm. If the current hour falls between that timeframe, the respective hour timeslot will show as red. Any hour timeframes after that will be displayed in green, and any past timeframes will be gray. 

<image src="Assets/Images/timeslot-pic.png" alt="Given a time of 4:00pm - 4:59pm, the 4 timeslot will be colored red. The future timeslots will be green, and the past timeslots gray." width="450"/>

The user can click on a timeslot and type in a new event. Should they refresh the page, this event will remain on the calendar since it's being saved to local storage.

<image src="Assets/Images/event-entry-pic.png" alt="The user enters an event into the 4pm timeslot, reading 'Haircut'." width="450"/>

## Credits

I had a tutor session with Katie Redford on 12/2/2023.

## License

MIT License

Copyright (c) 2023 Eric Peterson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Features

In the future, I'd like to create a button that will clear out local storage. This would ensure the calendar would be blank should the user refresh the page.

