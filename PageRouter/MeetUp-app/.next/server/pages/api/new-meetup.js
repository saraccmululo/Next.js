"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n// /api/new-meetup\n// POST /api/new-meetup\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        console.log(\"Received data:\", data);\n        try {\n            console.log(\"Connecting to MongoDB...\");\n            const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(process.env.MONGODB_URI);\n            console.log(\"Connected to MongoDB\");\n            const db = client.db();\n            const meetupsCollection = db.collection(\"meetups\");\n            console.log(\"Inserting document...\");\n            const result = await meetupsCollection.insertOne(data);\n            console.log(\"Insert result:\", result);\n            client.close();\n            return res.status(201).json({\n                message: \"Meetup inserted!\"\n            });\n        } catch (error) {\n            console.error(\"Failed to insert meetup:\", error);\n            return res.status(500).json({\n                message: \"Inserting meetup failed\",\n                error: error.message\n            });\n        }\n    } else {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUVSLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFJO1FBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRUgsSUFBSSxDQUFDLENBQUM7UUFFcEMsSUFBSTtZQUNGRSxPQUFPLENBQUNDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQ3hDLE1BQU1DLE1BQU0sR0FBRyxNQUFNVCx3REFBbUIsQ0FDdENXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLENBQ3hCO1lBQ0ROLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFFcEMsTUFBTU0sRUFBRSxHQUFHTCxNQUFNLENBQUNLLEVBQUUsRUFBRTtZQUN0QixNQUFNQyxpQkFBaUIsR0FBR0QsRUFBRSxDQUFDRSxVQUFVLENBQUMsU0FBUyxDQUFDO1lBRWxEVCxPQUFPLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3JDLE1BQU1TLE1BQU0sR0FBRyxNQUFNRixpQkFBaUIsQ0FBQ0csU0FBUyxDQUFDYixJQUFJLENBQUM7WUFDdERFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixFQUFFUyxNQUFNLENBQUMsQ0FBQztZQUV0Q1IsTUFBTSxDQUFDVSxLQUFLLEVBQUUsQ0FBQztZQUVmLE9BQU9oQixHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsT0FBTyxFQUFFLGtCQUFrQjthQUFFLENBQUMsQ0FBQztRQUMvRCxFQUFFLE9BQU9DLEtBQUssRUFBRTtZQUNkaEIsT0FBTyxDQUFDZ0IsS0FBSyxDQUFDLDBCQUEwQixFQUFFQSxLQUFLLENBQUMsQ0FBQztZQUNqRCxPQUFPcEIsR0FBRyxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSx5QkFBeUI7Z0JBQUVDLEtBQUssRUFBRUEsS0FBSyxDQUFDRCxPQUFPO2FBQUUsQ0FBQyxDQUFDO1FBQzVGLENBQUM7SUFDSCxPQUFPO1FBQ0wsT0FBT25CLEdBQUcsQ0FBQ2lCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxvQkFBb0I7U0FBRSxDQUFDLENBQUM7SUFDakUsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanM/NzM5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuXG4vLyAvYXBpL25ldy1tZWV0dXBcbi8vIFBPU1QgL2FwaS9uZXctbWVldHVwXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcbiAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgZGF0YTonLCBkYXRhKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGluZyB0byBNb25nb0RCLi4uJyk7XG4gICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICAgICBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gTW9uZ29EQicpO1xuXG4gICAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICAgICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdJbnNlcnRpbmcgZG9jdW1lbnQuLi4nKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKTtcbiAgICAgIGNvbnNvbGUubG9nKCdJbnNlcnQgcmVzdWx0OicsIHJlc3VsdCk7XG5cbiAgICAgIGNsaWVudC5jbG9zZSgpO1xuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAnTWVldHVwIGluc2VydGVkIScgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBpbnNlcnQgbWVldHVwOicsIGVycm9yKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdJbnNlcnRpbmcgbWVldHVwIGZhaWxlZCcsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImNsaWVudCIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();