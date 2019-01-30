"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var router_1 = require("nativescript-angular/router");
var challenge_edit_component_1 = require("./challenge-edit.component");
var shared_module_1 = require("~/app/shared/shared.module");
var ChallengeEditModule = /** @class */ (function () {
    function ChallengeEditModule() {
    }
    ChallengeEditModule = __decorate([
        core_1.NgModule({
            declarations: [challenge_edit_component_1.ChallengeEditComponent],
            imports: [
                common_1.NativeScriptCommonModule,
                // NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forChild([
                    { path: '', component: challenge_edit_component_1.ChallengeEditComponent }
                ]),
                shared_module_1.SharedModule
            ]
        })
    ], ChallengeEditModule);
    return ChallengeEditModule;
}());
exports.ChallengeEditModule = ChallengeEditModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLWVkaXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLWVkaXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUN2RSxzREFBdUU7QUFFdkUsdUVBQW9FO0FBQ3BFLDREQUEwRDtBQWExRDtJQUFBO0lBQWtDLENBQUM7SUFBdEIsbUJBQW1CO1FBWC9CLGVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLGlEQUFzQixDQUFDO1lBQ3RDLE9BQU8sRUFBRTtnQkFDUCxpQ0FBd0I7Z0JBQ3hCLDRCQUE0QjtnQkFDNUIsaUNBQXdCLENBQUMsUUFBUSxDQUFDO29CQUNoQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFFO2lCQUNoRCxDQUFDO2dCQUNGLDRCQUFZO2FBQ2I7U0FDRixDQUFDO09BQ1csbUJBQW1CLENBQUc7SUFBRCwwQkFBQztDQUFBLEFBQW5DLElBQW1DO0FBQXRCLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ2hhbGxlbmdlRWRpdENvbXBvbmVudCB9IGZyb20gJy4vY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ2hhbGxlbmdlRWRpdENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgLy8gTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IENoYWxsZW5nZUVkaXRDb21wb25lbnQgfVxuICAgIF0pLFxuICAgIFNoYXJlZE1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZUVkaXRNb2R1bGUge31cbiJdfQ==