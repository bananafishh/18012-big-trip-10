import {createMenuTemplate} from './components/menu';
import {createFilterTemplate} from './components/filter';
import {createTripInfoTemplate} from './components/trip-info';
import {createSortTemplate} from './components/sort';
import {createTripEventEditionFormTemplate} from './components/trip-event-edition-form';
import {createTripDaysTemplate} from './components/trip-days';
import {createTripDayTemplate} from './components/trip-day';
import {createTripEventTemplate} from './components/trip-event';

const TRIP_DAYS_COUNT = 1;
const TRIP_EVENTS_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const tripControlsElement = document.querySelector(`.trip-controls`);
render(tripControlsElement, createFilterTemplate());

const menuTitleElement = tripControlsElement.querySelector(`.visually-hidden`);
render(menuTitleElement, createMenuTemplate(), `afterend`);

const tripInfoElement = document.querySelector(`.trip-info`);
render(tripInfoElement, createTripInfoTemplate(), `afterbegin`);

const tripEventsElement = document.querySelector(`.trip-events`);
render(tripEventsElement, createSortTemplate());
render(tripEventsElement, createTripEventEditionFormTemplate());
render(tripEventsElement, createTripDaysTemplate());

const tripDaysElement = document.querySelector(`.trip-days`);
new Array(TRIP_DAYS_COUNT)
  .fill(``)
  .forEach((day, dayIndex) => {
    render(tripDaysElement, createTripDayTemplate());

    const tripDaysElements = document.querySelectorAll(`.day`);
    const tripEventsListElement = tripDaysElements[dayIndex].querySelector(`.trip-events__list`);

    new Array(TRIP_EVENTS_COUNT)
      .fill(``)
      .forEach(() => render(tripEventsListElement, createTripEventTemplate()));
  });
