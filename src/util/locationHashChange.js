export default function locationHashChange(hash, replace = true) {
  hash = hash ? ('#' + hash).replace(/#+/, '#') : '';
  history[`${replace ? 'replace' : 'push'}State`]({}, '', location.href.replace(/(#.*)?$/, hash));
};
