export function getClientLanguage() {
  if (typeof window === 'undefined') {
    console.warn('[clientAcceptingLanguages] Execution on the server side is not permitted.');
    return;
  }

  const n = window.navigator;
  return (n.languages && n.languages[0])
    || n.language
    || n.userLanguage
    || n.browserLanguage;
}

export function getClientAcceptingLanguages() {
  if (typeof window === 'undefined') {
    console.warn('[clientAcceptingLanguages] Execution on the server side is not permitted.');
    return [];
  }

  const n = window.navigator;
  return n.languages || [n.language || n.userLanguage || n.browserLanguage];
}
