export default class NamingRadioContext {
  get isEmpty() { return !this.items.length }

  constructor(name) {
    this.name = name;
    this.items = [];
  }

  exist($vm) {
    return !!this.items.find(target => target === $vm)
  }

  push($vm) {
    if (!this.exist($vm)) {
      this.items.push($vm);
      $vm._namingRadioContextWatcher = $vm.$watch('innerValue', (newVal, oldVal) => {
        if (newVal) this.onVmActive($vm);
      });
    }
    return this;
  }

  onVmActive($vm) {
    this.items.forEach(item => {
      if (item.value !== $vm.value) item.innerValue = false;
    });
  }

  remove($vm) {
    const index = this.items.indexOf($vm);
    if (index !== -1) this.items.splice(index, 1);
    $vm._namingRadioContextWatcher && $vm._namingRadioContextWatcher();
    $vm._namingRadioContextWatcher = null;
    delete $vm._namingRadioContextWatcher;
    return this;
  }
}