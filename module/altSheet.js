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

    itemContextMenu = [
        {
            name: game.i18n.localize("l5r4.sheet.edit"),
            icon: '<i class="fas fa-edit"></i>',
            callback: element => {
                const item = this.actor.items.get(element.data("item-id"));
                item.sheet.render(true);
            }
        },
        {
            name: game.i18n.localize("l5r4.mech.toChat"),
            icon: '<i class="fas fa-comment"></i>',
            callback: element => {
                let item = this.actor.items.get(element.data("item-id"));
                item.roll();
            }
        },
        {
            name: game.i18n.localize("l5r4.sheet.delete"),
            icon: '<i class="fas fa-trash"></i>',
            callback: element => {
                this.actor.deleteEmbeddedDocuments("Item", [element.data("item-id")]);
            }
        }
    ];
    activateListeners(html) {
        html.find(".expandable a.expand").click(this.toggleExpand.bind(this))
        super.activateListeners(html);

    }
    async _onItemCreate(event) {
        event.preventDefault();
        let element = event.currentTarget;
        let itemData = {
            name: game.i18n.localize("l5r4.sheet.new"),
            type: element.dataset.type
        }
        return this.actor.createEmbeddedDocuments("Item", [itemData]);
    }

    toggleExpand(ev) {
        let row = ev.currentTarget.closest(".item-border");
        row.classList.toggle("expanded");
        let icone = ev.currentTarget.children[0];
        icone.classList.toggle("fa-arrow-down");
        icone.classList.toggle("fa-arrow-up");


    }
}