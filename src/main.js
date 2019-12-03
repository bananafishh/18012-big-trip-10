'use strict';

const createMenuTemplate = () => {
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
      <a class="trip-tabs__btn" href="#">Stats</a>
    </nav>`
  );
};

const createFilterTemplate = () => {
  return (
    `<form class="trip-filters" action="#" method="get">
      <div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
      </div>
  
      <div class="trip-filters__filter">
        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
        <label class="trip-filters__filter-label" for="filter-future">Future</label>
      </div>
  
      <div class="trip-filters__filter">
        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
        <label class="trip-filters__filter-label" for="filter-past">Past</label>
      </div>
  
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};

const createTripInfoTemplate = () => {
  return (
    `<div class="trip-info__main">
      <h1 class="trip-info__title">Amsterdam &mdash; ... &mdash; Amsterdam</h1>
  
      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;21</p>
    </div>`
  );
};

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const tripControlsElement = document.querySelector(`.trip-controls`);
render(tripControlsElement, createFilterTemplate());

const menuTitleElement = tripControlsElement.querySelector(`.visually-hidden`);
render(menuTitleElement, createMenuTemplate(), `afterend`);

const tripInfoElement = document.querySelector(`.trip-info`);
render(tripInfoElement, createTripInfoTemplate(), `afterbegin`);
