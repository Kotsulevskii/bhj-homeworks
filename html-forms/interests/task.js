let interests = document.querySelectorAll(".interests_active");
for (let item of interests) {
    console.log( Array.from(item.querySelectorAll('.interest__check')));
    item.parentElement.querySelector('.interest__check').addEventListener('click', () => {
        if (item.parentElement.querySelector('.interest__check').checked) {
            for (let i of Array.from(item.querySelectorAll('.interest__check'))) {
                i.checked = true;
            };
        } else {
            for (let i of Array.from(item.querySelectorAll('.interest__check'))) {
                i.checked = false;
            };
        };
    });
};