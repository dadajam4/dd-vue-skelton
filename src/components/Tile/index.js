import {
  createSimpleFunctional
} from '~/util';



import TileGroup from './TileGroup';
import TileGroupItem from './TileGroupItem';
import Tile from './Tile';
import TileAction from './TileAction';
import TileAvatar from './TileAvatar';

const TileContent = createSimpleFunctional('tile__content', 'div');
const TileTitle = createSimpleFunctional('tile__title', 'div');
const TileSubTitle = createSimpleFunctional('tile__sub-title', 'div');
const TileText = createSimpleFunctional('tile__text', 'p');
const TileActionText = createSimpleFunctional('tile__action-text', 'span');



export default {
  TileGroup,
  TileGroupItem,
  Tile,
  TileAvatar,
  TileAction,
  TileContent,
  TileTitle,
  TileSubTitle,
  TileText,
  TileActionText,
}
