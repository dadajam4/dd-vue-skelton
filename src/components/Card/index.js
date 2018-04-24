import {
  createSimpleFunctional
} from '~/util';

import Card from './Card';
const CardTitle = createSimpleFunctional('card__title', {classProps: {divider: true}});
const CardText = createSimpleFunctional('card__text');
const CardActions = createSimpleFunctional('card__actions', {classProps: {divider: true}});



export default {
  Card,
  CardTitle,
  CardText,
  CardActions,
};
