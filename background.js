// Logs message to console when extension is sucessfuly installed
chrome.runtime.onInstalled.addListener(() => {
    console.log("Terms Summarizer Installed.");
});
