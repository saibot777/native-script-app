"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var DayModalComponent = /** @class */ (function () {
    function DayModalComponent(modalParams) {
        this.modalParams = modalParams;
    }
    DayModalComponent.prototype.ngOnInit = function () {
        this.loadedDate = this.modalParams.context.date;
    };
    DayModalComponent.prototype.onHandleInput = function (action) {
        this.modalParams.closeCallback(action);
    };
    DayModalComponent = __decorate([
        core_1.Component({
            selector: 'ns-day-modal',
            templateUrl: './day-modal.component.html',
            styleUrls: ['./day-modal.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
    ], DayModalComponent);
    return DayModalComponent;
}());
exports.DayModalComponent = DayModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRheS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsa0VBQXNFO0FBUXRFO0lBR0UsMkJBQW9CLFdBQThCO1FBQTlCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtJQUFHLENBQUM7SUFFdEQsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUEwQixDQUFDLElBQUksQ0FBQztJQUN0RSxDQUFDO0lBRUQseUNBQWEsR0FBYixVQUFjLE1BQWM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQVhVLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztZQUN4QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FJaUMsZ0NBQWlCO09BSHZDLGlCQUFpQixDQVk3QjtJQUFELHdCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtZGF5LW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RheS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RheS1tb2RhbC5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgRGF5TW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsb2FkZWREYXRlOiBEYXRlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxQYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZGVkRGF0ZSA9ICh0aGlzLm1vZGFsUGFyYW1zLmNvbnRleHQgYXMgeyBkYXRlOiBEYXRlIH0pLmRhdGU7XG4gIH1cblxuICBvbkhhbmRsZUlucHV0KGFjdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5tb2RhbFBhcmFtcy5jbG9zZUNhbGxiYWNrKGFjdGlvbik7XG4gIH1cbn1cbiJdfQ==