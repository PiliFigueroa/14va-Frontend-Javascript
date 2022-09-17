const $$ = (selector) => document.querySelectorAll(selector)

const $$btn = $$(".btn")

for (const btn of $$btn) {
    btn.addEventListener("click", () => {
        console.log(btn.innerText, "Hice click")
    })
}