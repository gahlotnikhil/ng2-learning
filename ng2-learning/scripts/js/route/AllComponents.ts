import {Home} from '../home/Home';

import {About} from '../home/About';

import {Applications} from '../application/Applications';
import {ToDo} from '../application/todo/ToDo';
import {Calendar} from '../application/calendar/Calendar';

import {Forms} from '../form/Forms';
import {FormExample1} from '../form/FormExample1';

import {Showcase} from '../showcase/Showcase';
import {DialogComponent} from '../showcase/DialogComponent';
import {GridComponent} from '../showcase/GridComponent';
import {ListComponent} from '../showcase/ListComponent';
import {SubMenu2} from '../showcase/SubMenu2';

export class AllComponents {
    static components = {
        "home" : Home,
        "about" : About,

        "applications" : Applications,
        "todo" : ToDo,
        "calendar": Calendar,

        "forms" : Forms,
        "formExample1": FormExample1,

        "showcase": Showcase,
        "subMenu2": SubMenu2,
        "dialogComponent": DialogComponent,
        "gridComponent": GridComponent,
        "listComponent": ListComponent
    };
    
}