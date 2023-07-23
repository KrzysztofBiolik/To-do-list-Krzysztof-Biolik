{
    const tasks = [];
   
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

    const init = () => {
        render();
    };

    init();

}