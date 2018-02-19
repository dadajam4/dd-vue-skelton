import { parseDate as parse } from '~/util/date';

export default function date_format(value, [format]) {
  return !!parse(value, format);
};
