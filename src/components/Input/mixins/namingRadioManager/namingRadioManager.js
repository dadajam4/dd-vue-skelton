import NamingRadioContext from './NamingRadioContext';



const namingRadioManager = {
  contexts: {},

  getContextByName(name) {
    let context = this.contexts[name];
    if (!context) {
      context = new NamingRadioContext(name);
      this.contexts[name] = context;
    }
    return context;
  },

  push($vm) {
    const context = this.getContextByName($vm.name);
    context.push($vm);
    return context;
  },

  remove($vm) {
    const context = this.contexts[name];
    if (!context) return;

    context.remove($vm);
    if (context.isEmpty) {
      this.contexts[name] = null;
      delete this.contexts[name];
      return;
    }
    return context;
  },
};



export default namingRadioManager;
