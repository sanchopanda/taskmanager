import {createCardTemplate} from "./components/createCardTemplate.js";
import {createEditFormTemplate} from "./components/createEditFormTemplate";
import {createFilterSorting} from "./components/createFilterSorting.js";
import {createFilterTemplate} from "./components/createFilterTemplate.js";
import {createLoadMoreTemplate} from "./components/createLoadMoreTemplate.js";
import {createSiteMenuTemplate} from "./components/createSiteMenuTemplate.js";

import {generateTask} from "./mock/task.js";
import {generateFilter} from "./mock/filter.js";


const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const TASK_COUNT = 24;
const TASK_COUNT_PER_STEP = 8;

const tasks = new Array(TASK_COUNT).fill().map(generateTask);
const filters = generateFilter(tasks);

const render = (container, template, place = `beforeEnd`) => {
    container.insertAdjacentHTML(place, template);
};

render(siteHeaderElement, createSiteMenuTemplate(), `beforeEnd`);
render(siteMainElement, createFilterTemplate(filters), `beforeend`);
render(siteMainElement, createFilterSorting(), `beforeEnd`);


const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);

render(taskListElement, createEditFormTemplate(tasks[0]));


for (let i = 1; i < Math.min(tasks.length, TASK_COUNT_PER_STEP); i++) {
    render(taskListElement, createCardTemplate(tasks[i]), `beforeend`);
}

if (tasks.length > TASK_COUNT_PER_STEP) {
    let renderedTaskCount = TASK_COUNT_PER_STEP;

    render(boardElement, createLoadMoreTemplate(), `beforeend`);

    const loadMoreButton = boardElement.querySelector(`.load-more`);

    loadMoreButton.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        tasks
            .slice(renderedTaskCount, renderedTaskCount + TASK_COUNT_PER_STEP)
            .forEach((task) => render(taskListElement, createCardTemplate(task), `beforeend`));

        renderedTaskCount += TASK_COUNT_PER_STEP;

        if (renderedTaskCount >= tasks.length) {
            loadMoreButton.remove();
        }
    });
}


