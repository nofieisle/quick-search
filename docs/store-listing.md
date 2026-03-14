# Quick Search – Chrome Web Store Listing

## Short Description (≤132 chars)
Search selected text on Google instantly with Alt+S. No mouse clicks, no copy-paste, no context menus.

## Detailed Description

**Quick Search** lets you search any selected text on Google with a single keyboard shortcut — **Alt+S**.

### How to Use
1. Select any text on any webpage.
2. Press **Alt+S**.
3. A new tab opens with Google search results for your selected text.

That's it. No right-click menus, no copy-paste, no toolbar buttons.

### Features
- ⌨️ One keyboard shortcut does everything
- 🚀 Zero configuration required
- 🔒 No data collection — your text goes directly to Google, nowhere else
- 🪶 Lightweight: no background processes, no persistent scripts

### Permissions
This extension requests only the minimum permissions needed:
- **activeTab** — to read the text you have selected on the current page
- **scripting** — to run a small script that retrieves your selection

No browsing history, no cookies, no personal data is accessed or stored.

---

## Category
Productivity

---

## Permission Justifications (for review form)

### activeTab
The extension needs access to the currently active tab to read the text selected by the user when the keyboard shortcut (Alt+S) is pressed. Access is granted only at the moment the shortcut is used — not persistently.

### scripting
The extension executes a small inline script (`window.getSelection().toString()`) on the active tab to retrieve the selected text. This is the only way to programmatically access selected text in Manifest V3. No external scripts are loaded; no data is sent anywhere except to open a Google search URL in a new tab.

---

## Privacy Policy URL
https://<USERNAME>.github.io/quick-search/privacy-policy.html

> Replace `<USERNAME>` with your GitHub username after publishing to GitHub Pages.

---

## Website (optional)
https://github.com/<USERNAME>/quick-search
