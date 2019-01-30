"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var challenges_routing_module_1 = require("./challenges-routing.module");
var challenge_tabs_component_1 = require("./challenge-tabs/challenge-tabs.component");
var current_challenge_component_1 = require("./current-challenge/current-challenge.component");
var today_component_1 = require("./today/today.component");
var shared_module_1 = require("../shared/shared.module");
var ChallengesModule = /** @class */ (function () {
    function ChallengesModule() {
    }
    ChallengesModule = __decorate([
        core_1.NgModule({
            declarations: [
                challenge_tabs_component_1.ChallengeTabsComponent,
                current_challenge_component_1.CurrentChallengeComponent,
                today_component_1.TodayComponent
            ],
            imports: [common_1.NativeScriptCommonModule, challenges_routing_module_1.ChallengesRoutingModule, shared_module_1.SharedModule]
        })
    ], ChallengesModule);
    return ChallengesModule;
}());
exports.ChallengesModule = ChallengesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGFsbGVuZ2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUseUVBQXNFO0FBQ3RFLHNGQUFtRjtBQUNuRiwrRkFBNEY7QUFDNUYsMkRBQXlEO0FBQ3pELHlEQUF1RDtBQVV2RDtJQUFBO0lBQStCLENBQUM7SUFBbkIsZ0JBQWdCO1FBUjVCLGVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWixpREFBc0I7Z0JBQ3RCLHVEQUF5QjtnQkFDekIsZ0NBQWM7YUFDZjtZQUNELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixFQUFFLG1EQUF1QixFQUFFLDRCQUFZLENBQUM7U0FDM0UsQ0FBQztPQUNXLGdCQUFnQixDQUFHO0lBQUQsdUJBQUM7Q0FBQSxBQUFoQyxJQUFnQztBQUFuQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ2hhbGxlbmdlc1JvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2NoYWxsZW5nZXMtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hhbGxlbmdlVGFic0NvbXBvbmVudCB9IGZyb20gJy4vY2hhbGxlbmdlLXRhYnMvY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50JztcbmltcG9ydCB7IEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQgfSBmcm9tICcuL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb2RheUNvbXBvbmVudCB9IGZyb20gJy4vdG9kYXkvdG9kYXkuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2hhbGxlbmdlVGFic0NvbXBvbmVudCxcbiAgICBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50LFxuICAgIFRvZGF5Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsIENoYWxsZW5nZXNSb3V0aW5nTW9kdWxlLCBTaGFyZWRNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZXNNb2R1bGUge31cbiJdfQ==