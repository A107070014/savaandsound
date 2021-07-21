
    $(document).ready(function () {
        $(".tab-item").hide();
        $("#tab-item1").show();
        $("#tab1").click(function () {
            $(".tab-item").hide();
            $(".tab").removeClass("active");
            $("#tab1").addClass("active");
            $("#tab-item1").show();
        });
        $("#tab2").click(function () {
            $(".tab-item").hide();
            $(".tab").removeClass("active");
            $("#tab2").addClass("active");
            $("#tab-item2").show();
        });
        $("#tab3").click(function () {
            $(".tab-item").hide();
            $(".tab").removeClass("active");
            $("#tab3").addClass("active");
            $("#tab-item3").show();
        });
        $("#tab4").click(function () {
            $(".tab-item").hide();
            $(".tab").removeClass("active");
            $("#tab4").addClass("active");
            $("#tab-item4").show();
        });
        $("#tab5").click(function () {
            $(".tab-item").hide();
            $(".tab").removeClass("active");
            $("#tab5").addClass("active");
            $("#tab-item5").show();
        });
        $("#tab6").click(function () {
            $(".tab-item").hide();
            $(".tab").removeClass("active");
            $("#tab6").addClass("active");
            $("#tab-item6").show();
        });
    });
