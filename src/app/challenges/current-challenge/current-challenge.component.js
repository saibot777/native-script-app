"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var day_modal_component_1 = require("../day-modal/day-modal.component");
var ui_service_1 = require("~/app/shared/ui.service");
var CurrentChallengeComponent = /** @class */ (function () {
    function CurrentChallengeComponent(modalDialog, vcRef, uiService) {
        this.modalDialog = modalDialog;
        this.vcRef = vcRef;
        this.uiService = uiService;
    }
    CurrentChallengeComponent.prototype.onChangeStatus = function () {
        this.modalDialog
            .showModal(day_modal_component_1.DayModalComponent, {
            fullscreen: true,
            viewContainerRef: this.uiService.getRootVCRef()
                ? this.uiService.getRootVCRef()
                : this.vcRef,
            context: { date: new Date() }
        })
            .then(function (action) {
            console.log(action);
        });
    };
    CurrentChallengeComponent = __decorate([
        core_1.Component({
            selector: 'ns-current-challenge',
            templateUrl: './current-challenge.component.html',
            styleUrls: ['./current-challenge.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            ui_service_1.UIService])
    ], CurrentChallengeComponent);
    return CurrentChallengeComponent;
}());
exports.CurrentChallengeComponent = CurrentChallengeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTREO0FBQzVELGtFQUF1RTtBQUV2RSx3RUFBcUU7QUFDckUsc0RBQW9EO0FBUXBEO0lBQ0UsbUNBQ1UsV0FBK0IsRUFDL0IsS0FBdUIsRUFDdkIsU0FBb0I7UUFGcEIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFDM0IsQ0FBQztJQUVKLGtEQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsV0FBVzthQUNiLFNBQVMsQ0FBQyx1Q0FBaUIsRUFBRTtZQUM1QixVQUFVLEVBQUUsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRTtnQkFDN0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFO2dCQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDZCxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRTtTQUM5QixDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUMsTUFBYztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQW5CVSx5QkFBeUI7UUFOckMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztZQUNoRCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FHdUIsaUNBQWtCO1lBQ3hCLHVCQUFnQjtZQUNaLHNCQUFTO09BSm5CLHlCQUF5QixDQW9CckM7SUFBRCxnQ0FBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcblxuaW1wb3J0IHsgRGF5TW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9kYXktbW9kYWwvZGF5LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tICd+L2FwcC9zaGFyZWQvdWkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWN1cnJlbnQtY2hhbGxlbmdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1vZGFsRGlhbG9nOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHVpU2VydmljZTogVUlTZXJ2aWNlXG4gICkge31cblxuICBvbkNoYW5nZVN0YXR1cygpIHtcbiAgICB0aGlzLm1vZGFsRGlhbG9nXG4gICAgICAuc2hvd01vZGFsKERheU1vZGFsQ29tcG9uZW50LCB7XG4gICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudWlTZXJ2aWNlLmdldFJvb3RWQ1JlZigpXG4gICAgICAgICAgPyB0aGlzLnVpU2VydmljZS5nZXRSb290VkNSZWYoKVxuICAgICAgICAgIDogdGhpcy52Y1JlZixcbiAgICAgICAgY29udGV4dDogeyBkYXRlOiBuZXcgRGF0ZSgpIH1cbiAgICAgIH0pXG4gICAgICAudGhlbigoYWN0aW9uOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=