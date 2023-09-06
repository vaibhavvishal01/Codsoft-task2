document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        const isTextElement = e.target instanceof HTMLElement && e.target.tagName === "SPAN";
        cursor.style.display = isTextElement ? "block" : "none";
    

        if (isTextElement) {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        }
    });
});


