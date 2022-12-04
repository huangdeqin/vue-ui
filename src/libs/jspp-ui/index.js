import Carousel from './Carousel/index'
import CarItem from './Carousel/Item';
import SelectorUi from './Selector/index'
import TreeMenu from './TreeMenu/index'
import MenuItem from './TreeMenu/MenuItem'
import SubMenu from './TreeMenu/SubMenu'
import ReSubMenu from './TreeMenu/ReSubMenu'
import MagnifierUi from './Magnifier/index'
import StarsUi from './StarsUi/index'
import ModalUi from './Modal/index'
import Transfer from './Transfer/Transfer'
import CalendarUi from './Calendar/Index'


let MyUiComponents = {
    Carousel,
    CarItem,
    SelectorUi,
    TreeMenu,
    MenuItem,
    SubMenu,
    ReSubMenu,
    MagnifierUi,
    StarsUi,
    ModalUi,
    Transfer,
    CalendarUi
};


MyUiComponents.install = function (Vue) {
    for (let comp in MyUiComponents) {
        Vue.component(comp, MyUiComponents[comp]);
    }
}

// MyUiComponents.install = function (Vue) {
//     Vue.component(Carousel.name, Carousel);
//     Vue.component(CarItem.name, CarItem);
//     Vue.component(Selector.name, Selector);
//     Vue.component(TreeMenu.name, TreeMenu);
//     Vue.component(MenuItem.name, MenuItem);
//     Vue.component(SubMenu.name, SubMenu);
//     Vue.component(ReSubMenu.name, ReSubMenu);
//     Vue.component(Magnifier.name, Magnifier);
//     Vue.component(StarsUi.name, StarsUi);
//     Vue.component(Modal.name, Modal);
// }

export default MyUiComponents;
