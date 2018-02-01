import {
  createSimpleFunctional
} from '~/util';

import Toolbar from './Toolbar';
import ToolbarSideIcon from './ToolbarSideIcon';
import ToolbarExtension from './ToolbarExtension';



const ToolbarTitle = createSimpleFunctional('toolbar__title');
const ToolbarItems = createSimpleFunctional('toolbar__items');



export default {
  Toolbar,
  ToolbarSideIcon,
  ToolbarTitle,
  ToolbarItems,
  ToolbarExtension,
}
