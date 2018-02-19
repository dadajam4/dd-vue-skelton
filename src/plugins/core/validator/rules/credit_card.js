import isCreditCard from 'validator/lib/isCreditCard';

export default function credit_card(value) {
  return isCreditCard(String(value));
}
