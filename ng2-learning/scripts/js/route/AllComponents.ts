import {Home} from 'js/home/Home';

import {About} from 'js/home/About';

import {Applications} from 'js/application/Applications';
import {ToDo} from 'js/application/todo/ToDo';
import {Calendar} from 'js/application/calendar/Calendar';

import {Forms} from 'js/form/Forms';

import {Showcase} from 'js/showcase/Showcase';
import {DialogComponent} from 'js/showcase/DialogComponent';
import {GridComponent} from 'js/showcase/GridComponent';
import {ListComponent} from 'js/showcase/ListComponent';
import {SubMenu2} from 'js/showcase/SubMenu2';

export class AllComponents {
    static components = {
        "home" : Home,
        "about" : About,

        "applications" : Applications,
        "todo" : ToDo,
        "calendar": Calendar,

        "forms" : Forms,

        "showcase": Showcase,
        "subMenu2": SubMenu2,
        "dialogComponent": DialogComponent,
        "gridComponent": GridComponent,
        "listComponent": ListComponent
    };
    
}