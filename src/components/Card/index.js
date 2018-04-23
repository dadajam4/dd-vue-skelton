import {
  createSimpleFunctional
} from '~/util';

import Card from './Card';
const CardTitle = createSimpleFunctional('card__title');
const CardText = createSimpleFunctional('card__text');
const CardActions = createSimpleFunctional('card__actions');



export default {
  Card,
  CardTitle,
  CardText,
  CardActions,
};
