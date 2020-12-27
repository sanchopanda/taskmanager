"use strict";

import {createCardTemplate} from "./components/createCardTemplate.js";
import {createEditFormTemplate} from "./components/createEditFormTemplate";
import {createFilterSorting} from "./components/createFilterSorting.js";
import {createFilterTemplate} from "./components/createFilterTemplate.js";
import {createLoadMoreTemplate} from "./components/createLoadMoreTemplate.js";
import {createSiteMenuTemplate} from "./components/createSiteMenuTemplate.js";



const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const TASK_COUNT = 4;

const render = (container, template, place = "beforeEnd") => {
    container.insertAdjacentHTML(place, template);
};

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate());
render(siteMainElement, createFilterSorting());


const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);

render(taskListElement, createEditFormTemlate());

for (let i = 0; i < TASK_COUNT; i++) {
    render(taskListElement, createCardTemplate());
}

render(boardElement, createLoadMoreTemplate());


