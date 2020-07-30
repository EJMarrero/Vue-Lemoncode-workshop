import Vue from 'vue';
import { SnackBarPlugin } from "./common/plugins";

declare module 'vue/types/vue' {
  interface Vue {
    $snackBar: SnackBarPlugin;
  }
  interface VueConstructor {
    $snackBar: SnackBarPlugin;
  }
}
