searchUrbanDict = function (word) {
    var query = word.selectionText;
    chrome.tabs.create({ url: "https://www.amazon.de/s?k=" + query + "&ref=nb_sb_noss_2" });
};

chrome.contextMenus.create({
    title: "Search in Amazon",
    contexts: ["selection"],
    onclick: searchUrbanDict
});