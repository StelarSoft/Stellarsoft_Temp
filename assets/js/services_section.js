$(".web-calc").hide();
$(".photo-calc").hide();
$(".ad-calc").hide();
$(".it-calc").hide();

function webDesignOnClick()
{
    $(".photo-calc").hide();
    $(".ad-calc").hide();
    $(".it-calc").hide();
    $(".web-calc").show();
    
}
function PhotographyOnClick()
{
    $(".photo-calc").show();
    $(".ad-calc").hide();
    $(".it-calc").hide();
    $(".web-calc").hide();
}
function AdvertisingOnClick()
{
    $(".photo-calc").hide();
    $(".ad-calc").show();
    $(".it-calc").hide();
    $(".web-calc").hide();
}
function ITOnClick()
{
    $(".photo-calc").hide();
    $(".ad-calc").hide();
    $(".it-calc").show();
    $(".web-calc").hide();
}
