!(function (t) {
    "use strict";
    var e = function () {};
    (e.prototype.init = function () {
        t("#sa-basic").on("click", function () {
            Swal.fire({
                title: "لورم ایپسوم متنی ساختگی!",
                confirmButtonClass: "btn btn-confirm mt-2",
            });
        }),
            t("#sa-title").click(function () {
                Swal.fire({
                    title: "اینترنت؟",
                    text: "مگه هنوز هست؟",
                    type: "question",
                    confirmButtonClass: "btn btn-confirm mt-2",
                });
            }),
            t("#sa-success").click(function () {
                Swal.fire({
                    title: "کارت خوب بود!",
                    text: "روی دکمه کلیک کردی!",
                    type: "success",
                    confirmButtonClass: "btn btn-confirm mt-2",
                });
            }),
            t(".sa-error").click(function () {
                Swal.fire({
                    type: "error",
                    title: "اوپس...",
                    text: "یه چیزی اشتباهه!",
                    confirmButtonClass: "btn btn-confirm mt-2",
                    footer: '<a href="">با این مشکل چکار کنم؟</a>',
                });
            }),
            t("#sa-long-content").click(function () {
                Swal.fire({
                    imageUrl: "https://placeholder.pics/svg/300x1500",
                    imageHeight: 1500,
                    imageAlt: "یک تصویر طولانی",
                    confirmButtonClass: "btn btn-confirm mt-2",
                });
            }),
            t("#sa-custom-position").click(function () {
                Swal.fire({
                    position: "top-end",
                    type: "success",
                    title: "کار شما ذخیره شد",
                    showConfirmButton: !1,
                    timer: 1500,
                });
            }),
            t("#sa-warning").click(function () {
                Swal({
                    title: "ایا از حذف این  مطمئن هستید؟",
                    text: "این کار قابل بازگشت نیست!",
                    type: "warning",
                    showCancelButton: !0,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "بله حذفش کن!",
                }).then(function (t) {
                    t.value &&
                        Swal.fire("حذف شد!", "فایل شما حذف شد.", "success");
                });
            }),
            t("#sa-params").click(function () {
                Swal.fire({
                    title: "مطمئنی؟",
                    text: "این کار قابل بازگشت نیست!",
                    type: "warning",
                    showCancelButton: !0,
                    confirmButtonText: "بله حذفش کن!",
                    cancelButtonText: "نه لغو کن!",
                    confirmButtonClass: "btn btn-success mt-2",
                    cancelButtonClass: "btn btn-danger ml-2 mt-2",
                    buttonsStyling: !1,
                }).then(function (t) {
                    t.value
                        ? Swal.fire({
                              title: "حذف شد!",
                              text: "فایل شما حذف شد.",
                              type: "success",
                          })
                        : t.dismiss === Swal.DismissReason.cancel &&
                          Swal.fire({
                              title: "لغو شد",
                              text: "سطر انتخاب شده حذف نگردید:)",
                              type: "error",
                          });
                });
            }),
            t("#sa-image").click(function () {
                Swal.fire({
                    title: "ادمین تو",
                    text: "قالب مدیریتی واکنش گرا",
                    imageUrl: "assets/images/logo-sm.png",
                    imageHeight: 50,
                    animation: !1,
                    confirmButtonClass: "btn btn-confirm mt-2",
                });
            }),
            t("#sa-close").click(function () {
                var t;
                Swal.fire({
                    title: "بسته شدن خودکار هشدار!",
                    html: "من بعد از <strong></strong> ثانیه بسته میشم.",
                    timer: 2e3,
                    onBeforeOpen: function () {
                        Swal.showLoading(),
                            (t = setInterval(function () {
                                Swal.getContent().querySelector(
                                    "strong"
                                ).textContent = Swal.getTimerLeft();
                            }, 100));
                    },
                    onClose: function () {
                        clearInterval(t);
                    },
                }).then(function (t) {
                    t.dismiss === Swal.DismissReason.timer &&
                        console.log("من توسط تایمر بسته شدم");
                });
            }),
            t("#custom-html-alert").click(function () {
                Swal.fire({
                    title: "<u>مثال</u> <i>اچ تی ام ال</i>",
                    type: "info",
                    html: 'شما می توانید از <b>متن تو پر</b>، <a href="mailto:ghaemomidi@yahoo.com">لینک ها</a> و تگ های دیگر اچ تی ام ال استفاده کنید.',
                    showCloseButton: !0,
                    showCancelButton: !0,
                    confirmButtonClass: "btn btn-confirm mt-2",
                    cancelButtonClass: "btn btn-cancel ml-2 mt-2",
                    confirmButtonText:
                        '<i class="mdi mdi-thumb-up-outline"></i> عالی!',
                    cancelButtonText:
                        '<i class="mdi mdi-thumb-down-outline"></i>',
                });
            }),
            t("#custom-padding-width-alert").click(function () {
                Swal.fire({
                    title: "عرض، پدینگ و پس زمینه دلخواه",
                    width: 600,
                    padding: 100,
                    confirmButtonClass: "btn btn-confirm mt-2",
                    background:
                        "#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)",
                });
            }),
            t("#ajax-alert").click(function () {
                Swal.fire({
                    title: "نام کاربری گیت هاب خود را ارسال کنید",
                    input: "text",
                    inputAttributes: { autocapitalize: "off" },
                    showCancelButton: !0,
                    confirmButtonText: "جست و جو",
                    showLoaderOnConfirm: !0,
                    preConfirm: function (t) {
                        return fetch("//api.github.com/users/" + t)
                            .then(function (t) {
                                if (!t.ok) throw new Error(t.statusText);
                                return t.json();
                            })
                            .catch(function (t) {
                                Swal.showValidationMessage(
                                    "درخواست انجام نشد: " + t
                                );
                            });
                    },
                    allowOutsideClick: function () {
                        Swal.isLoading();
                    },
                }).then(function (t) {
                    t.value &&
                        Swal.fire({
                            title: t.value.login + "'s avatar",
                            imageUrl: t.value.avatar_url,
                        });
                });
            }),
            t("#chaining-alert").click(function () {
                Swal.mixin({
                    input: "text",
                    confirmButtonText: "بعدی &rarr;",
                    showCancelButton: !0,
                    progressSteps: ["1", "2", "3"],
                })
                    .queue([
                        {
                            title: "سوال 1",
                            text: "لورم ایپسوم متنی ساختگی است",
                        },
                        "سوال 2",
                        "سوال 3",
                    ])
                    .then(function (t) {
                        t.value &&
                            Swal.fire({
                                title: "تمام شد!",
                                html:
                                    "پاسخ های شما: <pre><code>" +
                                    JSON.stringify(t.value) +
                                    "</code></pre>",
                                confirmButtonText: "دوست داشتنی!",
                            });
                    });
            }),
            t("#dynamic-alert").click(function () {
                swal.queue([
                    {
                        title: "آی پی پابلیک شما",
                        confirmButtonText: "آی پی منو نشون بده",
                        confirmButtonClass: "btn btn-confirm mt-2",
                        text: "آی پی پابلیک شما با استفاده از درخواست ای جکس دریافت خواهد شد.",
                        showLoaderOnConfirm: !0,
                        preConfirm: function () {
                            return new Promise(function (e) {
                                t.get("https://api.ipify.org?format=json").done(
                                    function (t) {
                                        swal.insertQueueStep(t.ip), e();
                                    }
                                );
                            });
                        },
                    },
                ]);
            });
    }),
        (t.SweetAlert = new e()),
        (t.SweetAlert.Constructor = e);
})(window.jQuery),
    (function (t) {
        "use strict";
        window.jQuery.SweetAlert.init();
    })();
