# ESM External Modules Tree-shaking Test

This directory provides a test environment for the ESM external module named import and tree-shaking functionality implemented in PR #19416.

## 🎯 Test Purpose

Previously in webpack, external modules (externals) were always generated with namespace imports (`import * as lodash from "lodash"`). This prevented tree-shaking and included unused exports, causing bloated bundles.

With the implementation in PR #19416, this test verifies that ESM external modules now generate **named imports** (`import { debounce, throttle } from "lodash"`) and that tree-shaking works correctly.
