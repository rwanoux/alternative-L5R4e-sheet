import ActorSL5R4PcSheetheet5e from "/systems/l5r4/module/sheets/L5R4PcSheet.js";



export default class altSheetL5R4 extends ActorSL5R4PcSheetheet5e {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["l5r4", "pc", "alternative"],
        });
    }


    get template() {
        return "modules/alternative-L5R4e-sheet/templates/character.html";
    }

    activateListeners(html) {
        super.activateListeners(html);


    }


}