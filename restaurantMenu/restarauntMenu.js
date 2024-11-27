newFunction();

function newFunction() {
    // Define the menus
    const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
    const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
    const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

    // Update total items for breakfast menu
    document.getElementById('breakfastTotalItems').innerHTML = `<p>Total Items: ${breakfastMenu.length}</p>`;
    // Generate and display breakfast menu items
    const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

    // Update total items for main course menu
    document.getElementById('maincourseTotalItems').innerHTML = `<p>Total Items: ${mainCourseMenu.length}</p>`;
    // Generate and display main course menu items
    let mainCourseMenuItemsHTML = '';
    mainCourseMenu.forEach((item, index) => {
        mainCourseMenuItemsHTML += `<p>Item ${index + 1}: ${item}</p>`;
    });
    document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenuItemsHTML;

    // Update total items for dessert menu
    document.getElementById('dessertTotalItems').innerHTML = `<p>Total Items: ${dessertMenu.length}</p>`;
    // Generate and display dessert menu items
    let dessertMenuItemsHTML = '';
    for (let i = 0; i < dessertMenu.length; i++) {
        dessertMenuItemsHTML += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
    }
    document.getElementById('dessertMenuItems').innerHTML = dessertMenuItemsHTML;
}
