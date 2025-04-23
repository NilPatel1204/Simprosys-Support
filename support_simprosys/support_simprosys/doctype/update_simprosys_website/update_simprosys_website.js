// Copyright (c) 2025, Sanskar Technolab and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Update Simprosys Website", {
//   update: function (frm) {
//     // Clear logs before build
//     frm.set_value("logs", "");

//     // Realtime log listener
//     frappe.realtime.on("astro_build_logs", function (data) {
//       if (data.log) {
//         let currentLogs = frm.doc.logs || "";
//         frm.set_value("logs", currentLogs + data.log + "\n");
//         frm.refresh_field("logs");
//       }
//     });

//     // Trigger build without freeze
//     frappe.call({
//       method: "support_simprosys.support_simprosys.api.trigger_astro_build",
//       callback: function (r) {
//         if (r.message.status === "success") {
//           frappe.msgprint("✅ Build Successful");
//         } else {
//           frappe.msgprint("❌ Build Failed: " + r.message.message);
//         }
//       },
//     });
//   },
// });








// frappe.ui.form.on("Update Simprosys Website", {
//   update: function (frm) {
//     frappe.call({
//       method: "support_simprosys.support_simprosys.api.trigger_astro_build",
//       callback: function (r) {
//         if (r.message.status === "success") {
//           frappe.msgprint("🚀 Website update started successfully!");

//           // Poll build status after a few seconds
//           setTimeout(() => {
//             check_build_status(frm);
//           }, 5000);
//         } else {
//           frappe.msgprint("❌ Error: " + r.message.message);
//         }
//       },
//     });
//   },
// });

// function check_build_status(frm) {
//   frappe.call({
//     method: "support_simprosys.support_simprosys.api.get_build_status",
//     callback: function (r) {
//       if (r.message.status === "success") {
//         frappe.msgprint("✅ Build Completed Successfully!");
//       } else if (r.message.status === "failed") {
//         frappe.msgprint("❌ Build Failed: " + r.message.message);
//       } else {
//         frappe.msgprint("⚠️ Build status: " + r.message.status);
//       }
//     },
//   });
// }


// * Currently Working JS
frappe.ui.form.on("Update Simprosys Website", {
  update: function (frm) {
    // Clear logs before build
    frm.set_value("logs", "");

    // Realtime log listener
    frappe.realtime.on("astro_build_logs", function (data) {
      if (data.log) {
        let currentLogs = frm.doc.logs || "";
        frm.set_value("logs", currentLogs + data.log + "\n");
        frm.refresh_field("logs");
      }
    });

    // Trigger build without freeze
    frappe.call({
      method:
        "support_simprosys.support_simprosys.api.trigger_astro_build_realtime",
      callback: function (r) {
        if (r.message.status === "success") {
          frappe.msgprint("✅ Build Successful");
        } else {
          frappe.msgprint("❌ Build Failed: " + r.message.message);
        }
      },
    });
  },
});
// * ----------------------------------


// frappe.ui.form.on("Update Simprosys Website", {
//   onload: function (frm) {
//     // Inject custom CSS styles into the page for the logs field
//     const style = document.createElement("style");
//     style.innerHTML = `
//       div[data-fieldname="logs"] .ql-editor {
//         max-height: 350px !important;
//         overflow-y: auto !important;
//         font-family: monospace !important;
//         font-size: 13px !important;
//         background-color: #f8f8f8 !important;
//         white-space: pre-wrap;
//       }
//     `;
//     document.head.appendChild(style);
//   },

//   update: function (frm) {
//     // Clear logs before starting
//     frm.set_value("logs", "");

//     // Real-time listener
//     frappe.realtime.on("astro_build_logs", function (data) {
//       if (data.log) {
//         let currentLogs = frm.doc.logs || "";
//         let newLog = currentLogs + data.log + "\n";
//         frm.set_value("logs", newLog);
//         frm.refresh_field("logs");

//         // Scroll to bottom after log update
//         setTimeout(() => {
//           const logsWrapper = frm.fields_dict.logs?.$wrapper;
//           const qlEditor = logsWrapper?.find(".ql-editor")[0];
//           if (qlEditor) {
//             qlEditor.scrollTop = qlEditor.scrollHeight;
//           }
//         }, 100);
//       }
//     });

//     // Trigger build call
//     frappe.call({
//       method:
//         "support_simprosys.support_simprosys.api.trigger_astro_build_realtime",
//       callback: function (r) {
//         if (r.message.status === "success") {
//           frappe.msgprint("✅ Build Successful");
//         } else {
//           frappe.msgprint("❌ Build Failed: " + r.message.message);
//         }
//       },
//     });
//   },
// });
