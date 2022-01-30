import { preloadTemplates } from "./loadTemplates.js";
import { registerHelpers } from "./handlebarHelpers.js";
import L5R4IPcSheet from "/systems/l5r4/module/sheets/L5R4PcSheet.js";
import altSheetL5R4 from "/modules/alternative-L5R4e-sheet/module/altSheet.js";


Hooks.once('init', async function () {
    Actors.registerSheet("l5r4", altSheetL5R4, {
        types: ["pc"],
        makeDefault: true,
        label: "Fiche de personnage alternative"

    });
});

Hooks.once('ready', async function () {


});
