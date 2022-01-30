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
        html.find(".expandable a.expand").click(this.toggleExpand.bind(this))

    }

    toggleExpand(ev) {
        let row = ev.currentTarget.closest(".item-border");
        row.classList.toggle("expanded");
        let icone = ev.currentTarget.children[0];
        icone.classList.toggle("fa-arrow-down");
        icone.classList.toggle("fa-arrow-up");


    }
}