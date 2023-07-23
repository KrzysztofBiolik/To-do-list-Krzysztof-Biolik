{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({content: newTaskContent,});
        render();
    };
   
    const render = () => {
        let taskListHTMLContent = "";

        for (const task of tasks) {
            taskListHTMLContent += `
        <li>
        ${task.content}
        </li>
        `;
        }

        document.querySelector(".js-list").innerHTML = taskListHTMLContent;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }

        newTaskElement.focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();

}