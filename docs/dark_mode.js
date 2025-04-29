document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('toggle-mode').addEventListener('click', function () {
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");

    });

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.attributeName === 'class') {
                document.getElementById('light-mode-icon').style.display = document.body.classList.contains("dark") ? "block" : "none";
                document.getElementById('dark-mode-icon').style.display = document.body.classList.contains("light") ? "block" : "none";
            }
        });
    });

    observer.observe(document.body, { attributes: true });


    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.add("light");
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (event.matches) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    });

});

