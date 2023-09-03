;(async function() {
    const loadMarkedScriptPromise = loadScript("/media/js/marked.min.js");

    let faqNotes = await fetch(
        `/media/faq.md`
    );
    if (!faqNotes.ok) {
        console.error("[faq] Failed to get faq.md.");
        return false;
    }
    faqNotes = await faqNotes.text();

    await loadMarkedScriptPromise;

    let faqEl = document.createElement("div");
    faqEl.classList.add("faq");
    faqEl.innerHTML = marked.parse(faqNotes);

    let footer = document.getElementById('footer');
    footer.prepend(faqEl);
})();
