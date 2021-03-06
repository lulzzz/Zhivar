﻿/*!
* DevExtreme (dx.messages.en.js)
* Version: 17.1.2-beta
* Build date: Mon Apr 17 2017
*
* Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"))
        })
    } else {
        factory(DevExpress.localization)
    }
}(this, function(localization) {
    localization.loadMessages({
        en: {
            Yes: "بلی",
            No: "خیر",
            Cancel: "انصراف",
            Clear: "حذف",
            Done: "انجام شد",
            Loading: "بارگیری...",
            Select: "انتخاب...",
            Search: "جستجو",
            Back: "قبل",
            OK: "تایید",
            "dxCollectionWidget-noDataText": "",
            "validation-required": "الزامی",
            "validation-required-formatted": "{0} مورد نیاز است",
            "validation-numeric": "مقدار باید عدد باشد",
            "validation-numeric-formatted": "{0} باید عدد باشد",
            "validation-range": "مقدار خارج از محدوده مجاز است",
            "validation-range-formatted": "{0} خارج از محدوده مجاز است",
            "validation-stringLength": "طول مقدار وارد شده صحیح نیست",
            "validation-stringLength-formatted": "طول {0} صحیح نمی باشد",
            "validation-custom": "مقدار اشتباه است",
            "validation-custom-formatted": "{0} اشتباه است",
            "validation-compare": "مقدار یکی نسیت",
            "validation-compare-formatted": "{0} یکی نسیت",
            "validation-pattern": "مقدار با الگو مطابق نیست",
            "validation-pattern-formatted": "{0} با الگو مطابق نیست",
            "validation-email": "ایمیل معتبر نیست",
            "validation-email-formatted": "{0} معتبر نیست",
            "validation-mask": "مقدار معتبر نیست",
            "dxLookup-searchPlaceholder": "حداقل تعداد کاراکتر : {0}",
            "dxList-pullingDownText": "Pull down to refresh...",
            "dxList-pulledDownText": "Release to refresh...",
            "dxList-refreshingText": "بروزرسانی...",
            "dxList-pageLoadingText": "دریافت...",
            "dxList-nextButtonText": "بیشتر",
            "dxList-selectAll": "انتخاب همه",
            "dxListEditDecorator-delete": "حذف",
            "dxListEditDecorator-more": "بیشتر",
            "dxScrollView-pullingDownText": "Pull down to refresh...",
            "dxScrollView-pulledDownText": "Release to refresh...",
            "dxScrollView-refreshingText": "بروزرسانی...",
            "dxScrollView-reachBottomText": "دریافت...",
            "dxDateBox-simulatedDataPickerTitleTime": "اتخاب زمان",
            "dxDateBox-simulatedDataPickerTitleDate": "انتخاب تاریخ",
            "dxDateBox-simulatedDataPickerTitleDateTime": "انتخاب زمان و تاریخ",
            "dxDateBox-validation-datetime": "مقدار باید تارخ یا عدد باشد",
            "dxFileUploader-selectFile": "انتخاب فایل",
            "dxFileUploader-dropFile": "یا فایل را به اینجا بکشید",
            "dxFileUploader-bytes": "بایت",
            "dxFileUploader-kb": "کیلو",
            "dxFileUploader-Mb": "مگ",
            "dxFileUploader-Gb": "گیک",
            "dxFileUploader-upload": "ارسال",
            "dxFileUploader-uploaded": "ارسال شد",
            "dxFileUploader-readyToUpload": "آماده برای ارسال",
            "dxFileUploader-uploadFailedMessage": "اشکال در ارسال",
            "dxRangeSlider-ariaFrom": "از",
            "dxRangeSlider-ariaTill": "تا",
            "dxSwitch-onText": "روشن",
            "dxSwitch-offText": "خاموش",
            "dxForm-optionalMark": "اختیاری",
            "dxForm-requiredMessage": "{0} مورد نیاز است",
            "dxNumberBox-invalidValueMessage": "مقدار باید عدد باشد",
            "dxDataGrid-columnChooserTitle": "انتخاب ستون",
            "dxDataGrid-columnChooserEmptyText": "ستون را به اینجا بکشید تا مخفی شود",
            "dxDataGrid-groupContinuesMessage": "ادامه در صفحه بعد",
            "dxDataGrid-groupContinuedMessage": "ادامه از صفحه قبل",
            "dxDataGrid-groupHeaderText": "گروه بندی با این ستون",
            "dxDataGrid-ungroupHeaderText": "حذف گروه بندی",
            "dxDataGrid-ungroupAllText": "حذف گروه بندی همه ستون ها",
            "dxDataGrid-editingEditRow": "ویرایش",
            "dxDataGrid-editingSaveRowChanges": "ذخیره",
            "dxDataGrid-editingCancelRowChanges": "انصراف",
            "dxDataGrid-editingDeleteRow": "حذف",
            "dxDataGrid-editingUndeleteRow": "Undelete",
            "dxDataGrid-editingConfirmDeleteMessage": "آیا از حذف ردیف مطمئن هستید؟",
            "dxDataGrid-validationCancelChanges": "انصراف از تغیرات",
            "dxDataGrid-groupPanelEmptyText": "برای گروه بندی یک ستون را به اینجا بکشید.",
            "dxDataGrid-noDataText": "",
            "dxDataGrid-searchPanelPlaceholder": "جستجو...",
            "dxDataGrid-filterRowShowAllText": "(همه)",
            "dxDataGrid-filterRowResetOperationText": "تنظیم مجدد",
            "dxDataGrid-filterRowOperationEquals": "مساوی باشد",
            "dxDataGrid-filterRowOperationNotEquals": "مساوی نباشد",
            "dxDataGrid-filterRowOperationLess": "کمتر از",
            "dxDataGrid-filterRowOperationLessOrEquals": "کمتر یا مساوی با",
            "dxDataGrid-filterRowOperationGreater": "بیشتر از",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "بیشتر یا مساوی با",
            "dxDataGrid-filterRowOperationStartsWith": "شروع شود با",
            "dxDataGrid-filterRowOperationContains": "شامل",
            "dxDataGrid-filterRowOperationNotContains": "شامل نشود",
            "dxDataGrid-filterRowOperationEndsWith": "پایان یابد با",
            "dxDataGrid-filterRowOperationBetween": "بین",
            "dxDataGrid-filterRowOperationBetweenStartText": "شروع",
            "dxDataGrid-filterRowOperationBetweenEndText": "پایان",
            "dxDataGrid-applyFilterText": "اعمال فیلتر",
            "dxDataGrid-trueText": "✓",
            "dxDataGrid-falseText": "❐",
            "dxDataGrid-sortingAscendingText": "مرتب سازی صعودی",
            "dxDataGrid-sortingDescendingText": "مرتب سازی نزولی",
            "dxDataGrid-sortingClearText": "حذف مرتب سازی",
            "dxDataGrid-editingSaveAllChanges": "ذخیره تغیرات",
            "dxDataGrid-editingCancelAllChanges": "انصراف از تغییرات",
            "dxDataGrid-editingAddRow": "اضافه کردن ردیف جدید",
            "dxTreeList-editingAddRowToNode": "اضافه",
            "dxDataGrid-summaryMin": "حداقل: {0}",
            "dxDataGrid-summaryMinOtherColumn": "حداقل {1} برابر {0}",
            "dxDataGrid-summaryMax": "حداکثر: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "حداکثر of {1} برابر {0}",
            "dxDataGrid-summaryAvg": "میانگین: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "میانگین of {1} برابر {0}",
            "dxDataGrid-summarySum": "مجموع: {0}",
            "dxDataGrid-summarySumOtherColumn": "مجموع of {1} برابر {0}",
            "dxDataGrid-summaryCount": "تعداد: {0}",
            "dxDataGrid-columnFixingFix": "ثابت کردن",
            "dxDataGrid-columnFixingUnfix": "رها کردن",
            "dxDataGrid-columnFixingLeftPosition": "به چپ",
            "dxDataGrid-columnFixingRightPosition": "به راست",
            "dxDataGrid-exportTo": "خروجی",
            "dxDataGrid-exportToExcel": "خروجی به اکسل",
            "dxDataGrid-excelFormat": "فایل اکسل",
            "dxDataGrid-selectedRows": "ردیفهای انتخاب شده",
            "dxDataGrid-exportSelectedRows": "خروجی از ردیفهای انتخاب شده",
            "dxDataGrid-exportAll": "خروجی به اکسل",
            "dxDataGrid-headerFilterEmptyValue": "(خالی ها)",
            "dxDataGrid-headerFilterOK": "تایید",
            "dxDataGrid-headerFilterCancel": "انصراف",
            "dxDataGrid-ariaColumn": "ستون",
            "dxDataGrid-ariaValue": "مقدار",
            "dxDataGrid-ariaFilterCell": "Filter cell",
            "dxDataGrid-ariaCollapse": "بستن",
            "dxDataGrid-ariaExpand": "باز کردن",
            "dxDataGrid-ariaDataGrid": "Data grid",
            "dxDataGrid-ariaSearchInGrid": "جستجو در جدول",
            "dxDataGrid-ariaSelectAll": "انتخاب همه",
            "dxDataGrid-ariaSelectRow": "انتخاب ردیف",
            "dxPager-infoText": "صفحه {0} از {1} ({2} ردیف)",
            "dxPager-pagesCountText": "از",
            "dxPivotGrid-grandTotal": "مجموع کل",
            "dxPivotGrid-total": "{0} کل",
            "dxPivotGrid-fieldChooserTitle": "انتخابگر فیلد",
            "dxPivotGrid-showFieldChooser": "نمایش انتخابگر فیلد",
            "dxPivotGrid-expandAll": "باز کردن همه",
            "dxPivotGrid-collapseAll": "بستن همه",
            "dxPivotGrid-sortColumnBySummary": 'مرتب سازی "{0}" توسط این ستون',
            "dxPivotGrid-sortRowBySummary": 'مرتب سازی "{0}" توسط این ردیف',
            "dxPivotGrid-removeAllSorting": "حذف همه مرتب سازی ها",
            "dxPivotGrid-rowFields": "فیلدهای ردیف",
            "dxPivotGrid-columnFields": "فیلدهای ستون",
            "dxPivotGrid-dataFields": "مقادیر فیلدها",
            "dxPivotGrid-filterFields": "فیلتر کردن فیلدها",
            "dxPivotGrid-allFields": "تمام فیلدها",
            "dxPivotGrid-columnFieldArea": "ستون فیلدها را اینجا بکشید",
            "dxPivotGrid-dataFieldArea": "مقادیر فیلدها را اینجا بکشید",
            "dxPivotGrid-rowFieldArea": "مقادیر ردیفها را اینجا بکشید",
            "dxPivotGrid-filterFieldArea": "فیلدهای فیلتر شده را اینجا بکشید",
            "dxScheduler-editorLabelTitle": "عنوان",
            "dxScheduler-editorLabelStartDate": "تاریخ شروع",
            "dxScheduler-editorLabelEndDate": "تاریخ اتمام",
            "dxScheduler-editorLabelDescription": "توضیحات",
            "dxScheduler-editorLabelRecurrence": "تکرار",
            "dxScheduler-openAppointment": "Open appointment",
            "dxScheduler-recurrenceNever": "هیچگاه",
            "dxScheduler-recurrenceDaily": "روزانه",
            "dxScheduler-recurrenceWeekly": "هفتگی",
            "dxScheduler-recurrenceMonthly": "ماهانه",
            "dxScheduler-recurrenceYearly": "سالانه",
            "dxScheduler-recurrenceEvery": "همیشه",
            "dxScheduler-recurrenceEnd": "پایان تکرار",
            "dxScheduler-recurrenceAfter": "بعد از",
            "dxScheduler-recurrenceOn": "روشن",
            "dxScheduler-recurrenceRepeatDaily": "روز",
            "dxScheduler-recurrenceRepeatWeekly": "هفته",
            "dxScheduler-recurrenceRepeatMonthly": "ماه",
            "dxScheduler-recurrenceRepeatYearly": "سال",
            "dxScheduler-switcherDay": "روز",
            "dxScheduler-switcherWeek": "هفته",
            "dxScheduler-switcherWorkWeek": "هفته کاری",
            "dxScheduler-switcherMonth": "ماه",
            "dxScheduler-switcherAgenda": "دستور کار",
            "dxScheduler-switcherTimelineDay": "Timeline Day",
            "dxScheduler-switcherTimelineWeek": "Timeline Week",
            "dxScheduler-switcherTimelineWorkWeek": "Timeline Work Week",
            "dxScheduler-switcherTimelineMonth": "Timeline Month",
            "dxScheduler-recurrenceRepeatOnDate": "در تاریخ",
            "dxScheduler-recurrenceRepeatCount": "occurrence(s)",
            "dxScheduler-allDay": "تمام روز",
            "dxScheduler-confirmRecurrenceEditMessage": "Do you want to edit only this appointment or the whole series?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Do you want to delete only this appointment or the whole series?",
            "dxScheduler-confirmRecurrenceEditSeries": "Edit series",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Delete series",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Edit appointment",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Delete appointment",
            "dxScheduler-noTimezoneTitle": "No timezone",
            "dxCalendar-todayButtonText": "امروز",
            "dxCalendar-ariaWidgetName": "تقویم",
            "dxColorView-ariaRed": "قرمز",
            "dxColorView-ariaGreen": "سبز",
            "dxColorView-ariaBlue": "آبی",
            "dxColorView-ariaAlpha": "شفافیت",
            "dxColorView-ariaHex": "کد رنگ",
            "vizExport-printingButtonText": "پرینت",
            "vizExport-titleMenuText": "خروجی/پرینت",
            "vizExport-exportButtonText": "{0} فایل"
        }
    })
});
