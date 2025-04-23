
addEventListener("scroll", () => {

    const winY = window.scrollY

    var header_id = document.getElementById("header")

    var banner_left_id = document.getElementById("banner_left")

    var hide_text1_id = document.getElementById("hide_text1")

    var hide_text2_id = document.getElementById("hide_text2")

    var banner_nav_id = document.getElementById("banner_nav")

    var update_nav_id = document.getElementById("update_nav")

    var slide1_id = document.getElementById("slide1")

    var slide2_id = document.getElementById("slide2")

    var update_title_setup_id = document.getElementById("update_title_setup")

    var scaleD = Math.max(1 - winY / 1000, 0.5)

    var opacityD = Math.max(1 - winY / 300, 0)

    banner_left_id.style.transform = `scale(${scaleD})`

    banner_left_id.style.opacity = opacityD

    console.log(winY)

    if (winY >= 230) {
        header_id.style.backgroundColor = "#6fa0bd"
    }
    if (winY <= 80) {
        header_id.style.backgroundColor = "transparent"
        hide_text1_id.style.opacity = "1"
        hide_text2_id.style.opacity = "1"
        banner_nav_id.style.opacity = "1"
    }

    if (winY >= 140) {
        hide_text1_id.style.opacity = "0"
        hide_text2_id.style.opacity = "0"
        banner_nav_id.style.opacity = "0"

    }

    if (winY >= 1200) {
        update_title_setup_id.style.opacity = "1"
    }

    if (winY >= 1300) {
        update_nav_id.style.opacity = "1"
        update_nav_id.style.transform = "translateY(0)"
    }

    if (winY >= 1900) {
        slide1_id.style.opacity = "1"
        slide1_id.style.transform = "translateY(0)"
    }
    if (winY >= 2300) {
        slide2_id.style.opacity = "1"
        slide2_id.style.transform = "translateY(0)"
    }

})


function change_iframe1() {

    var change_iframe_id = document.getElementById("change_iframe")

    var btn1_iframe_id = document.getElementById("btn1_iframe")

    var btn2_iframe_id = document.getElementById("btn2_iframe")

    btn2_iframe_id.style.backgroundColor = "transparent"
    btn2_iframe_id.style.border = "transparent"

    btn1_iframe_id.style.backgroundColor = "#293944"
    btn1_iframe_id.style.border = "2px solid #222121"

    change_iframe_id.src = "https://www.youtube.com/embed/B4EXyZdG2LI?si=rQfcC1tSKerKlkDO"



}

function change_iframe2() {

    var change_iframe_id = document.getElementById("change_iframe")

    var btn2_iframe_id = document.getElementById("btn2_iframe")

    var btn1_iframe_id = document.getElementById("btn1_iframe")

    btn1_iframe_id.style.backgroundColor = "transparent"
    btn1_iframe_id.style.border = "transparent"

    btn2_iframe_id.style.backgroundColor = "#293944"
    btn2_iframe_id.style.border = "2px solid #222121"

    change_iframe_id.src = "https://www.youtube.com/embed/LKrJ-GO4itk?si=rYMuPzKArUjx-tsC"



}