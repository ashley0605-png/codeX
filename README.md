# Haven Café — COMP016 Lab Activity 3

A responsive, fictional restaurant website built with HTML, CSS, and JavaScript.
Adapted from the supplied Haven Figma screen recording: dark brown header, coffee hero, three image category banners, brown category sidebar, and a two-column menu. The exact Figma assets were unavailable; photographs, logo, recipes, some food items and prices are representative. This is not a pixel-exact export.

## Open the website

1. Extract the project folder.
2. Open index.html in a browser, or use VS Code Live Server.
3. For Laragon, place the folder in C:\laragon\www\codeX and visit http://localhost/codeX/ after starting Apache. For XAMPP, use htdocs.
4. Open Our menu to browse all 34 sample items.

No installation, build command, API key, database, or internet connection is needed to run the site. Cart contents last only until the page is refreshed or a different page is opened.

## Files

- index.html — Home page, featured dishes, story
- menu.html — Menu page, category filters, search, price sorting
- style.css — External CSS, :root colors, Flexbox, Grid, mobile layout
- js/script.js — External JavaScript with DOM selection and event listeners
- images/ — Local food photographs

## JavaScript requirements

| Event | Visible result | Function |
| --- | --- | --- |
| click | Add/remove dishes, update quantity and total | addToCart, renderCart |
| click | Change page theme and theme button text/style | toggleTheme |
| click | Show a category and selected button state | renderMenu |
| input | Search dishes and show a result count | renderMenu |
| change | Sort by price | renderMenu |
| change | Update dine-in/takeaway instructions | updateOrderType |
| mouseover | Show ingredients | toggleIngredients |
| mouseout | Hide an unpinned ingredient preview | toggleIngredients |
| submit | Validate name and show demo order confirmation | submitOrder |

DOM methods include document.getElementById, document.querySelectorAll, document.createElement, and replaceChildren. Changes use innerHTML, textContent, hidden, classList, attributes, and style.backgroundColor. There are more than four functions and four event types. All logic is external; no inline script or inline event handlers are used.

## Try these features

- On Menu, select Coffee: six coffees should remain.
- Search for a nonexistent dish: the empty state should appear.
- Select All dishes, clear search, and sort by price.
- Add two Spanish Lattes: total should be PHP 228.
- Open Your bag and use +/−; removing the final item disables ordering.
- Enter a name, select Takeaway, and place a demo order.
- Click the moon/sun button and check both themes.
- Hover Ingredients & allergens; click to pin the ingredients open on mobile.
- Resize to a narrow screen and check navigation, menu, and bag.

## Submission checklist — finish as a group

The PDF requires a Google Drive folder named <group>_WebApp_Lab3 containing:

- Video proof of actual collaboration.
- A Docs file using the instructor’s template, including the public GitHub repository link and screenshot(s) of the working website.

Use https://github.com/ashley0605-png/codeX after uploading the completed files and ensuring the repository is public. Do not submit only this ZIP; the PDF explicitly requires the Google Drive submission. Group number, member names, collaboration video, template document, and final screenshots must be provided by your team. No email or repository push was performed by this project.

## Image credits

Photographs downloaded from Unsplash for this educational project:

- Burger: https://images.unsplash.com/photo-1568901346375-23c9450c58cd
- Pizza: https://images.unsplash.com/photo-1579751626657-72bc17010498
- Pasta: https://images.unsplash.com/photo-1473093295043-cdd812d0e601
- Fries: https://images.unsplash.com/photo-1573080496219-bb080dd4f877
- Coffee: https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd
- Cake: https://images.unsplash.com/photo-1578985545062-69928b1d9587

Menu descriptions, ingredients, prices, and restaurant branding are fictional samples. Photographs are illustrative and do not guarantee exact recipe contents. No real orders or payments are accepted.

Additional representative images:

- Coffee hero: https://images.unsplash.com/photo-1447933601403-0c6688de566e
- Iced coffee: https://images.unsplash.com/photo-1517701604599-bb29b565090c
- Milkshake: https://images.unsplash.com/photo-1572490122747-3968b75cc699
- Lemonade: https://images.unsplash.com/photo-1544145945-f90425340c7e
- Sandwich: https://images.unsplash.com/photo-1528735602780-2552fd46c7af
- Rice: https://images.unsplash.com/photo-1512058564366-18510be2db19

## Verification

JavaScript syntax and DOM interaction checks passed for menu rendering, category filtering, empty search results, cart quantity and totals, checkout, plain-text name handling, theme, ingredient hover/click, Home featured items, and category links. Image files were checked for decoding and local references were checked for missing files. Actual browser visual QA was unavailable in this environment; review the desktop and mobile layout before submitting.

## Individual menu images update

All 34 menu items now have unique AI-generated product photos created with built-in imagegen. The images are included locally in images/item-1.png through images/item-34.png. They are illustrative menu assets, not photographs of actual Haven products. Original Unsplash photos remain for home banners and decorative sections. IMAGE_PROMPTS.json records the subject list and shared prompt style.

## Screenshot design update
Home now follows the supplied reference: brown header with white Haven logo, autumn coffee hero, centered logo, three wide category banners, and white three-column footer. Hero, banners, and logo were recreated with built-in imagegen using the supplied screenshots as references. They are approximations, not original Figma exports. All 34 product images are retained. Footer delivery/social controls show a demo notice because real destinations have not been supplied. About, Contact, Branches, and Privacy pages have working local destinations. Browser visual QA remains unavailable; DOM initialization, links, group filters, cart, theme, and contact behavior were checked.

For the update-only ZIP: extract it, copy its contents into your existing Haven_Cafe project, merge folders, and replace matching files. For GitHub, upload the extracted contents at the repository root. Keep the existing images/item-1.png through item-34.png.
