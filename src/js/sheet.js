/**
 * openSheet
 * Opens the sheet component
 * @param {string} contentId - id of content element to be visible
 */
function openSheet(contentId) {
    const sheet = document.getElementById('sheet');
    const content = document.getElementById(contentId);
    const about = document.getElementById('about');
    const support = document.getElementById('support');
    about.classList.remove('is-open');
    support.classList.remove('is-open');
    if (content.classList.contains('is-open')) {
        sheet.classList.remove('is-open');
        content.classList.remove('is-open');
    } else {
        sheet.classList.add('is-open');
        content.classList.add('is-open');
    }
}

/**
 * closeSheet
 * Closes the sheet component
 * @param {string} contentId - id of content element to hide
 */
function closeSheet(contentId) {
    const sheet = document.getElementById('sheet');
    const content = document.getElementById(contentId);
    sheet.classList.remove('is-open');
    content.classList.remove('is-open');
}
