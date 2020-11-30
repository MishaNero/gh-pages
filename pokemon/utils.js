export function checkClick(counts, el) {
    const innerText = el.innerText;
    el.innerText = `${innerText}[${counts}]`
    return function() {
    counts--;  
    if (counts === 0) {
        el.disabled = true;
    }
    el.innerText = `${innerText} [${counts}]`;
    return counts;
    };
}

