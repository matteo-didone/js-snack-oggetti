// An object represents a browser window and contains two fields: an array of open tabs and an index indicating the currently open tab in the array.

const browserWindow = 
{
    tabs: ["Facebook", "GitHub", "Gmail", "Google" , "Twitter", "bbc.com", "nytimes.com"], 
    activeTab: browserWindows.tabs[0]
};

// The software should check if there is an open social media tab and remove it from the tabs. If the tab is currently active, it should activate the next tab.
function isSocialMediaTabOpen() 
{
    if (browserWindow.tabs.includes("Facebook") || browserWindow.tabs.includes("Twitter"))
    {
        // If the tab is currently active, it should activate the next tab.
        browserWindow.tabs.splice(browserWindow.tabs.indexOf("Facebook"), 1);
        return true;
    }
    else
    {
        return false;
    }
}