/**
 * Express router paths go here.
 */

import { Immutable } from "@src/other/types";

const Paths = {
  Base: "/api",
  Users: {
    Base: "/users",
    Get: "/all",
    Add: "/add",
    Update: "/update",
    Delete: "/delete/:id",
  },
  Document: {
    Base: "/document",
    Get: "/list",
    Upload: "/upload",
    Delete: "/delete/:id",
  },
  Invoice: {
    Base: "/invoice",
    Get: "/list",
    Add: "/add",
  },
};

// **** Export **** //

export type TPaths = Immutable<typeof Paths>;
export default Paths as TPaths;
