export const preloadTemplates = async function () {

    // Define template paths to load
    const templatePaths = [

        // Actor Sheet Partials
        "modules/alternative-L5R4e-sheet/templates/character.html",
        "modules/alternative-L5R4e-sheet/templates/partials/pc-stats.hbs",
        "modules/alternative-L5R4e-sheet/templates/partials/pc-spells-techniques.hbs",
        "modules/alternative-L5R4e-sheet/templates/partials/technique-card.hbs",
        "modules/alternative-L5R4e-sheet/templates/partials/spell-card.hbs",
        "modules/alternative-L5R4e-sheet/templates/partials/pc-equipment.hbs",
        "modules/alternative-L5R4e-sheet/templates/partials/weapon-card.hbs",
        "modules/alternative-L5R4e-sheet/templates/partials/armor-card.hbs",

    ];

    // Load the template parts
    return loadTemplates(templatePaths);
};