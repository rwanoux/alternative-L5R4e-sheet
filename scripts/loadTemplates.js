export const preloadTemplates = async function () {

    // Define template paths to load
    const templatePaths = [

        // Actor Sheet Partials
        "modules/alternative-L5R4e-sheet/templates/character.html",
    ];

    // Load the template parts
    return loadTemplates(templatePaths);
};