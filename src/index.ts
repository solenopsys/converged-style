export * from "./styles-injector";

import type { PresetUnoOptions } from "@unocss/preset-uno";
import presetUno from "@unocss/preset-uno";
import type { RuntimeContext } from "./config";
import init from "./config";

import presetMini from "@unocss/preset-mini";
import presetAttributify from "@unocss/preset-attributify";

init({
	defaults: {
		presets: [presetMini(), presetAttributify()],
	},
});

window.__unocss_runtime = window.__unocss_runtime ?? ({} as RuntimeContext);
window.__unocss_runtime.presets = Object.assign(
	window.__unocss_runtime?.presets ?? {},
	{
		presetUno: (options: PresetUnoOptions) => presetUno(options),
	},
);
