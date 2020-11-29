import Vue from "vue";
interface Binding {
  value: BindingValue
};

interface BindingValue {
  handler: string,
  exclude: string[],
  excludeStart: string
};

let handleOutsideClick = (_e: any): void => {};

const blurClosing: any = {
  bind(el: HTMLElement, binding: Binding, vnode: any): void {
    handleOutsideClick = (e: any) => {
      e.stopPropagation();
      const { handler, exclude, excludeStart }: BindingValue = binding.value;
      const targ: HTMLElement = e.target;
      // Add a excluded items because of external components that can be cliked
      // They dont have excluded class so should be added manually
      if (exclude?.find(el => el === targ.className)) {
        return;
      }
      if (excludeStart && targ.className.startsWith(excludeStart)) {
        return;
      }
      if (
        !el.contains(targ) &&
        !targ.classList.contains("excluded") &&
        !targ.closest(".excluded")
      ) {
        vnode.context[handler]();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
  },
  unbind(): void {
    document.removeEventListener("click", handleOutsideClick);
    document.removeEventListener("touchstart", handleOutsideClick);
  }
};

export default Vue.directive("blur-closing", blurClosing);
