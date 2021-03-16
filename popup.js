const render = (data = []) => {
        $("#result").empty();
        const inside = data
                .map(
                        (item) =>
                                `<tr class="my-2 tb">
                                                <td>${item.jp}</td> <td>${item.ka}</td> <td>${item.vi}</td>
                                        </tr>`
                )
                .join("");

        return `<table class="bg-gray-200 w-full text-center font-semibold">${inside}</table>`;
};

const all = { ...data };
const initRender = () => {
        $("#top").empty();
        return Object.keys(all)
                .map((item) => `<button class="button" type="button" id="${item}">${item}</button>`)
                .join("");
};
$("#top").append(initRender());

Object.keys(all).map((item) => {
        $(`#${item}`).on("click", function () {
                $("#result").append(render(all[item]));
        });
});

const searchTeams = [];
Object.keys(data).forEach((item) => searchTeams.push(...data[item]));

$("#search").on("keyup", function () {
        const key = this.value.toLowerCase();
        const result = searchTeams.filter(
                (item) => item.jp.toLowerCase().includes(key) || item.ka.toLowerCase().includes(key) || item.vi.toLowerCase().includes(key)
        );
        $("#result").append(render(result));
});
