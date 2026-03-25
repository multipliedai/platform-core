// Root entrypoint for the git-installed package.
// This intentionally re-exports the runtime-safe shared modules.

export * as common from "../packages/common/src/index";
export * as mobileapp from "../packages/mobileapp/src/index";

