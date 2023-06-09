import { InjectionToken } from "@angular/core";
import { DynamicRoute } from "src/app/modules/options/routes/dynamic-route";
import { PagesRegistry } from "src/app/modules/options/routes/pages-registry";
import { ComponentOptions } from "./components/components-options";
import { BusinessFunctions } from "./business/business-functions";

export interface ModuleOptions extends DynamicRoute, PagesRegistry, ComponentOptions, BusinessFunctions { }
export var FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<ModuleOptions>("forRoot() Components configuration.");