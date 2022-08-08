const { YupRouter } = require("../../router-yup");
const { fileUpload } = require("./upload");
const { getFile } = require("./get");
const { fileDelete } = require("./delete");
const { fileUpdate } = require("./update");

const fileRouter = new YupRouter();

fileRouter.prefix("/file");

fileRouter.addRoutes([fileUpload, getFile, fileDelete, fileUpdate]);

exports.fileRouter = fileRouter;
