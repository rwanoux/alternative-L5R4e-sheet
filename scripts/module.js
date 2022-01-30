import { preloadTemplates } from "./loadTemplates.js";
import { registerHelpers } from "./handlebarHelpers.js";
import altSheetL5R4 from "/modules/alternative-L5R4e-sheet/module/altSheet.js";


Hooks.once('init', async function () {
    preloadTemplates();
    registerHelpers();

    Actors.registerSheet("l5r4", altSheetL5R4, {
        types: ["pc"],
        makeDefault: true,
        label: "Fiche de personnage alternative"

    });
});

Hooks.once('ready', async function () {
    ui.notifications.notify("please consider using the alternate character sheet")

});
